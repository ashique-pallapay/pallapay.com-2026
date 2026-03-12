import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { MainFooter } from "@/components/base/MainFooter";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "Pallapay",
  description: "Pallapay - Cryptocurrency Payment Solutions",
  metadataBase: new URL("https://www.pallapay.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${exo2.variable} bg-black`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <MainFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
