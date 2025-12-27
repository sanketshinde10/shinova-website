"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";
import {
  Code2,
  Palette,
  BrainCircuit,
  Puzzle,
  CloudCog,
  ShieldCheck,
  Headset,
  Video,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    title: "Web Development & Digital Platforms",
    description:
      "Custom web applications, e-commerce solutions, and enterprise portals built with modern frameworks like React, Next.js, and Node.js.",
    icon: Code2,
    features: [
      "Custom Web Apps",
      "E-commerce Platforms",
      "CMS Development",
      "PWA (Progressive Web Apps)",
    ],
  },
  {
    id: "ui-ux",
    title: "UI / UX Design & Digital Experience",
    description:
      "User-centric design that combines aesthetics with functionality to drive engagement and conversion.",
    icon: Palette,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Interface Design",
      "Usability Testing",
    ],
  },
  {
    id: "ai-automation",
    title: "AI, Automation & Business Systems",
    description:
      "Leverage artificial intelligence and automation to optimize workflows and unlock data-driven insights.",
    icon: BrainCircuit,
    features: [
      "Process Automation",
      "AI Integration",
      "Data Analytics",
      "Custom Dashboards",
    ],
  },
  {
    id: "integrations",
    title: "API & Third-Party Integrations",
    description:
      "Seamlessly connect your systems with third-party services to create a unified digital ecosystem.",
    icon: Puzzle,
    features: [
      "API Development",
      "Payment Gateways",
      "CRM Integration",
      "Legacy System Connections",
    ],
  },
  {
    id: "cloud",
    title: "Cloud, DevOps & Infrastructure",
    description:
      "Secure, scalable cloud infrastructure and CI/CD pipelines to ensure high availability and rapid deployment.",
    icon: CloudCog,
    features: [
      "Cloud Migration",
      "AWS / Azure / GCP",
      "CI/CD Pipelines",
      "Server Management",
    ],
  },
  {
    id: "qa",
    title: "Software Testing & Quality Assurance",
    description:
      "Comprehensive testing strategies to ensure your software is bug-free, secure, and performant.",
    icon: ShieldCheck,
    features: [
      "Automated Testing",
      "Manual QA",
      "Accessibility Testing",
      "Security Audits",
      "Performance Testing",
    ],
  },
  {
    id: "support",
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your digital assets secure, updated, and running smoothly.",
    icon: Headset,
    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Bug Fixes",
      "Feature Enhancements",
    ],
  },
  {
    id: "motion",
    title: "Video Editing & Motion Content",
    description:
      "Professional video editing and motion graphics to enhance your brand's visual storytelling.",
    icon: Video,
    features: [
      "Corporate Videos",
      "Motion Graphics",
      "Product Demos",
      "Social Media Content",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to scale with your business."
      />

      {/* Vertical Flow Services */}
      <section className="section-light py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-24">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="relative pl-8 border-l border-[#E0E4E8]"
                >
                  {/* Icon */}
                  <div className="absolute -left-[22px] top-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-[#E0E4E8] p-10 hover:shadow-xl transition-all">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0E1A2B] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-[#5E6B7A] text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="flex flex-wrap gap-x-8 gap-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-[#5E6B7A]"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-soft-white py-28 border-t border-[#E0E4E8]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-6">
            Need a custom solution?
          </h2>

          <p className="text-[#5E6B7A] text-lg mb-12">
            Let’s discuss your requirements and build a solution tailored to your
            business.
          </p>

          <Link href="/contact">
            <Button className="bg-primary hover:bg-[#00AFA6] text-primary-foreground font-semibold px-12 h-12 text-lg">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
