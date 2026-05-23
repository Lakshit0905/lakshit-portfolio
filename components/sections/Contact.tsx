"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ANIMATION_VARIANTS } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface FormState {
  name: string;
  company: string;
  email: string;
  role: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  role: "",
  message: "",
};

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    color: "indigo",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/lakshitrajput/",
    href: siteConfig.linkedin,
    icon: Linkedin,
    color: "cyan",
  },
  {
    label: "GitHub",
    value: "https://github.com/Lakshit0905",
    href: siteConfig.github,
    icon: Github,
    color: "emerald",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.role ? `Portfolio inquiry: ${form.role}` : "Portfolio inquiry"
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        form.company ? `Company: ${form.company}` : null,
        `Email: ${form.email}`,
        form.role ? `Role / opportunity: ${form.role}` : null,
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputCls =
    "w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-indigo-500/50 focus:bg-white/6 focus:ring-1 focus:ring-indigo-500/30";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Get in touch"
          title="Let's talk quality"
          titleHighlight="at scale"
          subtitle="Whether you're hiring for a Senior SDET, QE Architect, or Staff Engineer role — or want to collaborate on open source — I'd love to connect."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: contact info */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-5"
          >
            {/* Availability card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-white">Currently open to opportunities</span>
              </div>
              <p className="text-sm text-zinc-400">{siteConfig.availability}</p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ label, value, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3 transition-all hover:border-white/12 hover:bg-white/4"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      color === "indigo"
                        ? "bg-indigo-500/10"
                        : color === "cyan"
                        ? "bg-cyan-500/10"
                        : "bg-emerald-500/10"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={
                        color === "indigo"
                          ? "text-indigo-400"
                          : color === "cyan"
                          ? "text-cyan-400"
                          : "text-emerald-400"
                      }
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-zinc-500">{label}</div>
                    <div className="truncate text-sm text-zinc-300">{value}</div>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                  <MapPin size={15} className="text-violet-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Location</div>
                  <div className="text-sm text-zinc-300">{siteConfig.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={ANIMATION_VARIANTS.scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/6 bg-white/2 p-6"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
                  <CheckCircle size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email draft opened</h3>
                <p className="max-w-sm text-sm text-zinc-400">
                  Your mail app should now have a prefilled message ready to send.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="mb-1 text-sm font-semibold text-white">Send a message</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-zinc-500">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputCls}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-zinc-500">Company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className={inputCls}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-zinc-500">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputCls}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-zinc-500">Role / opportunity</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior SDET II at Stripe"
                    className={inputCls}
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs text-zinc-500">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role and team..."
                    className={`${inputCls} resize-none`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500"
                >
                  Open email draft
                  <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
