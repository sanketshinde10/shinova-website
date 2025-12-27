"use client";

import { Hero } from "@/components/ui/hero";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero (LIGHT – correct for non-home pages) */}
      <Hero title="Privacy Policy" subtitle="" />

      <div className="section-light container mx-auto px-4 py-20 max-w-4xl">
        <div className="space-y-6 text-[#5E6B7A]">
          <p className="text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="text-lg">
            At Shinova Technologies, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website.
          </p>

          <h3 className="text-2xl font-bold text-[#0E1A2B]">
            Information We Collect
          </h3>

          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, and telephone
              number, that you voluntarily give to us when you contact us.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, browser type, operating system, and access times.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0E1A2B]">
            Use of Your Information
          </h3>

          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you to:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and support requests.</li>
            <li>Improve our website and services.</li>
            <li>Communicate important updates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
