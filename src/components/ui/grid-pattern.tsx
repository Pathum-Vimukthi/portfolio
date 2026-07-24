import { cn } from "@/lib/utils";

type GridPatternProps = {
  className?: string;
};

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        backgroundPosition: "center",
      }}
    />
  );
}
