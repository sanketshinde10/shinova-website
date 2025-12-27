"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Shinova Technologies"
              width={180}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-[#5E6B7A] hover:text-[#0E1A2B]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact">
              <Button className="bg-primary hover:bg-[#00AFA6] text-primary-foreground font-semibold px-6 h-10">
                Get in Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0E1A2B] hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-[#5E6B7A]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-[#00AFA6] text-primary-foreground font-semibold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
