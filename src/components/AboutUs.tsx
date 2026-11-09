"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-[#0c1827] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo Showcase with Real Field Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-100 dark:border-slate-700">
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src="/gallery/hero_photo_12.png"
                  alt="Assai School Addis Ababa - EdTech Hub ET in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                Assai School, Addis Ababa
              </div>
            </div>

            {/* Decorative accent card */}
            
          </div>

          {/* Text Content Directly from Scope */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
              About Us
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Transforming Education Through Technology and Innovation
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <strong>EdTech Hub ET</strong> is an Ethiopian education-focused social enterprise established in 2020. We develop sustainable, technology-driven solutions that improve the quality, accessibility, and inclusiveness of education.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              We empower teachers, support education institutions, develop inclusive digital learning resources, and promote meaningful technology integration through partnerships with government, development organizations, schools, and communities.
            </p>

            {/* Mini Milestone Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-xs font-black text-blue-600 dark:text-sky-400 block font-mono">2020</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight block mt-0.5">Foundation</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-xs font-black text-blue-600 dark:text-sky-400 block font-mono">2022</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight block mt-0.5">Partnerships</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-xs font-black text-blue-600 dark:text-sky-400 block font-mono">2026</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight block mt-0.5">Scaling</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 block font-mono">Today</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight block mt-0.5">Transformation</span>
              </div>
            </div>

            {/* "See More" Action Link to Dedicated Page */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f4c81] hover:bg-[#0a355a] text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                <span>See More & Explore Our Journey</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href="/EdTech_Hub_ET_Company_Profile.pdf"
                download="EdTech_Hub_ET_Company_Profile.pdf"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-sky-400 hover:underline"
              >
                <span>Download Profile PDF</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
