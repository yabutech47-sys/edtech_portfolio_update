"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onOpenInquiry?: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {

  return (
    <footer id="contact" className="bg-[#091523] text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="EdTech Hub ET Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-sans text-xl font-black text-white block">
                  EdTech Hub ET
                </span>
                <span className="text-xs text-sky-400 font-medium block">
                  Serving Teachers • Transforming Education
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A pioneering social enterprise established in 2021 transforming education and training through innovative digital technologies across Ethiopia.
            </p>

            <p className="text-xs text-sky-300 font-semibold italic">
              &ldquo;Technology in the hands of good teacher transforms education!&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="/EdTech_Hub_ET_Company_Profile.pdf"
                download="EdTech_Hub_ET_Company_Profile.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <span>📄 Company Profile (PDF)</span>
              </a>
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>Partner With Us</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  Key Areas of Expertise
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-white transition-colors">
                  Partners & Collaborators
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Areas */}
          <div>
            <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4">
              Expertise
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  Teacher Professional Development
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  Digital Learning Content
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  Interactive Course Development
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  Child Protection & Youth
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  Digital Systems & LMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Directly from PDF */}
          <div>
            <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <span className="text-white font-medium block">Phone:</span>
                <a href="tel:+251911816762" className="hover:text-sky-300 block">
                  +251 911 816 762
                </a>
                <a href="tel:+251921160805" className="hover:text-sky-300 block">
                  +251 921 160 805
                </a>
              </div>
              <div>
                <span className="text-white font-medium block">Email:</span>
                <a href="mailto:ethiopiaedtech@gmail.com" className="hover:text-sky-300">
                  ethiopiaedtech@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white font-medium block">Website:</span>
                <a href="https://www.edtechet.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
                  www.edtechet.com
                </a>
              </div>
              <div>
                <span className="text-white font-medium block">Location:</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} EdTech Hub ET. All rights reserved.
          </div>
          <div className="text-slate-400 text-center md:text-right text-[11px]">
            NB: Sample actual work will be shared when requested.
          </div>
        </div>
      </div>
    </footer>
  );
}
