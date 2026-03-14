import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import CryptoLivePrice from "./cryptoLivePrices";
import { useTranslations } from "next-intl";

interface HowtoBuyBitcoinTurkeyProps {
  crypto?: any;
  shortForm?: string;
  showLiveValue?: boolean;
  steps?: {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  purpose?: "Buy" | "Sell";
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  information?: string;
  subTitle: string;
}
const HowtoBuyBitcoinTurkey = ({
  crypto,
  shortForm,
  purpose = "Buy",
  data,
  subTitle,
  information,
}: HowtoBuyBitcoinTurkeyProps) => {
  const t = useTranslations("turkeyPage.howToBuy");
  const tHero = useTranslations("turkeyPage.hero");
  const tc = useTranslations("coins");

  const translatedPurpose =
    purpose.toLowerCase() === "buy" ? tHero("buy") : tHero("sell");

  const translatedCrypto = tc(crypto) || crypto;

  const defaultSteps =
    purpose.toLowerCase() === "buy"
      ? [
          {
            id: 1,
            title: t("steps.visit.title"),
            description: t("steps.visit.desc", { crypto: translatedCrypto }),
            image: "/images/turkey/holding-location-hand.png",
            alt: "Location Icon",
          },
          {
            id: 2,
            title: t("steps.pay.title", { crypto: translatedCrypto }),
            description: t("steps.pay.desc"),
            image: "/images/turkey/secure-mobile-payment.png",
            alt: "Payment Icon",
          },
          {
            id: 3,
            title: t("steps.get.title", { crypto: translatedCrypto }),
            description: t("steps.get.desc", { crypto: translatedCrypto }),
            image: "/images/turkey/crypto-hold-bitcoin.png",
            alt: "Bitcoin Icon",
          },
        ]
      : [
          {
            id: 1,
            title: t("steps.visit.title"),
            description: t("steps.visit.desc", { crypto: translatedCrypto }),
            image: "/images/turkey/holding-location-hand.png",
            alt: "Location Icon",
          },
          {
            id: 2,
            title: t("steps.transfer.title", { crypto: translatedCrypto }),
            description: t("steps.transfer.desc", { crypto: translatedCrypto }),
            image: "/images/turkey/crypto-exchange-3d-icon-illustration1.png",
            alt: "Transfer Icon",
          },
          {
            id: 3,
            title: t("steps.getCash.title"),
            description: t("steps.getCash.desc"),
            image: "/images/turkey/3d-hand-holding-dollar-money 1.png",
            alt: "Cash Icon",
          },
        ];

  // const displaySteps = steps || defaultSteps;

  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        How to {purpose}{" "}
        <span className="text-(--primary-orange)">
          {crypto}
          {shortForm}
        </span>{" "}
        in Istanbul?
      </h2>

      <p className="text-md text-center text-white/60 mb-16">{subTitle}</p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {data?.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-[#f5b813]/10 rounded-full flex items-center justify-center border border-zinc-800 overflow-visible">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={180}
                  height={180}
                  className="mr-10 mt-4 object-contain"
                />
              </div>

              <div className="absolute -top-2 -right-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#f5b813] bg-black">
                  <div className="flex items-center justify-center w-7 h-7 bg-[#f5b813] rounded-full">
                    <span className="text-black text-xs font-extrabold">
                      {step.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-white">
              {step.title}
            </h3>
            <p className="text-zinc-400 text-sm max-w-[250px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {information && (
        <p className="container text-sm md:text-md rounded bg-[#181A20] mt-10! p-5">
          {information}
        </p>
      )}
    </div>
  );
};

export default HowtoBuyBitcoinTurkey;
