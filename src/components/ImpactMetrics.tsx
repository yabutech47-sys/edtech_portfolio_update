"use client";

import { useRef, useState, useEffect } from "react";

const metricsData = [
  {
    value: 10000,
    suffix: "+",
    label: "Professionals Trained",
    description: "Equipped with 21st-century digital & pedagogical competencies",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    value: 100000,
    suffix: "+",
    label: "Secondary Teachers Reached",
    description: "Through co-developed national curriculum training modules",
    accent: "from-sky-500 to-indigo-600",
  },
  {
    value: 50,
    suffix: "+",
    label: "Interactive Digital Courses",
    description: "Co-created with UNESCO, EDIFY, MoE, and Regional Bureaus",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Youth in Climate & Leadership",
    description: "Empowered in advocacy and online digital child protection",
    accent: "from-amber-500 to-orange-600",
  },
  {
    value: 10,
    suffix: "+",
    label: "Partner Schools & Showcases",
    description: "Active digital classroom deployments across multiple regions",
    accent: "from-violet-500 to-purple-600",
  },
];

function formatMetric(value: number): string {
  if (value >= 100000) return (value / 1000).toLocaleString() + "K";
  return value.toLocaleString();
}

function Counter({ end, suffix, duration = 1800 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * end);
            setCount(current);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {formatMetric(count)}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  return (
    <section id="impact" className="relative py-20 sm:py-28 bg-[#0f4c81] text-white overflow-hidden transition-colors">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider border border-white/15">
            Our Proven Track Record
          </span>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Impact Across Ethiopia
          </h2>
          <p className="mt-3 text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Since our founding in 2021, EdTech Hub ET has delivered practical and measurable improvements in digital education across teachers, students, and institutions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metricsData.map((m) => (
            <div
              key={m.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-sky-300 font-sans tracking-tight">
                  <Counter end={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-3 font-bold text-base text-white leading-snug">
                  {m.label}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-blue-100 leading-relaxed">
                {m.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-sm text-blue-100 font-medium">
            &ldquo;Our core strength lies in equipping the workforce from educators to social workers with 21st-century competencies.&rdquo;
          </p>
          <span className="text-xs text-sky-300 font-semibold block mt-1">
            — EdTech Hub ET Leadership
          </span>
        </div>
      </div>
    </section>
  );
}
