"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

interface TimelineMilestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageCaption: string;
  tagColor: string;
}

const timelineData: TimelineMilestone[] = [
  {
    year: "2020",
    badge: "Establishment and Foundation",
    title: "Building a Foundation for Educational Transformation",
    description:
      "Established as an education consultancy, EdTech Hub ET evolved into a social enterprise focused on teacher professional development, educational technology integration, digital content development, and school improvement.",
    highlights: [
      "Inception as a dedicated Ethiopian education consultancy",
      "Evolution into a sustainable social enterprise model",
      "Foundational framework for teacher professional development",
      "Early pilots in school improvement and technology integration",
    ],
    image: "/gallery/hero_photo_18.png",
    imageCaption: "EdTech Foundation Training at Testimony Centre, Addis Ababa",
    tagColor: "bg-blue-600",
  },
  {
    year: "2022",
    badge: "Partnerships and Expanding Impact",
    title: "Building Partnerships for Systemic Change",
    description:
      "We expanded collaborations with the Ministry of Education, Regional Education Bureaus, UN agencies, NGOs, and development partners. Our work grew across teacher training, digital learning, educational research, technology integration, and policy engagement, reaching thousands of educators.",
    highlights: [
      "Strategic collaboration with the Ministry of Education (MoE)",
      "Partnerships with Regional Education Bureaus (Oromia, Somali, Addis Ababa)",
      "Cooperation with UNESCO, EDIFY Ethiopia, Kaizen (USAID), and CHADET",
      "Curriculum co-creation reaching thousands of educators across Ethiopia",
    ],
    image: "/gallery/hero_photo_24.png",
    imageCaption: "Content Co-Creation Workshop with the MoE, Adama Ethiopia",
    tagColor: "bg-emerald-600",
  },
  {
    year: "2026",
    badge: "Scaling Innovation and Social Impact",
    title: "Expanding Our Reach and Deepening Our Impact",
    description:
      "We expanded our programmes across Ethiopia, reaching more than 10,000 teachers through professional development initiatives. We also strengthened our digital learning solutions and expanded engagement in youth innovation and community development.",
    highlights: [
      "More than 10,000 teachers directly trained across nationwide initiatives",
      "Co-developed national training modules reaching 100,000+ secondary teachers",
      "Early-grade offline interactive digital textbooks deployed in regional schools",
      "Active youth innovation, student leadership, and climate action programs",
    ],
    image: "/gallery/hero_photo_26.png",
    imageCaption: "Female School Leaders Capacity Building in Adama, Ethiopia",
    tagColor: "bg-amber-600",
  },
  {
    year: "Today",
    badge: "Driving Sustainable Education Transformation",
    title: "Advancing Education Across Six Core Strategic Areas",
    description:
      "Today, EdTech Hub ET operates at the forefront of digital educational innovation in Ethiopia, driving systemic transformation through six interconnected program pillars.",
    highlights: [
      "Teacher Professional Development",
      "Educational Technology Integration",
      "Digital Learning and Content Development",
      "Digital Learning Platforms & LMS Solutions",
      "Offline Digital Learning & Micro-Hubs",
      "Research, Innovation and Policy Engagement",
    ],
    image: "/gallery/hero_photo_20.jpg",
    imageCaption: "Digital Learning & Collaborative Educator Workshop",
    tagColor: "bg-indigo-600",
  },
];

