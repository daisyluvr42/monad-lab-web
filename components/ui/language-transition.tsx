"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useI18n } from "@/components/contexts/i18n-provider";

export function LanguageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useI18n();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
