import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section-spacing", className)}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
