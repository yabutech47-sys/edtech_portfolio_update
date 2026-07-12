"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Our Work",
    items: [
      { label: "Teacher Development", href: "#" },
      { label: "Digital Textbooks", href: "#" },
      { label: "Youth Engagement", href: "#" },
      { label: "Capacity Building", href: "#" },
      { label: "Research & Policy", href: "#" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Reports & Publications", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Data & Statistics", href: "#" },
      { label: "Toolkits & Guides", href: "#" },
      { label: "Multimedia", href: "#" },
    ],
  },
  {
    label: "News",
    items: [
      { label: "Press Releases", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Events", href: "#" },
      { label: "Stories of Impact", href: "#" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Our Mission", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-warm-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">EE</span>
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-primary">
                Ethiopia EdTech
              </span>
              <span className="block text-[11px] text-muted-text tracking-widest uppercase leading-tight">
                Alliance
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-dark-text hover:text-primary transition-colors rounded-lg hover:bg-warm-gray">
                  {item.label}
                  <svg
                    className={`inline-block ml-1 w-3.5 h-3.5 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-warm-gray-dark py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-2.5 text-sm text-muted-text hover:text-primary hover:bg-warm-gray transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Donate
            </Link>
            <Link
              href="#"
              className="hidden sm:inline-flex items-center px-5 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Partner With Us
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-warm-gray transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-warm-gray-dark bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button className="w-full text-left px-3 py-2.5 text-sm font-semibold text-dark-text hover:bg-warm-gray rounded-lg transition-colors">
                  {item.label}
                </button>
                <div className="ml-4 space-y-1 pb-2">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-3 py-2 text-sm text-muted-text hover:text-primary hover:bg-warm-gray rounded-lg transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="#"
                className="text-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Donate
              </Link>
              <Link
                href="#"
                className="text-center px-5 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
