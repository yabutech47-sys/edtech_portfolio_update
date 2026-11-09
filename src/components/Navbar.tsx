"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Newsfeed & Profile Bar - Exact Same Size Across All Devices */}
      <div className="bg-[#0c3963] dark:bg-[#072038] text-white border-b border-blue-900/40 select-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-9 flex items-center justify-between text-[11px] font-sans gap-2">
          {/* Left: Newsfeed Area */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="shrink-0 px-1.5 py-0.5 rounded bg-blue-500/20 text-sky-300 font-bold uppercase tracking-wider text-[10px] border border-blue-400/30">
              Newsfeed
            </span>
            <span className="truncate text-blue-100 font-normal">
              Co-created 50+ interactive digital courses with MoE & UNESCO • Teacher Training active across regions
            </span>
          </div>

          {/* Right: Company Profile PDF & Quick Links */}
          <div className="flex items-center gap-3 shrink-0 text-blue-200">
            <a
              href="/EdTech_Hub_ET_Company_Profile.pdf"
              download="EdTech_Hub_ET_Company_Profile.pdf"
              className="inline-flex items-center gap-1.5 font-semibold text-sky-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded border border-white/15"
              title="Download EdTech Hub ET Company Profile PDF"
            >
              <svg className="w-3.5 h-3.5 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Profile (PDF)</span>
            </a>
            <span className="hidden sm:inline text-blue-300/40">|</span>
            <a
              href="tel:+251911816762"
              className="hidden md:inline hover:text-white transition-colors font-medium"
            >
              +251 911 816 762
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation - Guaranteed Single Line on Desktop */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0c1827]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 whitespace-nowrap gap-4">
            {/* Logo and Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg py-1"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-blue-50/80 dark:bg-slate-850 border border-blue-200/80 dark:border-slate-700 p-1 flex items-center justify-center shadow-xs group-hover:border-blue-600 transition-colors">
                <Image
                  src="/gallery/LogoFinal.png"
                  alt="EdTech Hub ET Logo"
                  width={38}
                  height={38}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-sans text-base sm:text-lg font-black tracking-tight text-[#0f4c81] dark:text-sky-300 group-hover:text-blue-700 dark:group-hover:text-sky-200 transition-colors">
                    EdTech Hub ET
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-none mt-0.5">
                  Serving Teachers • Transforming Education
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Compact & Clean Single Line */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm text-slate-700 dark:text-slate-200">
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/#expertise"
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="/#projects"
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#impact"
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                Impact
              </Link>
              <Link
                href="/#partners"
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                Partners
              </Link>
              <Link
                href="/#contact"
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Theme Toggle (Light mode by default) */}
              <ThemeToggle />

              {/* Get In Touch Button */}
              <button
                type="button"
                onClick={onOpenInquiry}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f4c81] hover:bg-[#0a365c] dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Get In Touch</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1827] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="space-y-1 font-medium text-sm text-slate-800 dark:text-slate-200">
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                About Us
              </Link>
              <Link
                href="/#expertise"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                Key Areas of Expertise
              </Link>
              <Link
                href="/#projects"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                Projects & Work
              </Link>
              <Link
                href="/#impact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                Our Impact
              </Link>
              <Link
                href="/#partners"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                Partners & Collaborators
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <a
                href="/EdTech_Hub_ET_Company_Profile.pdf"
                download="EdTech_Hub_ET_Company_Profile.pdf"
                className="text-center px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-[#0f4c81] dark:text-sky-300 font-semibold text-xs border border-blue-200 dark:border-slate-700"
              >
                📄 Download Company Profile (PDF)
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenInquiry?.();
                }}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-[#0f4c81] dark:bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
