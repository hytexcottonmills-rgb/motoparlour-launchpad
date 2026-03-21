import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Droplets, Wind, Sparkles, Shirt } from "lucide-react";

const PRODUCTS = [
  {
    icon: Sparkles,
    title: "Dashboard Polish",
    desc: "Silicone-free formula that restores deep gloss without attracting dust.",
    spec: "250ml · pH Neutral",
  },
  {
    icon: Wind,
    title: "Windshield Fluid",
    desc: "Anti-streak, anti-fog fluid engineered for tropical monsoon conditions.",
    spec: "500ml · Rain-repellent",
  },
  {
    icon: Droplets,
    title: "Glass Cleaner Pro",
    desc: "Ammonia-free glass solution that eliminates film, smudges, and water spots.",
    spec: "300ml · UV Shield",
  },
  {
    icon: Shirt,
    title: "Microfiber Elite",
    desc: "470 GSM plush microfiber with silk-edge binding — zero-scratch guarantee.",
    spec: "40×40cm · 3-Pack",
  },
];

export default function LabSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="lab" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Ambient accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 space-y-4 text-right">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            02 — The Lab
          </p>
          <h2
            className={`font-display text-4xl md:text-6xl font-bold uppercase tracking-tight chrome-text transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            Detailing Chemistry
          </h2>
          <p
            className={`text-muted-foreground ml-auto max-w-xl text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            Every surface deserves science-backed care. Our formulas are engineered, not mixed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className={`glass-card p-8 flex gap-6 group cursor-pointer transition-all duration-700 hover:-translate-y-0.5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                  <p className="font-mono text-[10px] tracking-wider text-steel">{product.spec}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
