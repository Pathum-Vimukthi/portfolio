import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";
import { Header } from "./header";

type AppShellProps = {
  children: ReactNode;
  className?: string;
};

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-[-10rem] -z-10 flex justify-center"
      >
        <div className="h-80 w-[38rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-[-6rem] top-32 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-[-8rem] left-[-5rem] -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />

      <Header />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
