import logoSrc from "@/assets/logo-motoparlour.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoSrc} alt="Moto Parlour" className="h-8 w-auto" />
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          © {new Date().getFullYear()} Motoparlour India · All rights reserved
        </p>
        <a
          href="https://instagram.com/motoparlour_india"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors"
        >
          @motoparlour_india
        </a>
      </div>
    </footer>
  );
}
