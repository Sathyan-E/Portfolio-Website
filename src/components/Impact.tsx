import { Award, Rocket, Sparkles } from "lucide-react";
import { achievements } from "@/data/resume";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Impact"
          title="Numbers that shipped"
          description="A snapshot of what the work has added up to."
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map(({ metric, label, detail }) => (
            <StaggerItem
              key={label}
              className="glass glow-ring group rounded-2xl p-6"
            >
              <div className="text-4xl font-semibold tracking-tight text-gradient">
                {metric}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground/90">
                {label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                {detail}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Highlight banner */}
        <Reveal className="mt-6">
          <div className="glass glow-ring relative overflow-hidden rounded-2xl p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-accent-2">
                  <Sparkles size={18} />
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    Currently
                  </span>
                </div>
                <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                  Upskilling in backend systems and applied AI — LLM
                  integration, RAG pipelines, and on-device ML — to transition
                  toward a{" "}
                  <span className="font-medium text-foreground">
                    Mobile, Backend &amp; AI Systems Architect
                  </span>{" "}
                  role.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-accent-2">
                  <Rocket size={20} />
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-accent-3">
                  <Award size={20} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
