"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center">
              <span className="text-gold text-xs font-bold tracking-widest">SC</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold text-sm tracking-widest uppercase">Sacred Cipher</p>
              <p className="text-gold text-[10px] tracking-widest uppercase">Mission</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-gray-300 hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/donate"
              className="flex items-center gap-2 bg-gold text-dark px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-gold-light transition-colors duration-200"
            >
              <Heart size={12} fill="currentColor" />
              Donate Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-dark border-t border-gold/20">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-gray-300 hover:text-gold transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-gold text-dark px-5 py-3 text-xs font-bold tracking-widest uppercase"
            >
              <Heart size={12} fill="currentColor" />
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
