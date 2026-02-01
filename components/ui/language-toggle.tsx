"use client";

import { useI18n } from "@/components/contexts/i18n-provider";
import { cn } from "@/lib/utils";

export default function LanguageToggle({
  className,
}: {
  className?: string;
}) {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("nav.toggle.label")}
      className={cn(
        "text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs font-semibold tracking-[0.3em] uppercase transition-colors",
        className,
      )}
    >
      <span className={locale === "en" ? "text-foreground" : undefined}>
        {t("nav.toggle.en")}
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={locale === "zh" ? "text-foreground" : undefined}>
        {t("nav.toggle.zh")}
      </span>
    </button>
  );
}
