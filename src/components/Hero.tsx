"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Code2 } from "lucide-react";
import { profile, focusAreas } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const socials = [
  { icon: LinkedinIcon, href: profile.links.linkedin, label: "LinkedIn" },
  { icon: GithubIcon, href: profile.links.github, label: "GitHub" },
  { icon: Code2, href: profile.links.leetcode, label: "LeetCode" },
  { icon: Mail, href: profile.links.email, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-foreground/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Architect &amp; Tech Lead roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-gradient">Elangovan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg text-foreground/65"
          >
            <span className="font-medium text-foreground/90">
              {profile.title}
            </span>{" "}
            — {profile.tagline}. {profile.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {focusAreas.map((f) => (
              <span
                key={f}
                className="glass rounded-full px-3 py-1.5 text-xs text-foreground/70"
              >
                {f}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-[1.03] active:scale-95"
            >
              View my work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/5"
            >
              <Mail size={16} /> Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground/60 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: floating glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass glow-ring rounded-3xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs text-foreground/50">
                ~/architecture.swift
              </div>
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
            </div>
            <pre className="mt-4 overflow-hidden font-mono text-[13px] leading-relaxed text-foreground/80">
              <code>
                <span className="text-accent-3">struct</span>{" "}
                <span className="text-accent-2">Engineer</span> {"{"}
                {"\n"}  <span className="text-accent">let</span> name ={" "}
                <span className="text-emerald-300">&quot;Sathyan&quot;</span>
                {"\n"}  <span className="text-accent">let</span> role ={" "}
                <span className="text-emerald-300">&quot;Mobile Architect&quot;</span>
                {"\n"}  <span className="text-accent">let</span> stacks = [
                {"\n"}    <span className="text-emerald-300">&quot;SwiftUI&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Compose&quot;</span>,
                {"\n"}    <span className="text-emerald-300">&quot;AI / LLMs&quot;</span>
                {"\n"}  ]
                {"\n"}  <span className="text-accent">func</span>{" "}
                <span className="text-yellow-200">ship</span>() {"->"}{" "}
                <span className="text-accent-2">Impact</span>
                {"\n"}
                {"}"}
              </code>
            </pre>
          </motion.div>

          {/* Floating mini stat */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl px-4 py-3"
          >
            <MapPin size={16} className="text-accent-2" />
            <div>
              <div className="text-sm font-medium">{profile.location}</div>
              <div className="text-xs text-foreground/50">
                {profile.experienceYears} years shipping apps
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
