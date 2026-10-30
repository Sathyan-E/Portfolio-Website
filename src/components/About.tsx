import { Compass, Layers, Sparkles, Users } from "lucide-react";
import { summary } from "@/data/resume";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: Layers,
    title: "End-to-End Ownership",
    body: "From ideation and architecture to App Store / Play Store deployment across iOS and Android.",
  },
  {
    icon: Sparkles,
    title: "AI in Production",
    body: "LLM-powered chat, on-device ML, and RAG pipelines integrated into real, shipping mobile apps.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    body: "Mentoring engineers, owning hiring, and building review processes that lift delivery velocity.",
  },
  {
    icon: Compass,
    title: "Clean Architecture",
    body: "MVVM, modularization, and SDK design that scale cleanly as products and teams grow.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="Architecting mobile products that ship at scale"
        />

        <Reveal className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-foreground/70">
          {summary}
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <StaggerItem
              key={title}
              className="glass glow-ring group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-3/20 text-accent-2">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                {body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
