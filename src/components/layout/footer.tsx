import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/55 backdrop-blur-xl supports-[backdrop-filter]:bg-background/35">
      <Container className="flex min-h-20 items-center justify-center py-6 text-sm text-muted-foreground sm:justify-between">
        <p>© 2026 Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}
