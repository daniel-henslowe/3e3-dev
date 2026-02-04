import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Daniel Henslowe",
  description: "Privacy policy for 3e3.dev",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#09090b] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: February 3, 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Welcome to 3e3.dev ("we," "our," or "us"). This Privacy Policy explains how we collect,
              use, and protect your information when you visit our website at 3e3.dev (the "Site").
            </p>
            <p className="text-zinc-300 leading-relaxed">
              By using our Site, you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We collect minimal information to provide and improve our Site:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
              <li>
                <strong className="text-zinc-200">Log Data:</strong> When you visit our Site, our servers
                may automatically log standard information including your IP address, browser type,
                pages visited, and the time and date of your visit.
              </li>
              <li>
                <strong className="text-zinc-200">Contact Information:</strong> If you choose to contact
                us via email, we will receive your email address and any information you include in
                your message.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
              <li>Operate and maintain our Site</li>
              <li>Respond to your inquiries and communications</li>
              <li>Analyze usage patterns to improve our Site</li>
              <li>Protect against unauthorized access or illegal activity</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Our Site may use cookies and similar tracking technologies to enhance your experience.
              Cookies are small data files stored on your device. You can instruct your browser to
              refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              We may use analytics services (such as Cloudflare Web Analytics) that collect anonymous
              usage data to help us understand how visitors interact with our Site. These services do
              not use cookies and do not track individual users across websites.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Our Site is hosted on Cloudflare and may use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
              <li>
                <strong className="text-zinc-200">Cloudflare:</strong> For hosting, CDN, and security
                services. See{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Cloudflare's Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-zinc-200">GitHub:</strong> Links to our GitHub profile and
                repositories. See{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  GitHub's Privacy Statement
                </a>.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-zinc-300 leading-relaxed">
              We take reasonable measures to protect your information from unauthorized access,
              alteration, or destruction. However, no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to or restrict certain processing</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:hello@3e3.dev"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                hello@3e3.dev
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Children's Privacy</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our Site is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              Your continued use of the Site after any changes constitutes acceptance of the new
              Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:hello@3e3.dev"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                hello@3e3.dev
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
