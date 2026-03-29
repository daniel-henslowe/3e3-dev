# Kali Linux VM Setup — MacBook Air M1

## Overview

Kali Linux running in UTM (Apple Virtualization) on macOS Tahoe with Alfa AWUS036AXML USB WiFi adapter passthrough via USB/IP. Monitor mode, packet injection, and all Kali tools fully functional.

## Architecture

```
┌─────────────────────────────────────────────┐
│  MacBook Air M1 (macOS Tahoe 26.3.1)        │
│                                              │
│  ┌──────────────┐    ┌───────────────────┐  │
│  │ Alfa         │    │ pyusbip server    │  │
│  │ AWUS036AXML  │───▶│ port 3240         │  │
│  │ (USB-C)      │    │ (LaunchDaemon)    │  │
│  └──────────────┘    └────────┬──────────┘  │
│                               │              │
│                    bridge100 (192.168.64.1)   │
│                               │              │
│  ┌────────────────────────────┼──────────┐  │
│  │  UTM — Apple Virtualization│          │  │
│  │  ┌─────────────────────────┼───────┐  │  │
│  │  │ Kali Linux ARM64        │       │  │  │
│  │  │ eth0: 192.168.64.x      │       │  │  │
│  │  │                         ▼       │  │  │
│  │  │ usbip-alfa.service ──▶ wlan0    │  │  │
│  │  │ (auto-connect 30s)   mt7921u   │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## Components

### Hardware
| Component | Details |
|-----------|---------|
| MacBook | Air M1, macOS Tahoe 26.3.1 |
| WiFi Adapter | Alfa AWUS036AXML (MediaTek MT7921AU) |
| USB IDs | Vendor: 0x0e8d, Product: 0x7961 |
| Connection | USB-C |

### Software
| Component | Details |
|-----------|---------|
| VM Platform | UTM 4.7.5 (Apple Virtualization backend) |
| Guest OS | Kali Linux ARM64 (kernel 6.18.12+kali) |
| USB/IP Server | pyusbip (patched for USB 3.0 SuperSpeed) |
| WiFi Driver | mt7921u (built into Kali kernel) |

## VM Configuration

- **Backend**: Apple Virtualization (NOT QEMU — QEMU has PCI host bridge boot errors on ARM64)
- **CPU**: 4 cores
- **RAM**: 8192 MB
- **Disk**: 64 GB
- **Network**: Shared (NAT via bridge100)
- **Display**: VirtIO GPU, dynamic resolution
- **Credentials**: kali / kali

### UTM Config Location
```
~/Library/Containers/com.utmapp.UTM/Data/Documents/Kali Linux.utm/config.plist
```

### Important Config Notes
- `ClipboardSharing` must be `false` (crashes VM without SPICE guest agent)
- Backend must be `Apple` (QEMU backend causes PCI host bridge errors)

## USB/IP Setup

### Why USB/IP?
Apple Virtualization framework does not support USB device passthrough. The Alfa adapter has no macOS drivers. USB/IP bridges the gap by sharing the USB device over TCP from the Mac to the Kali VM.

### Mac Side — pyusbip Server

**Location**: `~/Dev/kali-vm/pyusbip/pyusbip.py`

**Key patches applied to upstream pyusbip:**
1. Changed bind address from `127.0.0.1` to `0.0.0.0` (listen on all interfaces)
2. Added USB 3.0 SuperSpeed support:
   ```python
   USBIP_SPEED_SUPER = 5
   # Changed: usb1.SPEED_SUPER: USBIP_SPEED_HIGH
   # To:      usb1.SPEED_SUPER: USBIP_SPEED_SUPER
   ```
   Without this fix, the Alfa (USB 3.0 device) fails with "Invalid ep0 maxpacket: 9" errors because it's presented as USB 2.0.

**Auto-start LaunchDaemon**: `/Library/LaunchDaemons/com.r3kt.usbip.plist`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.r3kt.usbip</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/Users/dannyhenslowe/Dev/kali-vm/pyusbip/pyusbip.py</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/var/log/usbip-server.log</string>
    <key>StandardErrorPath</key>
    <string>/var/log/usbip-server.log</string>
</dict>
</plist>
```

**Manual start script**: `~/Dev/kali-vm/start-usbip.sh`

**Dependencies**: `pip3 install libusb1 pyusb` + `brew install libusb`

### Kali Side — Auto-Connect Service

**Script**: `/usr/local/bin/usbip-alfa.sh`
```bash
#!/bin/bash
sleep 10
modprobe vhci-hcd
MAC_HOST="192.168.64.1"
while true; do
    if ! lsusb | grep -q "0e8d:7961"; then
        usbip attach -r $MAC_HOST -b 0-1 2>/dev/null
    fi
    sleep 30
done
```

**Systemd service**: `/etc/systemd/system/usbip-alfa.service`
```ini
[Unit]
Description=USB/IP Alfa AWUS036AXML Auto-Connect
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/usr/local/bin/usbip-alfa.sh
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Enable**: `sudo systemctl enable usbip-alfa.service`

**Kali packages needed**: `sudo apt install usbip hwdata usbutils`

## Usage

### Normal Boot (everything auto-connects)
1. Plug in Alfa adapter to MacBook USB-C
2. Start Kali VM in UTM
3. Wait ~30 seconds — `wlan0` appears automatically

### Monitor Mode
```bash
sudo airmon-ng check kill
sudo airmon-ng start wlan0
# wlan0mon is now active
sudo airodump-ng wlan0mon
```

### Connect to WiFi Network
```bash
sudo nmcli device wifi connect "SSID" password "password" ifname wlan0
```

### SSH from Mac into Kali
```bash
sshpass -p 'kali' ssh kali@192.168.64.x
# Find IP: arp -a | grep 192.168.64
```

### Stop Monitor Mode
```bash
sudo airmon-ng stop wlan0mon
```

## Troubleshooting

### wlan0 not appearing
1. Check Alfa is plugged in: `ioreg -p IOUSB -w0 | grep Wireless`
2. Check pyusbip server: `sudo lsof -i :3240`
3. If not running: `~/Dev/kali-vm/start-usbip.sh`
4. In Kali, manually attach: `sudo usbip attach -r 192.168.64.1 -b 0-1`

### "Invalid ep0 maxpacket" errors
The pyusbip SuperSpeed patch wasn't applied. Check `~/Dev/kali-vm/pyusbip/pyusbip.py`:
- `USBIP_SPEED_SUPER = 5` must exist
- `usb1.SPEED_SUPER: USBIP_SPEED_SUPER` (not USBIP_SPEED_HIGH)

### VM won't start ("Operation not supported")
Check `ClipboardSharing` is `false` in the UTM config.plist.

### pyusbip "Address already in use"
```bash
sudo pkill -9 -f pyusbip
sleep 2
~/Dev/kali-vm/start-usbip.sh
```

## What Doesn't Work
- **USB passthrough via UTM GUI** — Apple Virtualization doesn't support it
- **QEMU backend in UTM** — PCI host bridge boot errors with Kali ARM64
- **VMware Fusion** — Broadcom login wall, can't download
- **VirtualHere free** — API timeout on attach (license needed for actual USB data transfer)
- **Native macOS WiFi** — No drivers exist for MT7921AU on macOS

---

*Last updated: 2026-03-28*
