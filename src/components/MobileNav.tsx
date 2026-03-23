import { Gauge, Users, ShieldCheck, Wrench, MapPin } from "lucide-react";

const MOBILE_NAV_ITEMS = [
  { label: "Home", href: "#", icon: Gauge },
  { label: "About", href: "#about", icon: Users },
  { label: "HSRP", href: "#hsrp", icon: ShieldCheck },
  { label: "Restore", href: "#restoration", icon: Wrench },
  { label: "Contact", href: "#contact", icon: MapPin },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around h-16">
        {MOBILE_NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon size={20} />
            <span className="font-mono text-[9px] tracking-wider uppercase">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
