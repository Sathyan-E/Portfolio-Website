/** Ambient background: layered gradient blobs + masked grid. Purely decorative. */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12),_transparent_55%)]" />

      {/* Floating color blobs */}
      <div className="animate-float-slow absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.28),_transparent_70%)] blur-3xl" />
      <div className="animate-float-slow-rev absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.20),_transparent_70%)] blur-3xl" />
      <div className="animate-float-slow absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.20),_transparent_70%)] blur-3xl" />

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0" />

      {/* Subtle noise / darken at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060608]" />
    </div>
  );
}
