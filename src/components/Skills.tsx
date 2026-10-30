"use client";

import {
  Apple,
  Smartphone,
  Boxes,
  BrainCircuit,
  Plug,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  Apple,
  Smartphone,
  Boxes,
  BrainCircuit,
  Plug,
  Server,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I build with"
          description="A full mobile stack — native iOS & Android, clean architecture, and an expanding AI/ML toolset."
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ category, icon, skills }) => {
            const Icon = iconMap[icon] ?? Boxes;
            return (
              <StaggerItem
                key={category}
                className="glass glow-ring group rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent-2">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-medium">{category}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-lg border border-border bg-white/[0.02] px-2.5 py-1 text-xs text-foreground/65 transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
