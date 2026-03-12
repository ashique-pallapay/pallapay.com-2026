"use client";

import * as React from "react";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <div className="relative">
      <div className="absolute top-0 w-full h-[520px] bg-[url('/images/bg-slice-gradient.svg')] bg-fill bg-center bg-no-repeat"></div>
      <div className="container mt-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-3xl lg:pb-16 h-full pb-8 pt-10 sm:pt-14 relative text-black mb-24 items-center text-center lg:text-left">
          <div className="px-5 w-full ">
            <ScrollAnimation>
              <div className="font-semibold text-[2rem] sm:text-[2.5rem] leading-[2.6rem] sm:leading-[3.25rem]">
                <span className="lg:block text-white">
                  {t("walletTitle1")}{" "}
                </span>
                <span className="lg:block text-white">
                  {t("walletTitle2")}{" "}
                  <span className="text-[#FBB904]">{t("walletHighlight")}</span>
                </span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={150}>
              <div className="mt-5 text-white">{t("walletDescription")}</div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="mt-5">
                <a href="/mobile-apps">
                  <button className="w-full md:w-auto bg-amber-400 hover:bg-amber-500 cursor-pointer px-4 py-2 rounded-md font-medium text-black">
                    {t("walletCta")}
                  </button>
                </a>
              </div>
            </ScrollAnimation>
          </div>
          <div className="lg:col-span-2 px-5 lg:pl-44 lg:pr-0 mt-8 lg:mt-0">
            <img
              src="/images/pallapay-wallet-application-new.png"
              alt="Pallapay Wallet Application"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
