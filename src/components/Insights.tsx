const posts = [
  {
    category: "Report",
    title: "State of Digital Education in Ethiopia 2025",
    excerpt:
      "A comprehensive analysis of technology adoption across Ethiopia's secondary education system, with key recommendations for policymakers.",
    image: (
      <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="260" fill="#E5E3DF" />
        <rect x="24" y="24" width="352" height="176" rx="8" fill="#FFF" stroke="#C4C0BA" strokeWidth="1.5" />
        <rect x="40" y="44" width="100" height="8" rx="4" fill="#0f3b5e" />
        <rect x="40" y="60" width="200" height="8" rx="4" fill="#C4C0BA" />
        <rect x="40" y="76" width="170" height="8" rx="4" fill="#C4C0BA" />
        <rect x="40" y="96" width="220" height="8" rx="4" fill="#C4C0BA" />
        <rect x="40" y="112" width="180" height="8" rx="4" fill="#C4C0BA" />
        <rect x="40" y="132" width="160" height="8" rx="4" fill="#C4C0BA" />
        <rect x="40" y="156" width="100" height="8" rx="4" fill="#D97706" />
        <rect x="24" y="216" width="108" height="6" rx="3" fill="#C4C0BA" />
        <rect x="148" y="216" width="80" height="6" rx="3" fill="#C4C0BA" />
        <rect x="24" y="240" width="140" height="6" rx="3" fill="#C4C0BA" />
      </svg>
    ),
    date: "Jun 15, 2025",
    readTime: "12 min read",
  },
  {
    category: "Case Study",
    title: "How Regional Teacher Training Hubs Are Transforming Classrooms",
    excerpt:
      "Lessons from our pilot program across four regions, where teacher training hubs have improved student outcomes by 40% in the first year.",
    image: (
      <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="260" fill="#E5E3DF" />
        <circle cx="140" cy="104" r="40" fill="#C4C0BA" />
        <rect x="92" y="160" width="96" height="56" rx="6" fill="#B0ACA6" />
        <rect x="240" y="70" width="120" height="8" rx="4" fill="#C4C0BA" />
        <rect x="240" y="90" width="100" height="8" rx="4" fill="#C4C0BA" />
        <rect x="240" y="110" width="110" height="8" rx="4" fill="#C4C0BA" />
        <rect x="240" y="140" width="90" height="8" rx="4" fill="#D97706" />
        <rect x="24" y="228" width="108" height="6" rx="3" fill="#C4C0BA" />
        <rect x="148" y="228" width="80" height="6" rx="3" fill="#C4C0BA" />
      </svg>
    ),
    date: "May 28, 2025",
    readTime: "8 min read",
  },
  {
    category: "Blog Post",
    title: "Bridging the Digital Divide: One Tablet at a Time",
    excerpt:
      "Meet Tigist, a 16-year-old student from the Somali Region who discovered a passion for coding through our after-school digital club.",
    image: (
      <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="260" fill="#E5E3DF" />
        <rect x="80" y="40" width="160" height="180" rx="8" fill="#FFF" stroke="#C4C0BA" strokeWidth="2" />
        <rect x="96" y="60" width="128" height="6" rx="3" fill="#C4C0BA" />
        <rect x="96" y="76" width="110" height="6" rx="3" fill="#C4C0BA" />
        <rect x="96" y="92" width="100" height="6" rx="3" fill="#C4C0BA" />
        <rect x="96" y="116" width="80" height="6" rx="3" fill="#C4C0BA" />
        <rect x="96" y="136" width="90" height="6" rx="3" fill="#C4C0BA" />
        <rect x="96" y="160" width="60" height="6" rx="3" fill="#D97706" />
        <circle cx="160" cy="194" r="10" fill="#C4C0BA" />
        <rect x="270" y="60" width="24" height="140" rx="4" fill="#B0ACA6" />
        <rect x="270" y="46" width="24" height="14" rx="3" fill="#C4C0BA" />
        <rect x="24" y="228" width="108" height="6" rx="3" fill="#C4C0BA" />
        <rect x="148" y="228" width="80" height="6" rx="3" fill="#C4C0BA" />
      </svg>
    ),
    date: "Apr 10, 2025",
    readTime: "5 min read",
  },
  {
    category: "Policy Brief",
    title: "Recommendations for the National Digital Education Strategy",
    excerpt:
      "Our policy recommendations for Ethiopia's Ministry of Education on infrastructure investment, teacher training, and content localization.",
    image: (
      <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="260" fill="#E5E3DF" />
        <rect x="30" y="40" width="340" height="190" rx="8" fill="#FFF" stroke="#C4C0BA" strokeWidth="1.5" />
        <rect x="50" y="60" width="60" height="8" rx="4" fill="#0f3b5e" />
        <rect x="50" y="80" width="280" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="96" width="240" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="116" width="260" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="140" width="200" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="160" width="220" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="184" width="140" height="6" rx="3" fill="#D97706" />
        <rect x="30" y="240" width="108" height="6" rx="3" fill="#C4C0BA" />
        <rect x="154" y="240" width="80" height="6" rx="3" fill="#C4C0BA" />
      </svg>
    ),
    date: "Mar 22, 2025",
    readTime: "15 min read",
  },
];

export default function Insights() {
  return (
    <section className="py-20 sm:py-24 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
              Resource Library
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-primary-dark">
              Latest Insights
            </h2>
            <p className="mt-2 text-muted-text">
              Research, stories, and analysis driving education innovation in
              Ethiopia.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold rounded-lg transition-colors shrink-0"
          >
            View All Resources
            <svg
              className="ml-2 w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-warm-gray-dark flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-warm-gray">
                {post.image}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary-dark text-[11px] font-bold uppercase tracking-wider rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-text mb-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-warm-gray-dark" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading text-base font-bold text-primary-dark group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-xs font-semibold text-accent hover:text-accent-dark transition-colors uppercase tracking-wider"
                >
                  Read more
                  <svg
                    className="ml-1.5 w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
