import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

interface TurkeyInfoSectionProps {
  showTrustedExchange?: boolean;
  showMapBelowText?: boolean;
  purpose?: string;
}

const TurkeyInfoSection = ({
  showTrustedExchange = false,
  showMapBelowText = false,
  purpose = "buy",
}: TurkeyInfoSectionProps) => {
  const t = useTranslations("turkeyPage.info");
  const tHero = useTranslations("turkeyPage.hero");

  const features = t.raw("whyBuyItems") as string[];

  const translatedPurpose = purpose.toLowerCase() === "buy" ? tHero("buy") : tHero("sell");

  return (
    <div
      className={
        " container flex flex-col w-full  relative text-center  items-center justify-center"
      }
    >
      <div className="absolute w-full h-full top-0 left-0">
        <div className="-z-10 absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[1px] particle-move-1"></div>
        <div className="-z-10 absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[10px] particle-move-2"></div>
        <div className="-z-10 absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[5px] particle-move-3"></div>
      </div>

      {showTrustedExchange && (
        <div className="mt-1 text-left md:mt-14 flex flex-col md:flex-row gap-2 relative z-10">
          <div className="space-y-3">
            <h2 className="text-white text-center text-xl md:text-4xl font-semibold mb-6 tracking-tight">
              {t("whyBuyTitle", { purpose: translatedPurpose })}
            </h2>

            <p className="text-md md:text-lg  text-white">
              {t("whyBuySubtitle")}
            </p>

            <ul className="space-y-2 text-left">
              {features.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-white mr-4 mt-1.5 text-xl">•</span>
                  <p className="text-white text-lg leading-relaxed group-hover:text-white transition-colors">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src="/images/turkey/crypto-market-3d-illustration.png"
              alt="Pallapay Istanbul office"
              width={800}
              height={500}
              className="rounded-lg mt-10"
            />
          </div>
        </div>
      )}
      <iframe
        title="Buy bitcoin dubai"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
        width="100%"
        height="350"
        className="border-0 mt-10 z-10 dark-map"
      ></iframe>
      <span className="text-white mt-5">{t("officeIstanbul")}</span>
      {showMapBelowText && (
        <span className="text-white mt-5 p-2">
          {t("bottomDesc", { purpose: translatedPurpose })}
        </span>
      )}
    </div>
  );
};

export default TurkeyInfoSection;
