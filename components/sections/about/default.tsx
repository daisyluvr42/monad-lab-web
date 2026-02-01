import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface AboutProps {
  title?: string;
  story?: ReactNode;
  founderId?: string;
  id?: string;
  className?: string;
}

export default function About({
  title = "One Person, One Universe.",
  story = (
    <>
      <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
        Monad-lab Works began as a single operator building complete systems
        from first principles. Each engagement is treated as its own universe:
        bounded, coherent, and internally consistent.
      </p>
      <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
        The{" "}
        <span className="text-foreground font-mono">
          Monad
        </span>{" "}
        is a self-contained unit of logic. We design our software the same way,
        with precise interfaces and composable modules that preserve clarity
        while scaling complexity.
      </p>
    </>
  ),
  founderId = "Xiangyu Huang",
  id = "about",
  className,
}: AboutProps) {
  return (
    <Section id={id} className={cn(className)}>
      <div className="max-w-container mx-auto grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase">
            About
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <div className="flex flex-col gap-4">{story}</div>
        </div>
        <div className="border-border/50 bg-card/30 flex flex-col gap-4 rounded-xl border p-6">
          <div className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
            Founder ID
          </div>
          <div className="font-mono text-xl">{founderId}</div>
          <div className="text-muted-foreground text-sm leading-relaxed">
            A single identity guiding a multi-disciplinary studio, unifying
            research, design, and engineering under one logic.
          </div>
        </div>
      </div>
    </Section>
  );
}
