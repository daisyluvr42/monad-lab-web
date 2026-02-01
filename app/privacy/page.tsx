"use client";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { useI18n } from "@/components/contexts/i18n-provider";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";

interface PolicySection {
  title: string;
  body?: string[];
  items?: { label: string; text: string }[];
  contactLabel?: string;
  contactEmail?: string;
}

export default function PrivacyPage() {
  const { t, tm } = useI18n();
  const sections = tm<PolicySection[]>("privacy.sections");

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Section className="scroll-mt-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase">
              {t("privacy.eyebrow")}
            </p>
            <h1 className="text-4xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              {t("privacy.title")}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              <strong>{t("privacy.updated")}</strong>
            </p>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            {t("privacy.intro")}
          </p>

          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {section.title}
              </h2>
              {section.body?.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-muted-foreground text-base leading-relaxed sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && section.items.length > 0 && (
                <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-base sm:text-lg">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.label ? (
                        <>
                          <span className="text-foreground font-semibold">
                            {item.label}:
                          </span>{" "}
                          {item.text}
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {section.contactEmail && (
                <p className="text-base sm:text-lg">
                  <span className="text-foreground font-semibold">
                    {section.contactLabel}:
                  </span>{" "}
                  <a
                    href={`mailto:${section.contactEmail}`}
                    className="font-mono text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    {section.contactEmail}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
