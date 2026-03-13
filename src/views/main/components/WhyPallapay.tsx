"use client";

import * as React from "react";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function WhyPallapay() {
  const t = useTranslations("whyPallapay");

  return (
    <div className="mt-24 sm:mt-40 container relative">
      <div className="absolute left-[-40%] bottom-[-5%] w-[70%] h-[90%] z-10 opacity-50 "></div>

      <div className="overflow-hidden mt-10 md:mt-16 ">
        <Image
          alt="crypto-group-image"
          src="/images/crypto-group-icon.png"
          width={1200}
          height={1200}
          className="hidden sm:block w-full h-auto mt-10 sm:mx-auto"
        />
        <Image
          src="/images/crypto-lists-mobile.png"
          alt="crypto"
          width={800}
          height={800}
          className="w-full h-auto mt-10 sm:hidden"
        />
      </div>
      <div className="w-full rounded-3xl pt-10 pb-24 px-5 sm:px-16 bg-black relative z-20">
        <div className="mt-5 sm:mt-0">
          <ScrollAnimation>
            <h2 className="mt-10 md:mt-16 text-[1.75rem] sm:text-4xl md:text-5xl font-semibold text-center">
              {t("title")}
            </h2>
          </ScrollAnimation>{" "}
          <div className=" md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-20 text-center mt-14 sm:mt-6">
            <ScrollAnimation delay={100}>
              <div className="w-full relative">
                <div className="text-lg text-amber-400 font-semibold">
                  {t("quickSetup.title")}
                </div>
                <div className="mt-2 relative">
                  <div className="absolute top-3 left-0 w-full leading-none text-center text-amber-400 text-[200px] font-semibold opacity-[0.15]">
                    1
                  </div>
                  <div className="relative">
                    {t("quickSetup.description")}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="w-full">
                <div className="text-lg text-amber-400 font-semibold">
                  {t("transactionControl.title")}
                </div>
                <div className="mt-2 relative">
                  <div className="absolute top-3 left-0 w-full leading-none text-center text-amber-400 text-[200px] font-semibold opacity-[0.15]">
                    2
                  </div>
                  <div className="relative">
                    {t("transactionControl.description")}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="w-full">
                <div className="text-lg text-amber-400 font-semibold">
                  {t("support.title")}
                </div>
                <div className="mt-2 relative">
                  <div className="absolute top-3 left-0 w-full leading-none text-center text-amber-400 text-[200px] font-semibold opacity-[0.15]">
                    3
                  </div>
                  <div className="relative">
                    {t("support.description")}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
