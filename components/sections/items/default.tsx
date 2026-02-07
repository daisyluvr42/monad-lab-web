import * as React from "react";
import Link from "next/link";
import { useI18n } from "@/components/contexts/i18n-provider";
import { cn } from "@/lib/utils";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface UnitItem {
  label: string;
  title: string;
  description: string;
  href?: string;
}

interface ItemsProps {
  title?: string;
  items?: UnitItem[] | false;
  id?: string;
  className?: string;
}

export default function Items({
  title,
  items,
  id = "units",
  className,
}: ItemsProps) {
  const { t, tm } = useI18n();
  const resolvedTitle = title ?? t("units.title");
  const resolvedItems = items === undefined ? tm<UnitItem[]>("units.items") : items;

  return (
    <Section id={id} className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {resolvedTitle}
        </h2>
        {resolvedItems !== false && resolvedItems.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-3">
            {resolvedItems.map((item, index) => {
              const ItemContent = (
                <Item className={cn(item.href && "hover:bg-muted/50 transition-colors duration-200")}>
                  <ItemTitle className="flex items-center gap-2">
                    <ItemIcon>
                      <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
                        {item.label}
                      </span>
                    </ItemIcon>
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className="max-w-none">
                    {item.description}
                  </ItemDescription>
                </Item>
              );

              if (item.href) {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block active:scale-95 transition-transform duration-100"
                  >
                    {ItemContent}
                  </Link>
                );
              }

              return <React.Fragment key={index}>{ItemContent}</React.Fragment>;
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
