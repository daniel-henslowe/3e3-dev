import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import TechBackground from "@/components/TechBackground"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Daniel Henslowe | Full-Stack Developer",
  description: "Full-stack developer building exceptional digital experiences with modern technologies. Focused on creating fast, accessible, and beautiful web applications.",
  keywords: ["developer", "full-stack", "react", "next.js", "typescript", "web development"],
  authors: [{ name: "Daniel Henslowe" }],
  openGraph: {
    title: "Daniel Henslowe | Full-Stack Developer",
    description: "Full-stack developer building exceptional digital experiences with modern technologies.",
    url: "https://3e3.dev",
    siteName: "Daniel Henslowe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Henslowe | Full-Stack Developer",
    description: "Full-stack developer building exceptional digital experiences with modern technologies.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TechBackground />
        {children}
      </body>
    </html>
  )
}
