import { Container } from "./container";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/65 backdrop-blur-xl supports-[backdrop-filter]:bg-background/45">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          aria-label="Home"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-indigo-500 shadow-[0_0_20px_rgba(56,189,248,0.45)]"
          />
          <span className="sr-only">Home</span>
        </a>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="md:hidden">
          <Navigation mobile />
        </div>
      </Container>
    </header>
  );
}
