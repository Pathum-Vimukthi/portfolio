"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Globe,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Particles } from "@/components/ui/particles";
import { Container, Section } from "@/components/layout";
import { cn } from "@/lib/utils";
import { heroContent } from "../data/hero-content";

const shellVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const nameWordVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const socialIcons = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
  Dribbble: Sparkles,
  Email: Mail,
  Website: Globe,
} as const;

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <GridPattern className="opacity-25" />

      <motion.div
        className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl"
        animate={{ y: [0, 18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-6rem] top-0 h-96 w-96 rounded-full bg-indigo-500/12 blur-3xl"
        animate={{ y: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.08),transparent_20%)]" />
      <Particles />
    </div>
  );
}

export function Hero() {
  return (
    <Section id="home" className="relative min-h-[100svh] overflow-hidden !py-0">
      <HeroBackdrop />

      <Container className="relative z-10 flex min-h-[100svh] items-center py-16 lg:py-24">
        <motion.div
          variants={shellVariants}
          initial="hidden"
          animate="show"
          className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center"
        >
          <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm text-muted-foreground shadow-[0_12px_40px_rgba(2,6,23,0.25)] backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              {heroContent.greeting}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              <span className="sr-only">{heroContent.name}</span>
              <span aria-hidden="true" className="block">
                {heroContent.name.split(" ").map((word, index) => (
                  <motion.span
                    key={word}
                    variants={nameWordVariants}
                    className={cn(
                      "inline-block",
                      index === 0 ? "mr-3 text-cyan-300" : "text-foreground",
                    )}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl"
            >
              {heroContent.title}
            </motion.p>

            <motion.p
              className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
              variants={itemVariants}
            >
              {heroContent.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-[0_20px_50px_rgba(14,165,233,0.25)]">
                <a
                  href={heroContent.ctas.resume.href}
                  aria-label={`${heroContent.ctas.resume.label} button`}
                >
                  {heroContent.ctas.resume.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={heroContent.ctas.contact.href}>{heroContent.ctas.contact.label}</a>
              </Button>
            </motion.div>

            <motion.ul
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {heroContent.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Mail;

                return (
                  <li key={link.label}>
                    <motion.a
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href={link.href}
                      aria-label={link.label}
                      className="glass-card inline-flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </motion.a>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card relative aspect-square overflow-hidden p-4 sm:p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),rgba(15,23,42,0.7)_55%,rgba(2,6,23,0.95)_100%)] shadow-[0_30px_90px_rgba(2,6,23,0.45)]">
                  <div className="flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl sm:h-64 sm:w-64">
                    <div
                      role="img"
                      aria-label="Profile image placeholder"
                      className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-300/25 via-slate-900 to-indigo-400/20 text-center text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:h-48 sm:w-48"
                    >
                      Placeholder Avatar
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-4 top-6 glass-card px-4 py-3 text-xs text-muted-foreground"
                >
                  Liquid glass
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  className="absolute bottom-6 right-4 glass-card px-4 py-3 text-xs text-muted-foreground"
                >
                  Motion ready
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-2 top-8 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#experience"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="group absolute bottom-6 left-1/2 z-20 inline-flex -translate-x-1/2 flex-col items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground shadow-[0_12px_40px_rgba(2,6,23,0.3)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Scroll to experience section"
        >
          <span>Scroll</span>
          <ArrowDown
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </motion.a>
      </Container>
    </Section>
  );
}
