import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyShouldBuyEthereumTurkey = ({
  purpose = "Buy",
}: {
  purpose?: string;
}) => {
  const t = useTranslations("turkeyPage.whyEthereum");
  const tHero = useTranslations("turkeyPage.hero");

  const translatedPurpose =
    purpose.toLowerCase() === "buy" ? tHero("buy") : tHero("sell");

  return (
    <section className="container relative text-gray-300 p-6 md:p-20  selection:bg-[#7a6431] selection:text-white">
      <div className="absolute w-full  h-full top-0 left-0">
        <div className=" absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[1px] particle-move-1"></div>
        <div className=" absolute top-[43%]! w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[10px] particle-move-2"></div>
        <div className=" absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[5px] particle-move-3"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="absolute -top-15 right-0 z-10">
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <Image
              src="/images/turkey/gold-logo-cryptocurrency.png"
              alt="Ethereum Gold Icon"
              width={650}
              height={650}
              className="absolute w-[80%] h-auto object-contain "
            />
          </div>
        </div>

        <header className="text-left mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
            {t("title", { purpose: translatedPurpose })}
          </h1>
        </header>

        <div className="text-left space-y-12 text-sm md:text-base leading-relaxed">
          <article>
            <h2 className="text-left text-white font-semibold mb-4 flex items-baseline gap-2">
              {t("section1Title")}
            </h2>
            <p className="mb-4 text-left">
              {t("section1Desc")}
            </p>
          </article>

          {/* Section 2 */}
          <article>
            <h2 className="text-white font-semibold mb-4 flex items-baseline gap-2">
              {t("section2Title")}
            </h2>
            <p className="mb-4">
              {t("section2Desc")}
            </p>
          </article>

          <article>
            <h2 className="text-white font-semibold mb-4 flex items-baseline gap-2">
              {t("section3Title")}
            </h2>
            <p>
              {t("section3Desc")}
            </p>
          </article>
        </div>
        <div className="fixed top-1/2 right-10 w-64 h-64 bg-black/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default WhyShouldBuyEthereumTurkey;
