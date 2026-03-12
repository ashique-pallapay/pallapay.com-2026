"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    const isDefaultNext = nextLocale === "en";
    let newPath = pathname;

    startTransition(() => {
      if (isDefaultNext) {
        window.location.href = newPath;
      } else {
        window.location.href = `/${nextLocale}${newPath === "/" ? "" : newPath}`;
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
