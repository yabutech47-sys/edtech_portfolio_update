"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
  onOpenInquiry?: () => void;
}

const gallerySlides = [
  {
    image: "/gallery/hero_photo_20.jpg",
    title: "Teacher Professional Development & EdTech Training",
    location: "Testimony Centre & Regional Hubs, Addis Ababa",
    caption: "Equipping teachers with digital & pedagogical competencies, AI tools, and hybrid teaching.",
    glowColor: "rgba(15, 76, 129, 0.55)",
    ambientClass: "from-blue-600/25 via-sky-500/15 to-transparent",
  },
  {
    image: "/gallery/hero_photo_39.jpg",
    title: "Interactive Digital Learning in Schools",
    location: "Assai School, Addis Ababa",
    caption: "Deploying interactive digital textbooks and tablet learning for students and classrooms.",
    glowColor: "rgba(2, 132, 199, 0.55)",
    ambientClass: "from-cyan-600/25 via-blue-500/15 to-transparent",
  },
  {
    image: "/gallery/hero_photo_24.png",
    title: "Content Co-Creation with Ministry of Education",
    location: "Adama, Ethiopia",
    caption: "Over 50 interactive digital courses developed with UNESCO, MoE, EDIFY, and Regional Bureaus.",
    glowColor: "rgba(16, 185, 129, 0.5)",
    ambientClass: "from-emerald-600/20 via-teal-500/15 to-transparent",
  },
  {
    image: "/gallery/hero_photo_26.png",
    title: "Female School Leaders Capacity Building",
    location: "Adama, Ethiopia",
    caption: "Equipping educators and institutional leaders with 21st-century leadership competencies.",
    glowColor: "rgba(99, 102, 241, 0.5)",
    ambientClass: "from-indigo-600/20 via-blue-500/15 to-transparent",
  },
  {
    image: "/gallery/hero_photo_16.png",
    title: "Youth Climate & Student Leadership Showcase",
    location: "10 Schools Showcase, Addis Ababa",
    caption: "Empowering 1,000+ youth with digital safeguarding, climate action, and community leadership.",
    glowColor: "rgba(245, 158, 11, 0.45)",
    ambientClass: "from-amber-600/20 via-orange-500/15 to-transparent",
  },
];

export default function Hero({ onOpenInquiry }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = gallerySlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-[#091524] dark:via-[#0c1827] dark:to-[#0a1420] border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
      {/* Ambient background wash dynamically reflecting the active slide colors */}
      <div
        className={`absolute top-0 right-0 w-full sm:w-2/3 h-full bg-gradient-to-bl ${slide.ambientClass} pointer-events-none transition-all duration-1000 blur-3xl opacity-70`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Mission, Value Proposition, Action CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800 text-[#0f4c81] dark:text-sky-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400" />
              <span>Technology in the hands of good teacher transforms education!</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Transforming Education & Training Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4c81] via-blue-600 to-cyan-500 dark:from-sky-300 dark:to-blue-500">
                Innovative Digital Technologies.
              </span>
            </h1>

            {/* Subhead with exact factual content from Company Profile */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              EdTech Hub Ethiopia is a pioneering social enterprise established in 2021. We equip educators, institutions, and learners across Ethiopia with practical, scalable solutions in teacher professional development, digital content, and institutional capacity building.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0f4c81] hover:bg-[#0a355a] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore Our Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="/EdTech_Hub_ET_Company_Profile.pdf"
                download="EdTech_Hub_ET_Company_Profile.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-[#0f4c81] dark:text-sky-300 border border-blue-200 dark:border-slate-700 text-sm font-semibold transition-all shadow-xs"
              >
                <svg className="w-4 h-4 text-blue-600 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Profile (PDF)</span>
              </a>

              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 text-sm font-medium transition-colors"
              >
                <span>Partner With Us</span>
                <span>→</span>
              </button>
            </div>

            {/* Quick Metrics from Profile */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0f4c81] dark:text-sky-400">
                  10,000+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Professionals Trained
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0f4c81] dark:text-sky-400">
                  100,000+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Secondary Teachers Reached
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0f4c81] dark:text-sky-400">
                  50+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Interactive Courses
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Auto-advancing Picture Gallery with YouTube Ambient Light Effect */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* YouTube Ambient Light Mode Effect:
                  A heavily blurred duplicate that creates the radiant colored glow matching the photo edges! */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-3xl opacity-60 dark:opacity-45 transition-all duration-1000 -z-10 blur-2xl sm:blur-3xl"
                style={{
                  background: slide.glowColor,
                }}
              />

              {/* Main Photo Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border-2 border-white/80 dark:border-slate-700/80">
                <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                  <Image
                    key={slide.image}
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105 animate-in fade-in zoom-in-95 duration-500"
                    priority
                  />

                  {/* Subtle Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Location Tag Top-Right */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                    📍 {slide.location}
                  </div>

                  {/* Slide Content Caption Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                      Field Activity // EdTech Hub ET
                    </span>
                    <h3 className="text-base sm:text-lg font-bold leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                      {slide.caption}
                    </p>
                  </div>
                </div>

                {/* Gallery Controls & Indicator Bar */}
                <div className="bg-slate-950/95 px-4 py-2.5 flex items-center justify-between border-t border-slate-850">
                  <div className="flex items-center gap-1.5">
                    {gallerySlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentSlide === idx
                            ? "w-7 bg-blue-500"
                            : "w-2 bg-slate-600 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to photo ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length
                        )
                      }
                      className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Previous photo"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {currentSlide + 1} / {gallerySlides.length}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentSlide((prev) => (prev + 1) % gallerySlides.length)
                      }
                      className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Next photo"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
