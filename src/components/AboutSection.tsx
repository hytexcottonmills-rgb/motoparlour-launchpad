import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Sparkles, FlaskConical } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Us
          </p>
          <h2
            className={`font-display text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.05] chrome-text transition-all duration-700 delay-100 text-balance ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Crafting the Future,
            <br />
            <span className="text-primary text-glow">Restoring the Past.</span>
          </h2>
        </div>

        <div
          className={`space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p>
            At Motoparlour, we don't just sell accessories; we{" "}
            <span className="text-foreground font-medium">curate the automotive experience</span>. Based in the
            heart of Coimbatore, we have emerged as a premier wholesale powerhouse for car and bike essentials.
          </p>
          <p>
            From our signature HSRP Number Plate Frames that define street legality with style, to our lab-grade
            detailing chemicals — Foam, Polish, and Glass Cleaners — we serve the modern rider who demands
            perfection.
          </p>
          <p>
            Our soul, however, lies in the grease and chrome of our workshop. We are specialists in{" "}
            <span className="text-primary font-medium">Vintage Bike Restoration</span>, breathing new life into
            legendary machines. Whether you are a retailer looking for bulk supplies or a collector seeking a
            resurrection, Motoparlour is where your journey begins.
          </p>
        </div>

        {/* Pillars */}
        <div
          className={`grid sm:grid-cols-3 gap-4 mt-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { icon: Wrench, label: "Vintage Restoration", sub: "Legendary machines reborn" },
            { icon: Sparkles, label: "Premium Accessories", sub: "HSRP frames & styling" },
            { icon: FlaskConical, label: "Detailing Chemistry", sub: "Lab-grade formulations" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass-card p-6 text-center space-y-3 group"
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-sm uppercase tracking-wider font-semibold">{item.label}</h3>
                <p className="font-mono text-[10px] tracking-wider text-steel">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
