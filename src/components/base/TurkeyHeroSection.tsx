import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface TurkeyHeroSectionProps {
  crypto: string;
  shortForm?: string;
  image: string;
  purpose?: "Buy" | "Sell";
}
const TurkeyHeroSection = ({
  crypto,
  shortForm,
  image,
  purpose = "Buy",
}: TurkeyHeroSectionProps) => {
  const t = useTranslations("turkeyPage.hero");
  const tc = useTranslations("coins");

  return (
    <div className="container py-14 relative">
      <Image
        src="/images/turkey/turkey-flag.png"
        alt="Turkey Flag"
        width={500}
        height={500}
        className="absolute  top-4 left-0 w-32 sm:w-40 lg:w-[350px]"
      />

      <div className="text-center relative z-10">
        <div className="text-3xl leading-[2.5rem] lg:text-4xl lg:leading-[3rem] font-semibold">
          <h1 className=" text-xl md:text-3xl">
            {purpose === "Buy" ? t("buy") || "Buy" : t("sell") || "Sell"}{" "}
            {tc(crypto) || crypto} {shortForm}{" "}
            {purpose === "Buy" ? t("with") : t("andGet")}{" "}
            {t("usDollarsOrLira")} {t("in")}
            <span className="text-(--primary-orange)"> {t("istanbul")}</span>
          </h1>
        </div>

        <div className="flex justify-center items-center mt-5 gap-5 text-(--primary-orange) flex-wrap">
          <div className="flex gap-1 md:gap-3 justify-center items-center">
            <span className="border flex w-8 items-center justify-center rounded-full h-8">
              <Phone />
            </span>
            <span>+90 +90 501 355 55 43</span>
          </div>

          <div className="flex gap-1 md:gap-3 justify-center items-center">
            <Image
              src="/images/icons/social/Whatsapp.png"
              alt="WhatsApp"
              width={35}
              height={35}
            />
            <span>+90 +90 501 355 55 43</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:flex justify-center gap-3 mt-5">
          <a href="https://dashboard.pallapay.com/auth/register">
            <Button
              size="xl"
              className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer"
            >
              {t("buyOnline")}
            </Button>
          </a>

          <a href="https://dashboard.pallapay.com/auth/register" target="_blank">
            <Button
              size="xl"
              variant="outline"
              className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer"
            >
              {t("visitOffice")}
            </Button>
          </a>
        </div>

        <div className="relative flex mt-10 justify-center items-center">
          <Image
            src={image}
            alt={crypto}
            width={180}
            height={180}
            className="w-16 h-16 md:w-36 md:h-36  lg:w-44 lg:h-44  "
          />
          <Image
            src="/images/turkey/hero-layer.png"
            alt="Turkey Flag"
            width={1050}
            height={750}
            className="absolute  md:-bottom-13 -bottom-6  xl:left-16 left-1"
          />
        </div>
      </div>
    </div>
  );
};

export default TurkeyHeroSection;
