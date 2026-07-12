export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[800px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-primary-dark/90" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M0 0h40v40H0zm40 40h40v40H40z%22/%3E%3C/g%3E%22)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl bg-white/95 backdrop-blur-sm p-8 sm:p-10 lg:p-14 rounded-xl shadow-2xl border-l-8 border-accent">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent-dark text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Our Mission
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-dark leading-tight">
              Transforming education and training through innovative digital
              technologies.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-text leading-relaxed max-w-2xl">
              We are a coalition of educators, technologists, and policymakers
              working across Ethiopia to build an inclusive, technology-enabled
              learning ecosystem that reaches every teacher and every student.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-accent/25"
              >
                Explore Our Work
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-white/80 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                Watch Our Story
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent z-10" />
    </section>
  );
}
