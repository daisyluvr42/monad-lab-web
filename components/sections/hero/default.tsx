import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  buttons?: HeroButtonProps[] | false;
  className?: string;
  id?: string;
}

export default function Hero({
  title = "Monad-lab Works: Encapsulating Complexity.",
  description = "A multi-disciplinary technology studio specializing in AI-driven content generation and advanced human-computer interaction software.",
  buttons = [
    {
      href: "#units",
      text: "Explore the Lab",
      variant: "default",
    },
  ],
  className,
  id = "home",
}: HeroProps) {
  return (
    <Section
      id={id}
      className={cn(
        "fade-bottom overflow-hidden pb-12 sm:pb-20 md:pb-24",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
