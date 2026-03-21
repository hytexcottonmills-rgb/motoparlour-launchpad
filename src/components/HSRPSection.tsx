import { useScrollReveal } from "@/hooks/useScrollReveal";

const FRAMES = [
  {
    title: "Carbon Elite",
    desc: "Precision-molded carbon fiber HSRP frame with UV-resistant matte finish.",
    spec: "WEIGHT: 120g | FIT: Universal",
    tag: "Best Seller",
  },
  {
    title: "Chrome Phantom",
    desc: "Mirror-polished chrome frame with anti-corrosion coating for premium vehicles.",
    spec: "WEIGHT: 180g | FIT: Wide-body",
    tag: "Premium",
  },
  {
    title: "Stealth Matte",
    desc: "Blacked-out anodized aluminum frame designed for a minimal, OEM-like look.",
    spec: "WEIGHT: 95g | FIT: Compact",
    tag: "New",
  },
  {
    title: "Racing Pro",
    desc: "Lightweight titanium-alloy frame inspired by MotoGP engineering standards.",
    spec: "WEIGHT: 75g | FIT: Sport",
    tag: "Limited",
  },
];

export default function HSRPSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="hsrp" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            01 — The HSRP Vault
          </p>
          <h2
            className={`font-display text-4xl md:text-6xl font-bold uppercase tracking-tight chrome-text transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Number Plate Frames
          </h2>
          <p
            className={`text-muted-foreground max-w-xl text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Engineered for precision fit. Designed for machines that deserve more than stock.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FRAMES.map((frame, i) => (
            <div
              key={frame.title}
              className={`glass-card p-6 group cursor-pointer transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
            >
              {/* Tag */}
              <span className="inline-block font-mono text-[10px] tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-sm mb-6">
                {frame.tag}
              </span>

              {/* Placeholder visual */}
              <div className="w-full aspect-[4/3] rounded bg-secondary/50 mb-6 flex items-center justify-center overflow-hidden group-hover:bg-secondary/70 transition-colors">
                <div className="w-20 h-8 border-2 border-primary/40 rounded-sm flex items-center justify-center">
                  <span className="font-mono text-[8px] text-primary/60 tracking-widest">HSRP</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                {frame.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{frame.desc}</p>
              <p className="font-mono text-[10px] tracking-wider text-steel">{frame.spec}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
