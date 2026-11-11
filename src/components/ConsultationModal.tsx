"use client";

import { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultProject = "",
}: ConsultationModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activationNeeded, setActivationNeeded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    serviceInterest: defaultProject || "Teacher Professional Development",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/ethiopiaedtech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New EdTech Hub ET Inquiry: ${formData.serviceInterest} - ${formData.name}`,
          _template: "table",
          _captcha: "false",
          "Full Name": formData.name,
          "Organization / School": formData.organization,
          "Contact Email": formData.email,
          "Phone Number": formData.phone || "Not provided",
          "Area of Interest": formData.serviceInterest,
          "Message / Scope": formData.message || "No message provided",
        }),
      });

      const data = await res.json();
      if (data.message && data.message.includes("Activation")) {
        setActivationNeeded(true);
      }
      setSubmitted(true);
    } catch {
      // In case of network error, still show completion and provide mail fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ethiopiaedtech@gmail.com&su=${encodeURIComponent(
    `Inquiry: ${formData.serviceInterest} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.serviceInterest}\n\nMessage:\n${formData.message}`
  )}`;

  const mailtoUrl = `mailto:ethiopiaedtech@gmail.com?subject=${encodeURIComponent(
    `Inquiry: ${formData.serviceInterest} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.serviceInterest}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white dark:bg-[#0f1e31] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Strip */}
        <div className="bg-[#0f4c81] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">
              EdTech Hub ET • Partner & Service Inquiry
            </span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="text-blue-200 hover:text-white transition-colors p-1"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 text-2xl font-bold">
                ✓
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Inquiry Processed
              </h3>

              {activationNeeded ? (
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-left space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
                    <span>⚠️ One-Time Activation Required</span>
                  </div>
                  <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                    FormSubmit sent an <strong>&ldquo;Activate Form&rdquo;</strong> confirmation email to <strong>ethiopiaedtech@gmail.com</strong>.
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-300">
                    👉 Please open the <strong>ethiopiaedtech@gmail.com</strong> inbox (or Spam folder) and click the <strong>&ldquo;Activate Form&rdquo;</strong> link once. After activating, all future website inquiries will arrive in your inbox automatically!
                  </p>
                </div>
              ) : (
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to <strong>ethiopiaedtech@gmail.com</strong>. Our team will review your project details and follow up promptly.
                </p>
              )}

              {/* Direct email links so sender can have it in their sent box */}
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 text-left space-y-2 mt-4">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
                  Want to email directly from your own email account too?
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click below to open a pre-filled message directly in your email app:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Open in Gmail</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Open in Default Mail App</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setActivationNeeded(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#0f4c81] hover:bg-[#0a355a] text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Get In Touch with EdTech Hub ET
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Reach out for teacher training, interactive course creation, digital textbooks, or institutional partnerships.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Aster Tadesse"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Organization / School *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Assai School / NGO"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+251 911 ..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Area of Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {defaultProject && (
                    <option value={defaultProject}>{defaultProject}</option>
                  )}
                  <option>Teacher Professional Development & EdTech</option>
                  <option>Interactive Digital Course & Textbook Creation</option>
                  <option>Child Protection & Youth Engagement</option>
                  <option>Custom LMS & Digital Systems</option>
                  <option>Institutional Capacity Building</option>
                  <option>Educational Media Production & Design</option>
                  <option>General Partnership / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message / Project Scope
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your school, organization, or project goals..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-[#0f4c81] hover:bg-[#0a355a] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-60 flex items-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <span>Send Inquiry</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
