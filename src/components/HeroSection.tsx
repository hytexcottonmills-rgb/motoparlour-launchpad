import { lazy, Suspense } from "react";

const CarScene = lazy(() => import("./CarScene"));

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-8 items-center pt-24">
        {/* Text */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Motoparlour India
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight text-balance chrome-text opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Engineering
              <br />
              <span className="text-primary text-glow">Elegance</span>
              <br />
              for Every
              <br />
              Machine
            </h1>
          </div>

          <p
            className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Premium HSRP frames, detailing chemistry, and vintage restoration — crafted for those who demand precision.
          </p>

          <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#hsrp"
              className="font-display text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 rounded-sm hover:bg-primary/90 transition-all active:scale-[0.97] duration-150 animate-pulse-glow"
            >
              Explore Products
            </a>
            <a
              href="#restoration"
              className="font-display text-sm uppercase tracking-wider border border-border text-foreground px-8 py-3.5 rounded-sm hover:border-primary/40 hover:text-primary transition-all active:scale-[0.97] duration-150"
            >
              Restorations
            </a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 orange-line" />
    </section>
  );
}
