"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Layout,
  Database,
  Smartphone,
  Cloud,
  Code,
} from "lucide-react";
import { Hero } from "@/components/ui/hero";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero
        size="large"
        title="Innovating a Brighter Digital World."
        subtitle="End-to-end IT services and consulting for modern businesses. We transform complex challenges into scalable digital solutions."
        actions={
          <>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-[#00AFA6] text-primary-foreground font-semibold px-8 h-12 text-lg">
                Contact Us
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0E1A2B] px-8 h-12 text-lg"
              >
                View Services
              </Button>
            </Link>
          </>
        }
      />

      {/* Services Overview */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-4">
              Our Expertise
            </h2>
            <p className="text-[#5E6B7A] max-w-2xl mx-auto text-lg">
              Comprehensive technology solutions tailored to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-10 h-10 text-primary" />,
                title: "Web Development & Digital Platforms",
                desc: "Scalable websites and web applications built with modern frameworks.",
              },
              {
                icon: <Smartphone className="w-10 h-10 text-primary" />,
                title: "UI / UX Design & Digital Experience",
                desc: "User-centric design that drives engagement and satisfaction.",
              },
              {
                icon: <Code className="w-10 h-10 text-primary" />,
                title: "AI, Automation & Business Systems",
                desc: "Intelligent solutions to streamline operations and boost efficiency.",
              },
              {
                icon: <Cloud className="w-10 h-10 text-primary" />,
                title: "Cloud, DevOps & Infrastructure",
                desc: "Secure, scalable cloud architecture and automated deployment pipelines.",
              },
              {
                icon: <Database className="w-10 h-10 text-primary" />,
                title: "Testing, Maintenance & Support",
                desc: "Ensuring your digital assets remain secure, updated, and bug-free.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-[#E0E4E8] hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0E1A2B] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5E6B7A]">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button
                variant="link"
                className="text-primary text-lg font-semibold hover:text-[#00AFA6]"
              >
                Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-soft-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-6">
                Why Partner with <span className="text-primary">Shinova</span>?
              </h2>

              <p className="text-[#5E6B7A] text-lg mb-8 leading-relaxed">
                We don't just write code; we build digital assets that create value.
                Our approach is rooted in transparency, quality, and long-term partnership.
              </p>

              <div className="space-y-6">
                {[
                  "Modern & scalable architecture",
                  "Business-focused execution",
                  "Clean & reliable delivery",
                  "Long-term technology partnership",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <span className="text-[#0E1A2B] text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "Agile", label: "Development Process" },
                { number: "Secure", label: "Enterprise Grade" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl border border-[#E0E4E8] text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#5E6B7A] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-4">
              Our Approach
            </h2>
            <p className="text-[#5E6B7A] max-w-2xl mx-auto text-lg">
              A structured process ensuring quality delivery from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding business goals & requirements." },
              { step: "02", title: "Design", desc: "Planning architecture & user experience." },
              { step: "03", title: "Build", desc: "Agile development & rigorous testing." },
              { step: "04", title: "Scale", desc: "Deployment, support & growth strategies." },
            ].map((phase, index) => (
              <div key={index} className="relative p-6">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-[#E0E4E8] -z-10" />
                )}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-xl mb-6 mx-auto relative z-10 border-4 border-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-[#0E1A2B] text-center mb-3">
                  {phase.title}
                </h3>
                <p className="text-[#5E6B7A] text-center text-sm">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="hero-dark py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Shinova Technologies can help you achieve your digital goals.
          </p>
          <Link href="/contact">
            <Button className="border-white text-white hover:bg-white hover:text-[#0E1A2B] px-8 h-12 text-lg">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
