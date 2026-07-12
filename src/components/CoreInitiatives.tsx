const initiatives = [
  {
    title: "Teacher Development",
    tagline: "Empowering educators with 21st-century skills",
    description:
      "Comprehensive digital literacy and pedagogy training programs for in-service and pre-service teachers across Ethiopia, reaching every woreda.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#E5E3DF" />
        <circle cx="140" cy="100" r="36" fill="#C4C0BA" />
        <rect x="92" y="155" width="96" height="50" rx="6" fill="#B0ACA6" />
        <rect x="220" y="60" width="140" height="8" rx="4" fill="#C4C0BA" />
        <rect x="220" y="80" width="120" height="8" rx="4" fill="#C4C0BA" />
        <rect x="220" y="100" width="100" height="8" rx="4" fill="#C4C0BA" />
        <rect x="220" y="130" width="130" height="8" rx="4" fill="#C4C0BA" />
        <rect x="220" y="150" width="110" height="8" rx="4" fill="#C4C0BA" />
      </svg>
    ),
    color: "from-primary to-primary-light",
  },
  {
    title: "Digital Textbooks",
    tagline: "Interactive, curriculum-aligned content",
    description:
      "Creating and deploying interactive digital textbooks for secondary education, aligned with the national curriculum and available in multiple local languages.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#E5E3DF" />
        <rect x="40" y="36" width="200" height="170" rx="6" fill="#FFF" stroke="#C4C0BA" strokeWidth="2" />
        <rect x="50" y="56" width="180" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="72" width="160" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="88" width="170" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="108" width="140" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="128" width="150" height="6" rx="3" fill="#C4C0BA" />
        <rect x="50" y="152" width="100" height="6" rx="3" fill="#C4C0BA" />
        <circle cx="140" cy="180" r="10" fill="#D97706" />
        <rect x="270" y="60" width="90" height="120" rx="6" fill="#FFF" stroke="#C4C0BA" strokeWidth="2" />
        <rect x="278" y="76" width="74" height="6" rx="3" fill="#C4C0BA" />
        <rect x="278" y="90" width="60" height="6" rx="3" fill="#C4C0BA" />
        <rect x="278" y="104" width="66" height="6" rx="3" fill="#C4C0BA" />
      </svg>
    ),
    color: "from-accent to-accent-dark",
  },
  {
    title: "Youth Engagement",
    tagline: "Building the next generation of digital leaders",
    description:
      "After-school coding clubs, digital entrepreneurship bootcamps, and STEM competitions designed to equip Ethiopian youth with future-ready skills.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#E5E3DF" />
        <circle cx="120" cy="90" r="28" fill="#C4C0BA" />
        <rect x="86" y="138" width="68" height="40" rx="6" fill="#B0ACA6" />
        <circle cx="220" cy="110" r="22" fill="#C4C0BA" />
        <rect x="198" y="148" width="44" height="28" rx="5" fill="#B0ACA6" />
        <circle cx="300" cy="95" r="20" fill="#C4C0BA" />
        <rect x="280" y="130" width="40" height="24" rx="4" fill="#B0ACA6" />
        <rect x="40" y="190" width="320" height="4" rx="2" fill="#C4C0BA" />
        <rect x="40" y="200" width="160" height="4" rx="2" fill="#D97706" />
      </svg>
    ),
    color: "from-emerald-600 to-emerald-700",
  },
  {
    title: "Capacity Building",
    tagline: "Strengthening institutional systems",
    description:
      "Working with government ministries, regional education bureaus, and higher education institutions to build sustainable digital education infrastructure.",
    image: (
      <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#E5E3DF" />
        <rect x="60" y="100" width="80" height="90" rx="4" fill="#C4C0BA" />
        <rect x="68" y="80" width="64" height="24" rx="4" fill="#B0ACA6" />
        <rect x="155" y="120" width="80" height="70" rx="4" fill="#C4C0BA" />
        <rect x="163" y="100" width="64" height="24" rx="4" fill="#B0ACA6" />
        <rect x="250" y="90" width="80" height="100" rx="4" fill="#C4C0BA" />
        <rect x="258" y="70" width="64" height="24" rx="4" fill="#B0ACA6" />
        <rect x="60" y="190" width="280" height="4" rx="2" fill="#D97706" />
      </svg>
    ),
    color: "from-violet-600 to-violet-700",
  },
];

export default function CoreInitiatives() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
            Our Programs
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-primary-dark">
            Core Initiatives
          </h2>
          <p className="mt-3 text-muted-text max-w-2xl mx-auto">
            Four interconnected program areas driving systemic change in
            Ethiopia&apos;s education landscape.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {initiatives.map((init) => (
            <article
              key={init.title}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-warm-gray-dark"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-warm-gray">
                <div className="absolute inset-0">{init.image}</div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${init.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>
              <div className="p-6 sm:p-8">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${init.color} text-white`}
                >
                  {init.tagline}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-primary-dark group-hover:text-primary transition-colors">
                  {init.title}
                </h3>
                <p className="mt-2 text-muted-text text-sm leading-relaxed">
                  {init.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  Learn more
                  <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
