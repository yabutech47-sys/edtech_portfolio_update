"use client";

import Image from "next/image";

const expertiseAreas = [
  {
    number: "01",
    title: "Teacher Professional Development & EdTech Training",
    description:
      "Strengthening teachers' digital and pedagogical competencies through both face-to-face and online professional development programs.",
    courses: [
      "EdTech Foundations",
      "EdTech Integration and Application",
      "Technology Leadership & School Management",
      "Artificial Intelligence (AI) for Teaching & Learning",
      "Blended and Hybrid Teaching Approaches",
      "Customized institutional training programs",
    ],
    photo: "/gallery/hero_photo_18.png",
    photoCaption: "EdTech Foundation Training at Testimony Centre, Addis Ababa",
    accentBg: "bg-blue-500",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-sky-300",
  },
  {
    number: "02",
    title: "Child Protection and Youth Engagements",
    description:
      "Integrating digital child protection, safeguarding, student leadership, and climate change action into the heart of community and school interventions.",
    courses: [
      "Digital Safeguarding & Online Child Protection frameworks",
      "Climate Change initiatives (1,000+ youth with Kaizen / USAID)",
      "Student Leadership showcase sessions across 10 schools",
      "Social Behavioral Change Communication (SBCC) multimedia",
    ],
    photo: "/gallery/hero_photo_16.png",
    photoCaption: "Student Leadership & Climate Showcase Event in Addis Ababa",
    accentBg: "bg-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    number: "03",
    title: "Digital Learning Content & Interactive Course Development",
    description:
      "Learner-centered instructional design combined with multimedia and AI technologies to create engaging digital courseware and interactive textbooks.",
    courses: [
      "Over 50 interactive digital courses (UNESCO, EDIFY, MoE, CHADET)",
      "Interactive videos, simulations, quizzes & gamified activities",
      "Offline interactive digital textbooks (Somali REB, Oromia REB, Elixir)",
      "AI embedded for immediate student & trainee feedback",
    ],
    photo: "/gallery/hero_photo_24.png",
    photoCaption: "Content Co-Creation Workshop with the MoE, Adama Ethiopia",
    accentBg: "bg-sky-500",
    badgeColor: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  },
  {
    number: "04",
    title: "Institutional Capacity Building & Professional Development",
    description:
      "Equipping the educational and civil workforce from teachers to institutional leaders with 21st-century leadership and management competencies.",
    courses: [
      "Over 10,000 professionals trained nationwide",
      "Co-developed national modules reaching 100,000+ secondary teachers",
      "Cross-sectoral leadership & data-driven decision-making",
      "Female School Leaders Capacity Building in Adama",
    ],
    photo: "/gallery/hero_photo_26.png",
    photoCaption: "Female School Leaders Capacity Building, Adama Ethiopia",
    accentBg: "bg-indigo-500",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  },
  {
    number: "05",
    title: "Digital Systems and Technology Platforms",
    description:
      "Customized digital infrastructure engineered to scale learning across various contexts, including low-connectivity and offline areas.",
    courses: [
      "Custom Learning & Management Systems (LMS) for tracking & delivery",
      "AI-Enabled social solutions for automated feedback & knowledge",
      "Offline AI integration at school and individual teacher level",
      "Mobile outreach via Telegram bots and low-bandwidth apps",
    ],
    photo: "/gallery/hero_photo_28.png",
    photoCaption: "AAU, Faculty of Education Session",
    accentBg: "bg-cyan-500",
    badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  },
  {
    number: "06",
    title: "Educational Media Production & Multimedia for Social Change",
    description:
      "Our fully-equipped production studio produces high-impact advocacy media, animations, training videos, and multilingual educational publishing.",
    courses: [
      "Documentaries, animations, and training videos on social issues",
      "Climate change, child rights, and protection advocacy",
      "Inclusive publishing of children's books in multiple local languages",
      "Culturally relevant and accessible educational multimedia",
    ],
    photo: "/gallery/hero_photo_20.jpg",
    photoCaption: "Digital Content Production & Teacher Empowerment Hub",
    accentBg: "bg-amber-500",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
];

export default function CoreInitiatives() {
  return (
    <section id="expertise" className="py-20 sm:py-28 bg-[#f5f8fc] dark:bg-[#09131f] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
            What We Do
          </div>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Areas of Expertise
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Our work is grounded in technological innovation, ensuring that educational stakeholders are reached through both digital and grassroots strategies.
          </p>
        </div>

        {/* 6 Key Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.number}
              className="bg-white dark:bg-[#0f1e31] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={area.photo}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-xs font-black text-white ${area.accentBg}`}>
                  {area.number}
                </span>
                <span className="absolute bottom-2.5 left-3 right-3 text-[11px] text-white/90 font-medium truncate">
                  {area.photoCaption}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Programs & Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {area.courses.map((c) => (
                        <li key={c} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-sky-400">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
