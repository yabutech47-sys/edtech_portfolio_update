const partners = [
  { name: "Ministry of Education", width: "w-48" },
  { name: "Mastercard Foundation", width: "w-52" },
  { name: "USAID", width: "w-36" },
  { name: "UNESCO", width: "w-36" },
  { name: "Carnegie Mellon University", width: "w-52" },
  { name: "World Bank", width: "w-40" },
  { name: "British Council", width: "w-44" },
  { name: "GIZ", width: "w-32" },
];

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 border-y border-warm-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-warm-gray-dark/50 text-muted-text text-xs font-semibold uppercase tracking-wider rounded-full">
            Trusted By
          </span>
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-primary-dark">
            Our Partners & Donors
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`${p.width} h-16 flex items-center justify-center`}
            >
              <div className="w-full h-12 bg-warm-gray rounded-lg flex items-center justify-center px-4 border border-warm-gray-dark/50">
                <span className="text-xs sm:text-sm font-bold text-muted-text text-center leading-tight">
                  {p.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
