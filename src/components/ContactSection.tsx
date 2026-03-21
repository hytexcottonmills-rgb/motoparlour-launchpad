import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919750222224";
const PHONE_NUMBER = "+918047543317";
const EMAIL = "hello@motoparlour.in";
const INSTAGRAM = "motoparlour_india";
const ADDRESS = "61, Annaji Rao Road, Mettupalayam, Coimbatore, Tamil Nadu – 641301";
const MAP_QUERY = "61+Annaji+Rao+Road+Mettupalayam+Coimbatore+Tamil+Nadu+641301";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 80475 43317",
    href: `tel:${PHONE_NUMBER}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 97502 22224",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Motoparlour! I'd like to know more about your products.")}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${INSTAGRAM}`,
    href: `https://instagram.com/${INSTAGRAM}`,
    external: true,
  },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase text-primary transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            05 — Reach Us
          </p>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold uppercase tracking-tight chrome-text transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map */}
          <div
            className={`glass-card overflow-hidden rounded-md transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <iframe
              title="Motoparlour Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.94!3d11.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${MAP_QUERY}!5e0!3m2!1sen!2sin!4v1700000000000`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact details */}
          <div
            className={`space-y-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {CONTACT_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`glass-card p-5 flex items-start gap-4 group cursor-pointer transition-all duration-500 hover:-translate-y-0.5`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-steel mb-1">{item.label}</p>
                    <p className="text-sm text-foreground leading-relaxed break-words group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="glass-card p-4 flex items-center justify-center gap-2 font-display text-sm uppercase tracking-wider hover:bg-primary/10 transition-all active:scale-[0.97]"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Motoparlour!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(142,70%,40%)] text-primary-foreground p-4 flex items-center justify-center gap-2 font-display text-sm uppercase tracking-wider rounded-md hover:bg-[hsl(142,70%,35%)] transition-all active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
