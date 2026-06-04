"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Linkedin, Github, Send, MapPin, CheckCircle } from "lucide-react";
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
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lakshitrajput",
    href: siteConfig.linkedin,
    icon: Linkedin,
    iconColor: "text-[#0A66C2]",
    iconBg: "bg-[#0A66C2]/10",
  },
  {
    label: "GitHub",
    value: "github.com/Lakshit0905",
    href: siteConfig.github,
    icon: Github,
    iconColor: "text-zinc-300",
    iconBg: "bg-zinc-500/10",
  },
];

const inputCls =
  "w-full rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-indigo-500/50 focus:bg-white/6 focus:ring-1 focus:ring-indigo-500/30";

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-[#080910]">
      {/* Sticky toolbar */}
      <div className="sticky top-0 z-50 border-b border-white/8 bg-[#080910]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Contact
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Header */}
        <div className="mb-10 border-b border-white/8 pb-10 text-center">
          {/* Oval badge with star */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/8 px-6 py-2.5 shadow-[0_0_24px_-4px_rgba(99,102,241,0.3)]">
            <span className="text-indigo-400" style={{ fontSize: "0.65rem" }}>✦</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Get in touch</span>
            <span className="text-indigo-400/50" style={{ fontSize: "0.65rem" }}>✦</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s talk quality{" "}
            <span className="text-white">at scale</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            Whether you&apos;re hiring for a Senior SDET, QE Architect, or Staff Engineer role — or want to collaborate on open source — I&apos;d love to connect.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            {/* Roles */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Open to roles
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Senior SDET", color: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
                  { label: "QE Architect", color: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                  { label: "Staff QE", color: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/20" },
                  { label: "Test Automation Lead", color: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                ].map(({ label, color, bg, border }) => (
                  <span key={label} className={`rounded-full border px-3 py-1 text-xs font-medium ${color} ${bg} ${border}`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ label, value, href, icon: Icon, iconColor, iconBg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3 transition-all hover:border-white/12 hover:bg-white/4"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
                    <Icon size={15} className={iconColor} />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
    </div>
  );
}
