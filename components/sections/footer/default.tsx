import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import MonadMark from "../../logos/monad";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  contactEmail?: string;
  className?: string;
}

export default function FooterSection({
  logo = <MonadMark />,
  name = "Monad-lab Works",
  contactEmail = "founder@monad-lab.com",
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-2">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-muted-foreground max-w-[420px] text-sm">
                Encapsulating Complexity.
              </p>
              <div className="text-muted-foreground font-mono text-xs">
                Founder ID: Xiangyu Huang
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a
                href={`mailto:${contactEmail}`}
                className="text-muted-foreground font-mono text-sm"
              >
                {contactEmail}
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2026 Monad-lab Works LLC. All rights reserved.</div>
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4">
              <span>Registered in Delaware, USA.</span>
              <span>
                Contact:{" "}
                <a href={`mailto:${contactEmail}`} className="font-mono">
                  {contactEmail}
                </a>
              </span>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
