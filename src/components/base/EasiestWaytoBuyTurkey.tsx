import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const EasiestWayToBuy = ({
  crypto,
  shortForm,
  purpose = "Buy",
}: {
  crypto: string;
  shortForm?: string;
  purpose?: string;
}) => {
  const t = useTranslations("turkeyPage.easiestWay");
  const tHero = useTranslations("turkeyPage.hero");
  const tc = useTranslations("coins");

  const translatedPurpose =
    purpose.toLowerCase() === "buy" ? tHero("buy") : tHero("sell");

  const translatedCrypto = tc(crypto) || crypto;
  const cryptoWithSymbol = `${translatedCrypto} ${shortForm || ""}`;

  return (
    <div className="relative  w-full bg-(--primary-orange)/10 border border-(--primary-orange) rounded-[40px] shadow-2xl p-8 md:p-16">
      <div className="absolute -top-12 -right-4 md:-top-16 md:right-12">
        <div className="relative w-16 h-16 md:w-40 md:h-40 rounded-full border border-(--primary-orange) bg-linear-to-b from-[#1a170e] to-black flex items-center justify-center  shadow-xl">
          <Image
            src="/images/turkey/bitcoin-hand.png"
            alt={crypto}
            width={250}
            height={250}
            className="absolute md:bottom-4 bottom-0  w-[120%] h-auto max-w-none"
          />
        </div>
      </div>

      <div className="space-y-6 ">
        <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
          {t("title", { purpose: translatedPurpose, crypto: cryptoWithSymbol })}
        </h1>

        <p className="leading-relaxed">{t("para1")}</p>

        <p className="leading-relaxed">{t("para2")}</p>

        <div className="space-y-3">
          <p className="font-medium text-gray-100">{t("opportunities")}</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#7a6431] rounded-full"></span>
              {t("buy", { crypto: translatedCrypto })}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#7a6431] rounded-full"></span>
              {t("sell", { crypto: translatedCrypto })}
            </li>
            {crypto != "USDT" && (
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7a6431] rounded-full"></span>
                {t("trade", { crypto: translatedCrypto })}
              </li>
            )}
          </ul>
        </div>

        <p className="italic">{t("firstStep", { crypto: translatedCrypto })}</p>

        <h2 className="text-lg font-semibold text-white pt-2 border-b border-[#7a6431]/20 pb-1 inline-block">
          {t("subTitle", { purpose: translatedPurpose, crypto: translatedCrypto })}
        </h2>

        <p className="leading-relaxed">
          {t("para3", { purpose: translatedPurpose, crypto: translatedCrypto })}
        </p>

        <p className="leading-relaxed">
          {t.rich("para4", {
            purpose: translatedPurpose,
            crypto: translatedCrypto,
            pallapay: (chunks) => (
              <span className="text-white font-bold underline decoration-[#7a6431]">
                {chunks}
              </span>
            ),
          })}
        </p>

        <p className="pt-6 text-xs md:text-sm  max-w-lg border-t border-white/5 mt-3">
          {t("disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default EasiestWayToBuy;
