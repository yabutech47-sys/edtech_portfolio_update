import Link from "next/link";

const footerLinks = {
  programs: {
    title: "Our Programs",
    links: [
      "Teacher Development",
      "Digital Textbooks",
      "Youth Engagement",
      "Capacity Building",
      "Research & Policy",
    ],
  },
  resources: {
    title: "Resources",
    links: [
      "Reports & Publications",
      "Case Studies",
      "Data & Statistics",
      "Toolkits & Guides",
      "Multimedia",
    ],
  },
  about: {
    title: "About",
    links: [
      "Our Mission",
      "Our Team",
      "Partners",
      "Careers",
      "Contact Us",
    ],
  },
  connect: {
    title: "Connect",
    links: [
      "News & Updates",
      "Events",
      "Press Room",
      "Social Media",
      "Newsletter",
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">EE</span>
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white">
                  Ethiopia EdTech
                </span>
                <span className="block text-[11px] text-white/50 tracking-widest uppercase leading-tight">
                  Alliance
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Transforming education and training through innovative digital
              technologies across Ethiopia.
            </p>
            <div className="mt-6 flex gap-3">
              {["Twitter", "LinkedIn", "YouTube", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center group"
                  aria-label={s}
                >
                  <span className="text-xs font-bold text-white/60 group-hover:text-white">
                    {s.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-accent-light transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-white">Addis Ababa, Ethiopia</p>
              <p className="text-xs text-white/50 mt-0.5">Bole Road, Africa Avenue</p>
              <p className="text-xs text-white/50">P.O. Box 1234</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-white">+251 911 816 762</p>
              <p className="text-xs text-white/50 mt-0.5">Mon–Fri, 8:00 AM – 5:00 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-white">ethiopiaedtech@gmail.com</p>
              <p className="text-xs text-white/50 mt-0.5">We reply within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 sm:flex sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Ethiopia EdTech Alliance. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
          <div className="sm:flex sm:items-center sm:justify-between gap-6">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-heading text-base font-bold text-white">Stay Informed</h3>
              <p className="text-xs text-white/50 mt-1">
                Get our latest reports, news, and impact stories delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-2 sm:max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
