"use client";

import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 10000, suffix: "+", label: "Professionals Trained", prefix: "" },
  { value: 100000, suffix: "+", label: "Secondary Teachers Reached", prefix: "" },
  { value: 50, suffix: "+", label: "Interactive Courses", prefix: "" },
  { value: 500, suffix: "+", label: "Partner Schools", prefix: "" },
  { value: 12, suffix: "", label: "Regional Offices", prefix: "" },
];

function formatMetric(value: number): string {
  if (value >= 100000) return Math.floor(value / 1000).toLocaleString();
  return value.toLocaleString();
}

function Counter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
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
      { threshold: 0.3 }
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
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,119,6,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-accent-light text-xs font-semibold uppercase tracking-wider rounded-full">
            Our Impact
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-white">
            Reaching Every Corner of Ethiopia
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Since our founding, we have been scaling digital education solutions
            across every region of the country.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-light">
                <Counter end={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/80 font-medium leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
