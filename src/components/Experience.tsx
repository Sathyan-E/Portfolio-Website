import { MapPin } from "lucide-react";
import { experience } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience"
          description="Five years across SDKs, consumer apps, and team leadership."
        />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-[9px]" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="relative pl-8 sm:pl-10">
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full sm:h-[18px] sm:w-[18px] ${
                      job.current
                        ? "bg-accent shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"
                        : "bg-foreground/30"
                    }`}
                  >
                    {job.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>

                  <div className="glass glow-ring rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-accent-2">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            job.current
                              ? "bg-accent/15 text-accent-2"
                              : "bg-white/5 text-foreground/60"
                          }`}
                        >
                          {job.period}
                        </span>
                        <p className="mt-1.5 flex items-center justify-end gap-1 text-xs text-foreground/45">
                          <MapPin size={12} /> {job.location}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/65"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
