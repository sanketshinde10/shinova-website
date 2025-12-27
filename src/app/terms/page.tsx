"use client";

import { Hero } from "@/components/ui/hero";

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero (LIGHT – correct for non-home pages) */}
      <Hero title="Terms & Conditions" subtitle="" />

      <div className="section-light container mx-auto px-4 py-20 max-w-4xl">
        <div className="space-y-6 text-[#5E6B7A]">
          <p className="text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="text-lg">
            These Terms and Conditions constitute a legally binding agreement
            made between you, whether personally or on behalf of an entity
            ("you") and Shinova Technologies ("we," "us" or "our"), concerning
            your access to and use of the website.
          </p>

          <h3 className="text-2xl font-bold text-[#0E1A2B]">
            Agreement to Terms
          </h3>

          <p>
            By accessing the Site, you have read, understood, and agreed to be
            bound by all of these Terms and Conditions. If you do not agree with
            all of these Terms and Conditions, then you are expressly prohibited
            from using the Site and you must discontinue use immediately.
          </p>

          <h3 className="text-2xl font-bold text-[#0E1A2B]">
            Intellectual Property Rights
          </h3>

          <p>
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the "Content") and the trademarks, service marks, and
            logos contained therein (the "Marks") are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h3 className="text-2xl font-bold text-[#0E1A2B]">
            User Representations
          </h3>

          <p>By using the Site, you represent and warrant that:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              All information you submit will be true, accurate, current, and
              complete.
            </li>
            <li>
              You will maintain the accuracy of such information and promptly
              update it as necessary.
            </li>
            <li>
              You have the legal capacity and agree to comply with these Terms
              and Conditions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
