import { motion } from "framer-motion";

const particles = [
  { left: "12%", top: "18%", size: 6, delay: 0 },
  { left: "22%", top: "68%", size: 4, delay: 0.3 },
  { left: "68%", top: "20%", size: 5, delay: 0.6 },
  { left: "76%", top: "62%", size: 4, delay: 0.9 },
  { left: "48%", top: "40%", size: 7, delay: 1.2 },
] as const;

export function Particles() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-cyan-200/70 shadow-[0_0_24px_rgba(125,211,252,0.45)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
        />
      ))}
    </div>
  );
}
