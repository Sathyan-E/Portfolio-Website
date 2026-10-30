import { ArrowUp } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-foreground/45">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind &amp; Framer Motion.
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-foreground/55 transition-colors hover:text-foreground"
        >
          Back to top
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-border transition-transform group-hover:-translate-y-0.5">
            <ArrowUp size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
}
