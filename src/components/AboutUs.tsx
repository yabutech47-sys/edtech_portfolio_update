"use client";

import Image from "next/image";

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
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0f4c81] to-blue-600 text-white p-5 rounded-xl shadow-xl max-w-xs border border-blue-400/30">
              <span className="text-2xl font-black block">Est. 2021</span>
              <span className="text-xs text-blue-100 leading-snug block mt-1">
                Pioneering social enterprise transforming education across Ethiopia
              </span>
            </div>
          </div>

          {/* Text Content Directly from PDF */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
              About Us
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Pioneering Scalable Solutions in Educational Technology
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>EdTech Hub Ethiopia (EdTech Hub ET)</strong> is a pioneering social enterprise established in 2021 with the mission of transforming education and training through innovative digital technologies. The organization works to strengthen education systems by equipping educators, institutions, and learners with the tools and skills needed to succeed in a rapidly evolving digital learning environment.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              EdTech Hub ET designs and delivers practical, scalable solutions in educational technology integration, teacher professional development, digital learning content creation, curriculum development, and institutional capacity building.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              The organization collaborates closely with government institutions, development partners, universities, schools, and civil society organizations to promote innovative and inclusive education practices across Ethiopia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-sky-300 font-bold shrink-0">
                ✓
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#0f4c81] dark:text-sky-300 italic">
                &ldquo;Technology in the hands of good teacher transforms education!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
