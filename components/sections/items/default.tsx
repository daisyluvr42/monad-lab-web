import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  id?: string;
  className?: string;
}

export default function Items({
  title = "The Units",
  items = [
    {
      title: "Introspective Intelligence",
      description:
        "Leveraging AI and algorithmic models to explore the boundaries of the human psyche. From ancient metaphysical systems like BaZi to modern Core Cognitive Behavioral Therapy (CCBT), we translate abstract inner patterns into actionable digital insights.",
      icon: (
        <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          Unit 01:
        </span>
      ),
    },
    {
      title: "Generative Alchemy:",
      description: "AI-assisted storytelling & creative production.",
      icon: (
        <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          Unit 02:
        </span>
      ),
    },
    {
      title: "Precision Vision:",
      description:
        "Computer vision for medical & industrial identification.",
      icon: (
        <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          Unit 03:
        </span>
      ),
    },
  ],
  id = "units",
  className,
}: ItemsProps) {
  return (
    <Section id={id} className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-3">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription className="max-w-none">
                  {item.description}
                </ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
