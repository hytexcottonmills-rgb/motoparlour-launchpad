import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";

export default function WholesaleSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="wholesale" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/[0.03] blur-[100px] rounded-full" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-12 text-center space-y-4">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            04 — The Wholesale Portal
          </p>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold uppercase tracking-tight chrome-text transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Partner With Us
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Interested in wholesale distribution? Drop us a line.
          </p>
        </div>

        {submitted ? (
          <div className="glass-card p-12 text-center space-y-4 animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl uppercase text-primary">Received</h3>
            <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`glass-card p-8 md:p-12 space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest uppercase text-steel">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Rajesh Sharma"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest uppercase text-steel">Business Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Auto Accessories Hub"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest uppercase text-steel">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest uppercase text-steel">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] tracking-widest uppercase text-steel">Message</label>
              <textarea
                rows={4}
                required
                className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                placeholder="Tell us about your distribution needs, volume requirements, and region..."
              />
            </div>
            <button
              type="submit"
              className="w-full font-display text-sm uppercase tracking-wider bg-primary text-primary-foreground py-4 rounded-sm hover:bg-primary/90 transition-all active:scale-[0.98] duration-150 flex items-center justify-center gap-3"
            >
              <Send className="w-4 h-4" />
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
