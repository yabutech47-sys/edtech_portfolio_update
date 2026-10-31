"use client";

import Image from "next/image";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  partner: string;
}

const newsItems: NewsItem[] = [
  {
    id: "news-1",
    category: "Workshop",
    title: "Content Co-Creation Workshop with the Ministry of Education in Adama",
    date: "Adama, Ethiopia",
    image: "/gallery/hero_photo_24.png",
    excerpt:
      "Educators, instructional designers, and policymakers collaborated in Adama to develop over 50 interactive digital courses aligned with the national curriculum.",
    partner: "Ministry of Education & UNESCO",
  },
  {
    id: "news-2",
    category: "Teacher Training",
    title: "EdTech Foundation Training at Testimony Centre, Addis Ababa",
    date: "Addis Ababa",
    image: "/gallery/hero_photo_18.png",
    excerpt:
      "Hands-on professional development equipping teachers with digital competencies, classroom technology leadership, and artificial intelligence for learning.",
    partner: "Testimony Centre",
  },
  {
    id: "news-3",
    category: "Interactive Textbooks",
    title: "Offline Interactive Digital Textbooks for Somali and Oromia Regions",
    date: "Regional Deployments",
    image: "/gallery/hero_photo_39.jpg",
    excerpt:
      "Transforming early-grade national textbooks into fully functional offline digital learning content, ensuring seamless access in low-connectivity areas.",
    partner: "Somali REB, Oromia REB & Elixir",
  },
  {
    id: "news-4",
    category: "Youth Leadership",
    title: "Climate Change & Digital Safeguarding Showcase Across 10 Schools",
    date: "Addis Ababa Showcases",
    image: "/gallery/hero_photo_16.png",
    excerpt:
      "Over 1,000 young leaders showcased community advocacy projects, digital child protection tools, and environmental initiatives in partnership with Kaizen (USAID).",
    partner: "Kaizen (USAID) & 10 Schools",
  },
];

export default function Insights() {
  return (
    <section id="news" className="py-20 sm:py-28 bg-[#f5f8fc] dark:bg-[#09131f] border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0f4c81] dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-900">
              News & Updates
            </div>
            <h2 className="mt-3 font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Latest Insights & Stories
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Discover how our training programs, interactive digital content, and community initiatives are transforming education across Ethiopia.
            </p>
          </div>

          <a
            href="/EdTech_Hub_ET_Company_Profile.pdf"
            download="EdTech_Hub_ET_Company_Profile.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-blue-500 text-sm font-semibold text-[#0f4c81] dark:text-sky-300 transition-colors shadow-xs shrink-0"
          >
            <span>Download Full Profile (PDF)</span>
            <span>↓</span>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-[#0f1e31] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#0f4c81] text-white text-[11px] font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                    <span>{item.date}</span>
                    <span className="text-blue-600 dark:text-sky-400 font-semibold">{item.partner}</span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-sky-400 group-hover:underline">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
