"use client";

import * as React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import { useTranslations } from "next-intl";

export function InstantSettlementSection() {
  const t = useTranslations("instantSettlement");

  return (
    <div className="mt-20! lg:mt-40! container text-black text-center relative">
      <ParallaxProvider>
        <Parallax
          rotate={[-6, 7]}
          speed={5}
          className="hidden sm:block absolute -bottom-10 left-[4%] w-[118px] h-[118px] rotate-[100deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2.5px] z-30"
        ></Parallax>
        <Parallax
          rotate={[-3, 3]}
          speed={-6}
          className="absolute -bottom-14 right-[25%] w-[54px] h-[54px] rotate-[120deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px]"
        ></Parallax>
        <Parallax
          rotate={[-2, 7]}
          speed={2}
          className="absolute -top-14 right-[3%] w-[93px] h-[96px] rotate-[20deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px]"
        ></Parallax>
        <Parallax
          rotate={[2, -3]}
          speed={3}
          className="hidden sm:block absolute bottom-6 left-[16%] w-[20px] h-[20px] bg-[url(/images/dark-star.png)] bg-contain bg-no-repeat z-30"
        ></Parallax>
        <Parallax
          rotate={[4, -2]}
          speed={5}
          className="absolute -bottom-8 right-[23%] w-[12px] h-[12px] bg-[url(/images/dark-star.png)] bg-contain bg-no-repeat"
        ></Parallax>
        <Parallax
          rotate={[-3, 5]}
          speed={3}
          className="absolute top-12 right-[10%] w-[20px] h-[20px] bg-[url(/images/dark-star.png)] bg-contain bg-no-repeat z-30"
        ></Parallax>
      </ParallaxProvider>
      <div
        className="
  bg-gradient-to-r from-black via-(--primary-grey)/40 to-(--primary-grey) h-full not-first:rounded-3xl p-5 lg:px-14 lg:py-5 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-20
"
      >
        {" "}
        <div className="md:col-span-7 text-xl md:mt-8 text-center lg:pr-12 row-start-2 md:row-start-1">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#FBB904]">
              {t("title")}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={150}>
            <div className="text-lg mt-5 pb-10 text-white">
              {t("description")}
            </div>
          </ScrollAnimation>
        </div>
        <div className="md:col-span-5 relative row-start-1">
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-[100%] h-[110%] z-10 opacity-80"></div>
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-[40%] h-[40%] bg-white rounded-[150%] blur-[20px] opacity-70 z-10"></div>
          <img
            className="w-[75%] sm:w-[55%] md:w-[75%] mx-auto relative z-20"
            src="/images/crypto-exchange.png"
            alt="Exchange cryptocurrencies in pallapay"
          />
        </div>
      </div>
    </div>
  );
}
