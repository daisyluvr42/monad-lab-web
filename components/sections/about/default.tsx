"use client";

import { useI18n } from "@/components/contexts/i18n-provider";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface AboutProps {
  founderId?: string;
  id?: string;
  className?: string;
}

export default function About({
  founderId = "Xiangyu",
  id = "about",
  className,
}: AboutProps) {
  const { t, tm } = useI18n();
  const paragraphs = tm<string[]>("about.paragraphs");

  return (
    <Section id={id} className={cn(className)}>
      <div className="max-w-container mx-auto grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {t("about.title")}
          </h2>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-base leading-relaxed sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="border-border/50 bg-card/30 flex flex-col gap-4 rounded-xl border p-6">
          <div className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
            {t("about.founderLabel")}
          </div>
          <div className="font-mono text-xl">{founderId}</div>
          <div className="text-muted-foreground text-sm leading-relaxed">
            {t("about.founderNote")}
          </div>
        </div>
      </div>
    </Section>
  );
}
