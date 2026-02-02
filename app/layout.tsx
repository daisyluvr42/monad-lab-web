import "@/app/globals.css";

import type { Metadata } from "next";

import { I18nProvider } from "@/components/contexts/i18n-provider";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { LanguageTransition } from "@/components/ui/language-transition";
import { ibmPlexMono, inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: "Monad-lab Works",
    template: `%s - Monad-lab Works`,
  },
  metadataBase: new URL(siteConfig.url),
  description:
    "A multi-disciplinary technology studio specializing in AI-driven content generation and advanced human-computer interaction software.",
  keywords: [
    "Monad-lab Works",
    "AI-driven content generation",
    "human-computer interaction",
    "computer vision",
    "algorithmic modeling",
    "technology studio",
  ],
  authors: [
    {
      name: "Xiangyu",
    },
  ],
  creator: "Xiangyu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Monad-lab Works",
    description:
      "A multi-disciplinary technology studio specializing in AI-driven content generation and advanced human-computer interaction software.",
    siteName: "Monad-lab Works",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Monad-lab Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monad-lab Works",
    description:
      "A multi-disciplinary technology studio specializing in AI-driven content generation and advanced human-computer interaction software.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/monad-favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "dark" }}
      className={`dark ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          <I18nProvider>
            <LanguageTransition>{children}</LanguageTransition>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
