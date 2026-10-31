"use client";

interface PartnerInfo {
  name: string;
  role: string;
  category: "Government" | "Multilateral" | "Academic" | "NGO & Philanthropy";
}

const partnersList: PartnerInfo[] = [
  {
    name: "Ministry of Education (MoE)",
    role: "National Curriculum & Teacher Training Partner",
    category: "Government",
  },
  {
    name: "Kaizen (A Tetra Tech Company)",
    role: "USAID Climate & Youth Leadership Consortium",
    category: "Multilateral",
  },
  {
    name: "UNESCO",
    role: "Interactive Digital Courseware & Standards",
    category: "Multilateral",
  },
  {
    name: "Mastercard Foundation",
    role: "Digital Learning & Youth Skills Scaling",
    category: "NGO & Philanthropy",
  },
  {
    name: "EDIFY Ethiopia",
    role: "Interactive STEM Courseware Co-Creation",
    category: "NGO & Philanthropy",
  },
  {
    name: "Reach for Change",
    role: "Social Innovation & Enterprise Accelerator",
    category: "NGO & Philanthropy",
  },
  {
    name: "Elixir Ethiopia",
    role: "Offline Interactive Digital Textbooks",
    category: "Government",
  },
  {
    name: "Carnegie Mellon University",
    role: "Pedagogical Research & Competency Frameworks",
    category: "Academic",
  },
  {
    name: "Oromia Education Bureau",
    role: "Regional Digital Courseware & Teacher Hubs",
    category: "Government",
  },
  {
    name: "Somali Regional Education Bureau",
    role: "Regional Interactive Textbooks & Caching",
    category: "Government",
  },
  {
    name: "CHADET",
    role: "Child Protection & Inclusive Education",
    category: "NGO & Philanthropy",
  },
  {
    name: "Addis Ababa University (Faculty of Education)",
    role: "Teacher Competencies & Research Advisory",
    category: "Academic",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-white dark:bg-[#0c1827] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
            Trusted Alliances
          </div>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Key Partners & Collaborators
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We collaborate closely with government institutions, development partners, universities, schools, and civil society organizations to promote innovative and inclusive education practices across Ethiopia.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {partnersList.map((p) => (
            <div
              key={p.name}
              className="bg-[#f5f8fc] dark:bg-[#0f1e31] rounded-xl p-5 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-sky-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 block mb-1">
                  {p.category}
                </span>
                <h3 className="font-sans text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-sky-300 transition-colors leading-snug">
                  {p.name}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                {p.role}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partner Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0f4c81] via-blue-700 to-cyan-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Interested in Partnering with EdTech Hub ET?
            </h3>
            <p className="text-sm text-blue-100 max-w-xl">
              We design and deliver customized solutions for schools, government bodies, development programs, and community organizations.
            </p>
          </div>
          <a
            href="mailto:ethiopiaedtech@gmail.com"
            className="px-6 py-3 rounded-lg bg-white text-[#0f4c81] hover:bg-blue-50 font-bold text-sm shadow-md transition-colors shrink-0"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
