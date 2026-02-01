"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

export type Locale = "en" | "zh";

type Messages = typeof en;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
  tm: <T>(key: string) => T;
};

const STORAGE_KEY = "monad-lang";

const MESSAGES: Record<Locale, Messages> = {
  en,
  zh,
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(source: unknown, key: string) {
  if (!key) {
    return source;
  }

  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (savedLocale === "en" || savedLocale === "zh") {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    const messageSet = MESSAGES[locale];

    const getMessage = (key: string) =>
      getNestedValue(messageSet, key) ?? getNestedValue(MESSAGES.en, key);

    return {
      locale,
      setLocale,
      toggleLocale: () =>
        setLocale((current) => (current === "en" ? "zh" : "en")),
      t: (key: string) => {
        const result = getMessage(key);
        return typeof result === "string" ? result : key;
      },
      tm: <T,>(key: string) => getMessage(key) as T,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