const strategicPillars = [
  {
    title: "Teacher Professional Development",
    description: "Strengthening teachers' pedagogical, digital, and professional competencies.",
    icon: "🎓",
    accent: "from-blue-600 to-cyan-600",
  },
  {
    title: "Educational Technology Integration",
    description: "Supporting effective technology use in teaching, learning, and school management.",
    icon: "💻",
    accent: "from-cyan-600 to-teal-600",
  },
  {
    title: "Digital Learning & Content Development",
    description: "Creating inclusive, interactive, curriculum-aligned digital resources.",
    icon: "📚",
    accent: "from-emerald-600 to-green-600",
  },
  {
    title: "Digital Learning Platforms",
    description: "Developing and supporting LMS solutions and online learning communities.",
    icon: "🌐",
    accent: "from-indigo-600 to-blue-600",
  },
  {
    title: "Offline Digital Learning",
    description: "Expanding access through offline learning hubs and accessible digital resources.",
    icon: "📡",
    accent: "from-amber-600 to-orange-600",
  },
  {
    title: "Research, Innovation & Policy Engagement",
    description: "Generating evidence and promoting innovative education solutions.",
    icon: "🔬",
    accent: "from-violet-600 to-purple-600",
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeYear, setActiveYear] = useState<string>("2020");

  const activeMilestone = timelineData.find((m) => m.year === activeYear) || timelineData[0];

  return (
    <>
      <Navbar onOpenInquiry={() => setModalOpen(true)} />

      <main className="flex-1 bg-white dark:bg-[#09131f] text-slate-800 dark:text-slate-100 transition-colors">
        {/* Breadcrumb Header */}
        <div className="bg-[#f5f8fc] dark:bg-[#0c1827] border-b border-slate-200 dark:border-slate-800 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0f4c81] dark:text-sky-300 font-semibold">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-white to-white dark:from-[#0c1a2d] dark:via-[#09131f] dark:to-[#09131f] border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
                About Us
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Transforming Education Through Technology and Innovation
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans pt-2">
                <strong>EdTech Hub ET</strong> is an Ethiopian education-focused social enterprise established in 2020. We develop sustainable, technology-driven solutions that improve the quality, accessibility, and inclusiveness of education.
              </p>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                We empower teachers, support education institutions, develop inclusive digital learning resources, and promote meaningful technology integration through partnerships with government, development organizations, schools, and communities.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#timeline"
                  className="px-5 py-2.5 rounded-lg bg-[#0f4c81] hover:bg-[#0a355a] text-white text-sm font-semibold transition-all shadow-sm"
                >
                  Explore Our Timeline ↓
                </a>
                <a
                  href="/EdTech_Hub_ET_Company_Profile.pdf"
                  download="EdTech_Hub_ET_Company_Profile.pdf"
                  className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-[#0f4c81] dark:text-sky-300 border border-blue-200 dark:border-slate-700 text-sm font-semibold transition-all shadow-xs"
                >
                  📄 Download Company Profile (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline Section with Subtle Animation */}
        <section id="timeline" className="py-20 sm:py-28 bg-[#f5f8fc] dark:bg-[#0c1827] border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
                Our Evolution
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Our Journey & Milestones
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                From our foundation as an education consultancy to scaling nationwide impact across Ethiopia.
              </p>
            </div>

            {/* Interactive Year Selector Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm gap-2">
                {timelineData.map((m) => (
                  <button
                    key={m.year}
                    onClick={() => setActiveYear(m.year)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      activeYear === m.year
                        ? "bg-[#0f4c81] text-white shadow-md scale-102"
                        : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <span>{m.year}</span>
                    <span className="hidden md:inline ml-1.5 opacity-80 font-normal">
                      • {m.badge.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Milestone Card with Subtle Animation */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-[#0f1e31] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl transition-all duration-300 animate-in fade-in zoom-in-98 duration-300">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Photo & Caption */}
                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 dark:border-slate-700">
                    <Image
                      src={activeMilestone.image}
                      alt={activeMilestone.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-md text-xs font-black text-white shadow-sm ${activeMilestone.tagColor}`}>
                      {activeMilestone.year} Milestone
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-medium">
                      {activeMilestone.imageCaption}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                      {activeMilestone.year} | {activeMilestone.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                    {activeMilestone.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {activeMilestone.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2">
                      {activeMilestone.highlights.map((h) => (
                        <li key={h} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                          <span className="text-blue-500 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Flow Overview of All Years */}
            <div className="mt-16 max-w-4xl mx-auto space-y-8">
              <h4 className="text-center font-sans text-xl font-bold text-slate-900 dark:text-white mb-6">
                Chronological Roadmap
              </h4>

              <div className="relative border-l-2 border-blue-200 dark:border-blue-900/60 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
                {timelineData.map((item) => (
                  <div key={item.year} className="relative group">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-[#0c1827] transition-colors ${
                        activeYear === item.year
                          ? "bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900/50"
                          : "bg-slate-300 dark:bg-slate-700"
                      }`}
                    />

                    <div className="bg-white dark:bg-[#0f1e31] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-base font-black text-[#0f4c81] dark:text-sky-300 font-mono">
                          {item.year} | {item.badge}
                        </span>
                        <button
                          onClick={() => setActiveYear(item.year)}
                          className="text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline cursor-pointer"
                        >
                          View Details →
                        </button>
                      </div>
                      <h5 className="font-sans text-base font-bold text-slate-900 dark:text-white mt-1">
                        {item.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Today: 6 Key Strategic Areas */}
        <section className="py-20 sm:py-28 bg-white dark:bg-[#09131f] border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
                Today & The Future
              </span>
              <h2 className="mt-3 font-sans text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Driving Sustainable Education Transformation
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We continue to advance education through six key strategic pillars designed for systemic impact across schools and communities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicPillars.map((p, idx) => (
                <div
                  key={p.title}
                  className="bg-[#f5f8fc] dark:bg-[#0f1e31] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-sky-400">
                    <span>Active Program</span>
                    <span>✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-[#0f4c81] via-blue-700 to-cyan-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-bold uppercase tracking-wider border border-white/20">
              Our Core Commitment
            </span>

            <blockquote className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed max-w-3xl mx-auto">
              &ldquo;We believe quality education should be accessible to everyone. As a social enterprise, we create sustainable solutions that generate meaningful social impact, strengthen education systems, and expand equitable learning opportunities across Ethiopia.&rdquo;
            </blockquote>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 rounded-lg bg-white text-[#0f4c81] hover:bg-blue-50 font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                Partner With Us
              </button>
              <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-blue-900/60 hover:bg-blue-900/90 text-white border border-white/20 font-semibold text-sm transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenInquiry={() => setModalOpen(true)} />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProject="About Us - Strategic Partnership"
      />
    </>
  );
}
