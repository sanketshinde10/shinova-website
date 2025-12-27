"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Hero } from "@/components/ui/hero";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();

      // Auto-hide success message
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-20">
      <Hero
        title="Contact Us"
        subtitle="Ready to start your next project? Get in touch with our team."
      />

      <div className="section-light container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0E1A2B] mb-8">
              Get in Touch
            </h2>

            <p className="text-[#5E6B7A] text-lg mb-12">
              Whether you have a question about our services, pricing, or need a
              custom solution, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8 mb-12">
              <InfoItem icon={<Mail />} title="Email" value="hello@shinova.tech" />
              <InfoItem icon={<Phone />} title="Phone" value="+1 (555) 123-4567" />
              <InfoItem
                icon={<MapPin />}
                title="Location"
                value="San Francisco, CA (Remote Friendly)"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#0E1A2B] mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <SocialLink href="https://linkedin.com">
                  <Linkedin size={20} />
                </SocialLink>
                <SocialLink href="https://instagram.com">
                  <Instagram size={20} />
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E0E4E8]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="h-12 bg-[#F5F7FA]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          className="h-12 bg-[#F5F7FA]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[150px] bg-[#F5F7FA] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-lg bg-primary hover:bg-[#00AFA6]"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {submitted && (
                  <p className="text-green-600 text-center font-medium mt-4">
                    Thank you for reaching out. We’ll get back to you soon.
                  </p>
                )}

                {error && (
                  <p className="text-red-600 text-center font-medium mt-4">
                    {error}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small reusable helpers ---------- */

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-[#0E1A2B]">{title}</h3>
        <p className="text-[#5E6B7A]">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white text-primary transition flex items-center justify-center"
    >
      {children}
    </a>
  );
}
