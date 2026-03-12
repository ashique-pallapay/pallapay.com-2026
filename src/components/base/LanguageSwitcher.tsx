"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useRouter as useNextRouter } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextRouter = useNextRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    
    // Explicitly set the cookie for the middleware
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Construct the new path natively
    const isDefaultNext = nextLocale === "en";
    let newPath = pathname;
    
    // Using window.location.href forces a full page reload and bypasses
    // Next.js client cache. This prevents the "URL changes but content remains constant" bug.
    startTransition(() => {
      if (isDefaultNext) {
        window.location.href = newPath;
      } else {
        window.location.href = `/${nextLocale}${newPath === '/' ? '' : newPath}`;
      }
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 disabled:opacity-50 cursor-pointer border border-white/20"
      title={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
