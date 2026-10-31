"use client";

import { useState, useMemo } from "react";

interface Project {
  id: string;
  title: string;
  category: "teachers" | "content" | "youth" | "platforms";
  partner: string;
  scope: string;
  description: string;
  achievements: string[];
  impactMetric: string;
  badgeColor: string;
}

const projectsList: Project[] = [
  {
    id: "proj-1",
    title: "Teacher Professional Development & EdTech Foundations",
    category: "teachers",
    partner: "Ministry of Education & Testimony Centre",
    scope: "National Reach • Secondary & Primary Educators",
    description:
      "Comprehensive digital literacy and pedagogical training programs delivered face-to-face and online to equip educators with 21st-century teaching methods, AI tools, and hybrid classroom management.",
    achievements: [
      "Trained over 10,000 education professionals",
      "National modules co-developed reaching 100,000+ secondary teachers",
      "Specialized modules in AI for Teaching and Technology Leadership",
    ],
    impactMetric: "100,000+ Teachers Reached",
    badgeColor: "bg-blue-600",
  },
  {
    id: "proj-2",
    title: "50+ Interactive Digital Courses Co-Creation",
    category: "content",
    partner: "UNESCO, EDIFY Ethiopia, Oromia REB & CHADET",
    scope: "National Curriculum • Multi-Regional",
    description:
      "Design and production of over 50 interactive digital courses incorporating interactive videos, simulations, quizzes, collaborative tools, and integrated AI for instant learner feedback.",
    achievements: [
      "Over 50 interactive digital courses developed and deployed",
      "Learner-centered instructional design with gamified activities",
      "Co-creation workshops hosted with MoE in Adama, Ethiopia",
    ],
    impactMetric: "50+ Interactive Courses",
    badgeColor: "bg-emerald-600",
  },
  {
    id: "proj-3",
    title: "Early-Grade Offline Interactive Digital Textbooks",
    category: "content",
    partner: "Somali REB, Oromia REB & Elixir Ethiopia",
    scope: "Somali & Oromia Regions • Early-Grade Learners",
    description:
      "Converting national early-grade textbooks into fully functional, offline interactive digital textbooks accessible on tablets and computers in low-connectivity schools.",
    achievements: [
      "100% offline functionality for off-grid rural classrooms",
      "Multilingual support in local languages",
      "Interactive exercises and audio guidance for young learners",
    ],
    impactMetric: "Full Offline Capability",
    badgeColor: "bg-sky-600",
  },
  {
    id: "proj-4",
    title: "Youth Climate Action & Digital Child Protection",
    category: "youth",
    partner: "Kaizen (USAID) & 10 Secondary Schools",
    scope: "Addis Ababa & Regional Schools",
    description:
      "Integrating student leadership, online child safety frameworks, and community-based climate change advocacy to empower youth through active civic and digital participation.",
    achievements: [
      "Over 1,000 youth empowered with climate action & leadership skills",
      "Showcasing events and community prototypes across 10 schools",
      "Frameworks developed for Online Child Protection and Safeguarding",
    ],
    impactMetric: "1,000+ Youth Empowered",
    badgeColor: "bg-amber-600",
  },
  {
    id: "proj-5",
    title: "Female School Leaders Capacity Building",
    category: "teachers",
    partner: "Regional Education Bureaus & MoE",
    scope: "Adama, Ethiopia • Institutional Leaders",
    description:
      "Tailored executive training program equipping female school leaders, headteachers, and supervisors with strategic technology management, data-driven decision-making, and mentorship skills.",
    achievements: [
      "Executive management and technology integration bootcamps",
      "Communities of practice established among regional school heads",
      "Action-plan implementation across participating institutions",
    ],
    impactMetric: "Leadership Communities Formed",
    badgeColor: "bg-indigo-600",
  },
  {
    id: "proj-6",
    title: "Low-Connectivity LMS & Mobile Telegram Outreach",
    category: "platforms",
    partner: "Universities & Partner Schools",
    scope: "Low-Bandwidth & Remote Areas",
    description:
      "Deploying customized Learning Management Systems (LMS) and interactive Telegram bots to distribute critical educational modules, report tracking, and lesson plans without heavy data costs.",
    achievements: [
      "Custom LMS platforms for registration and tracking delivery",
      "Automated Telegram bots delivering micro-learning to mobile phones",
      "Offline AI assistants for teachers without reliable internet",
    ],
    impactMetric: "Zero-Data Optimized",
    badgeColor: "bg-cyan-600",
  },
];

export default function ProjectsDirectory({ onSelectProject }: { onSelectProject?: (title: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "teachers", label: "Teacher Training" },
    { id: "content", label: "Digital Content & Textbooks" },
    { id: "youth", label: "Youth & Climate" },
    { id: "platforms", label: "LMS & Platforms" },
  ];

  const filtered = useMemo(() => {
    return projectsList.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.partner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-[#0c1827] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
              Our Work
            </div>
            <h2 className="mt-3 font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Explore our current programs delivering tangible impact in teacher professional development, interactive curriculum creation, and youth empowerment across Ethiopia.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 dark:bg-[#0f1e31] border border-blue-100 dark:border-slate-800 shrink-0">
            <div className="text-xs font-bold uppercase text-blue-900 dark:text-sky-300">
              Active Portfolios
            </div>
            <div className="text-2xl font-black text-[#0f4c81] dark:text-white mt-0.5">
              6 Core Initiatives
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sample actual work shared upon request
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-[#0f4c81] text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-[#0f1e31] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className={`px-2.5 py-1 rounded text-xs font-bold text-white ${proj.badgeColor}`}>
                    {proj.impactMetric}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    EdTech Hub ET
                  </span>
                </div>

                <h3 className="mt-4 font-sans text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                  {proj.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-sky-400">
                  Partners: {proj.partner}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  {proj.achievements.map((ach) => (
                    <div key={ach} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {proj.scope}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectProject?.(proj.title)}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-[#0f4c81] dark:text-sky-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
