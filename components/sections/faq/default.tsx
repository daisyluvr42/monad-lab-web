import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "What does Monad-lab Works build?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            We are a multi-disciplinary technology studio specializing in
            AI-driven content generation and advanced human-computer
            interaction software.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Our work spans research, design, and engineering to deliver
            coherent systems that scale without losing clarity.
          </p>
        </>
      ),
    },
    {
      question: "What does \"Encapsulating Complexity\" mean?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            We isolate complexity into self-contained units of logic, each with
            precise interfaces and strict boundaries.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            This approach keeps systems readable, verifiable, and resilient as
            they grow.
          </p>
        </>
      ),
    },
    {
      question: "How do I initiate contact?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Send a note to{" "}
            <a
              href={siteConfig.links.email}
              className="font-mono underline underline-offset-2"
            >
              founder@monad-lab.com
            </a>{" "}
            with a brief overview of your project and desired outcomes.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
