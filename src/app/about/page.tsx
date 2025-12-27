"use client";

import {
  CheckCircle,
  Target,
  Eye,
  Sparkles,
} from "lucide-react";
import { Hero } from "@/components/ui/hero";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Hero
        title="About Us"
        subtitle="Innovating a Brighter Digital World through technology, integrity, and excellence."
      />

      <div className="section-light container mx-auto px-4 py-24 space-y-28">
        {/* Who We Are */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-10">
            Who We Are
          </h2>

          <div className="space-y-6 text-[#5E6B7A]">
            <p className="text-lg leading-relaxed">
              Shinova Technologies is a premier IT consulting and services firm
              dedicated to helping businesses navigate the complexities of the
              digital landscape. We believe that technology should be an enabler,
              not a barrier.
            </p>

            <p className="text-lg leading-relaxed">
              Founded on the principles of engineering excellence and
              customer-centricity, we bring together a team of seasoned
              architects, developers, and designers. Our goal is simple: to
              deliver high-impact digital solutions that drive real business
              growth. From startups to enterprises, we partner with
              organizations to build scalable, secure, and future-proof systems.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="relative bg-white p-10 rounded-2xl border border-[#E0E4E8] hover:border-primary hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-[#0E1A2B] mb-4">
              Our Vision
            </h3>

            <p className="text-[#5E6B7A] leading-relaxed">
              To be the global partner of choice for digital transformation,
              recognized for our innovation, quality, and commitment to creating
              a sustainable digital future.
            </p>
          </div>

          {/* Mission */}
          <div className="relative bg-white p-10 rounded-2xl border border-[#E0E4E8] hover:border-primary hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-[#0E1A2B] mb-4">
              Our Mission
            </h3>

            <p className="text-[#5E6B7A] leading-relaxed">
              To empower businesses with cutting-edge technology solutions that
              streamline operations, enhance user experiences, and unlock new
              opportunities for growth.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-14 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                desc: "We constantly explore new technologies to deliver better solutions.",
              },
              {
                title: "Quality",
                desc: "We never compromise on the standard of our code or design.",
              },
              {
                title: "Transparency",
                desc: "We build trust through open communication and honesty.",
              },
              {
                title: "Reliability",
                desc: "We deliver on our promises, on time and within budget.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-[#E0E4E8] hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>

                <h4 className="text-xl font-bold text-[#0E1A2B] mb-3">
                  {value.title}
                </h4>

                <p className="text-[#5E6B7A] text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
