"use client";

import { motion } from "framer-motion";
import {
  Apple,
  Leaf,
  Play,
  Ticket,
  Milk,
  MessageSquare,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";

// Map project name -> accent icon.
const projectIcon: Record<string, LucideIcon> = {
  "Healthy Buddha": Leaf,
  "KYN — Events & Community": Ticket,
  DairyBuddy: Milk,
  "Kommunicate SDK": MessageSquare,
};

function StoreBadge({ store }: { store: string }) {
  const isApple = store.toLowerCase().includes("app store");
  const Icon = isApple ? Apple : Play;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/[0.02] px-2.5 py-1 text-xs text-foreground/70">
      <Icon size={13} className="text-accent-2" />
      {store}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="Products shipped end-to-end"
          description="From freelance builds to team-led products — architected, tested, and released to real stores."
        />

        <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((p) => {
            const Icon = projectIcon[p.name] ?? Sparkles;
            return (
              <StaggerItem
                key={p.name}
                className={p.featured ? "md:col-span-2" : ""}
              >
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={`glass glow-ring group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7 ${
                    p.featured ? "md:flex md:items-center md:gap-8" : ""
                  }`}
                >
                  {p.featured && (
                    <>
                      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-400/15 blur-3xl" />
                      <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                        <Sparkles size={12} /> Freelance
                      </span>
                    </>
                  )}

                  <div className={p.featured ? "md:flex-1" : ""}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${
                          p.featured
                            ? "from-emerald-400/25 to-accent-2/20 text-emerald-300"
                            : "from-accent/20 to-accent-3/20 text-accent-2"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {p.name}
                        </h3>
                        <p className="text-sm text-accent-2">{p.tagline}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                      {p.description}
                    </p>

                    <p className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/40">
                      {p.role}
                    </p>
                  </div>

                  <div className={p.featured ? "mt-5 md:mt-0 md:w-56 md:shrink-0" : "mt-5"}>
                    {/* Platforms */}
                    <div className="flex flex-wrap gap-2">
                      {p.platforms.map((plat) => (
                        <span
                          key={plat}
                          className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/80"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>

                    {/* Stores */}
                    {p.stores && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stores.map((s) => (
                          <StoreBadge key={s} store={s} />
                        ))}
                      </div>
                    )}

                    {/* Stack */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border px-2 py-0.5 text-[11px] text-foreground/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
