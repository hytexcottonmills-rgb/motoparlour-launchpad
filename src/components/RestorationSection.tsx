import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROJECTS = [
  { name: "1978 Yezdi Roadking", beforeLabel: "Barn Find", afterLabel: "Concours Ready" },
  { name: "1985 Rajdoot GTS", beforeLabel: "Frame Rust", afterLabel: "Chrome Revival" },
  { name: "1972 Jawa 250", beforeLabel: "Neglected", afterLabel: "Museum Grade" },
];

export default function RestorationSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const { ref, isVisible } = useScrollReveal();

  const project = PROJECTS[activeProject];

  return (
    <section id="restoration" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            03 — The Resurrection
          </p>
          <h2
            className={`font-display text-4xl md:text-6xl font-bold uppercase tracking-tight chrome-text transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Vintage Revival
          </h2>
        </div>

        {/* Project selector */}
        <div
          className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              onClick={() => { setActiveProject(i); setSliderPos(50); }}
              className={`font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm border transition-all active:scale-[0.97] duration-150 ${
                i === activeProject
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Before/After slider */}
        <div
          className={`relative w-full aspect-[16/9] max-w-4xl rounded-lg overflow-hidden glass-card transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* "Before" side (sepia) */}
          <div className="absolute inset-0 bg-asphalt flex items-center justify-center" style={{ filter: "sepia(0.6)" }}>
            <div className="text-center space-y-3">
              <div className="w-24 h-24 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center mx-auto">
                <span className="font-display text-3xl font-bold text-muted-foreground/50">B</span>
              </div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">{project.beforeLabel}</p>
            </div>
          </div>

          {/* "After" side (chrome) */}
          <div
            className="absolute inset-0 bg-secondary flex items-center justify-center"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div className="text-center space-y-3">
              <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto">
                <span className="font-display text-3xl font-bold text-primary">A</span>
              </div>
              <p className="font-mono text-xs tracking-widest uppercase text-primary">{project.afterLabel}</p>
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
            aria-label="Before/After comparison slider"
          />

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary z-[5] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="font-mono text-xs text-primary-foreground font-bold">↔</span>
            </div>
          </div>
        </div>

        <p
          className={`mt-6 text-center font-display text-2xl uppercase tracking-wide transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {project.name}
        </p>
      </div>
    </section>
  );
}
