"use client";

import { useI18n } from "@/components/contexts/i18n-provider";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

interface ContactProps {
  email?: string;
  id?: string;
  className?: string;
}

export default function Contact({
  email = "founder@monad-lab.com",
  id = "contact",
  className,
}: ContactProps) {
  const { t } = useI18n();

  return (
    <Section id={id} className={cn("relative overflow-hidden", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center">
        <p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase">
          {t("contact.eyebrow")}
        </p>
        <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {t("contact.title")}
        </h2>
        <p className="text-muted-foreground max-w-[640px] text-base leading-relaxed sm:text-lg">
          {t("contact.description")}
        </p>
        <Button size="lg" asChild>
          <a href={`mailto:${email}`} className="font-mono">
            {email}
          </a>
        </Button>
      </div>
    </Section>
  );
}
