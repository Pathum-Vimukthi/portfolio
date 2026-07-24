import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

type NavigationProps = {
  mobile?: boolean;
  className?: string;
};

function NavigationList({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="inline-flex items-center rounded-full border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Navigation({ mobile = false, className }: NavigationProps) {
  if (!mobile) {
    return (
      <nav aria-label="Primary navigation" className={className}>
        <NavigationList />
      </nav>
    );
  }

  return (
    <details className={cn("group relative w-full max-w-sm lg:hidden", className)}>
      <summary className="glass-card flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <span className="inline-flex items-center gap-2">
          <Menu className="h-4 w-4" aria-hidden="true" />
          Menu
        </span>
        <ChevronDown
          className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <nav aria-label="Primary navigation" className="glass-card mt-3 p-3">
        <NavigationList className="grid gap-2" />
      </nav>
    </details>
  );
}
