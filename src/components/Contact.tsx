import { ArrowUpRight, Code2, Mail, Phone } from "lucide-react";
import { profile } from "@/data/resume";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: profile.links.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/sathyan-elangovan",
    href: profile.links.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "View profile",
    href: profile.links.github,
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "View profile",
    href: profile.links.leetcode,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="glass glow-ring relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
            <div className="absolute left-1/2 top-0 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[80px]" />

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-2">
                Contact
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">exceptional</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-foreground/60">
                Whether it&apos;s an architecture challenge, an AI-powered app
                idea, or a leadership role — I&apos;d love to talk.
              </p>

              <a
                href={profile.links.email}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-3 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Mail size={16} /> {profile.email}
              </a>

              <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3 transition-colors hover:border-accent/40 hover:bg-white/5"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-accent-2">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-foreground/45">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-foreground/85">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-2"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
