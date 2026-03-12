"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import BuyAndSellUSDT from "@/components/base/BuyAndSellUSDT";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";

export function BuyTethernTurkey() {
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          crypto="USDT"
          image="/images/turkey/tether.png"
        />
      </div>

      <div className="container mt-20! sm:mt-28!">
        <BuyAndSellUSDT />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>

      <div className=" mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="USDT"
          showLiveValue={true}
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <FaqTurkey crypto="Tether" shortForm="(USDT)" />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="USDT" />
      </div>
    </>
  );
}
