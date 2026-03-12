"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import BuyAndSellUSDT from "@/components/base/BuyAndSellUSDT";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";
import { useTranslations } from "next-intl";

export function SellUsdtInIstanbul() {
  const t = useTranslations("turkeyPage.hero");

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          purpose="Sell"
          crypto="USDT"
          image="/images/turkey/tether.png"
        />
      </div>

      <div className="mt-5! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection purpose="Sell" />
      </div>
      <div className="mt-8 text-center ">
        {t("bestPlaceUsdt")}
      </div>
      <div className="container mt-20! sm:mt-28!">
        <BuyAndSellUSDT />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="Tether"
          shortForm="(USDT)"
          showLiveValue={true}
          purpose="Sell"
        />
      </div>

      <div className="container text-center mt-5! sm:mt-28!">
        <FaqTurkey crypto="Tether" shortForm="(USDT)" purpose="Sell" />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="USDT" purpose="Sell" />
      </div>
    </>
  );
}
