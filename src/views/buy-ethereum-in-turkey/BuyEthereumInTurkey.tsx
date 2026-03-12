"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import WhyShouldBuyEthereumTurkey from "@/components/base/WhyEthereumTrustableExchange";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";
import { useTranslations } from "next-intl";

export function BuyEthereumInTurkey() {
  const t = useTranslations("turkeyPage.hero");

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          crypto="Ethereum"
          shortForm="(ETH)"
          image="/images/turkey/ethereum.png"
        />
      </div>
      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection />
      </div>
      <div className="mt-8 text-center text-(--primary-orange)">
        {t("bestPlace", { crypto: "Ethereum (ETH)" })}
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>

      <div className="bg-linear-to-b from-black via-(--primary-grey) to-black text-center mt-20! sm:mt-28!">
        <WhyShouldBuyEthereumTurkey />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey crypto="Ethereum" shortForm="(ETH)" showLiveValue={true} />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <FaqTurkey crypto="Ethereum" shortForm="(ETH)" />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Ethereum" shortForm="(ETH)"/>
      </div>
    </>
  );
}
