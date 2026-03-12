"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";

export function SellBitcoinInIstanbul() {
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          crypto="Bitcoin"
          shortForm="(BTC)"
          image="/images/home/Hero/Hero-Bitcoin.png"
          purpose="Sell"
        />
      </div>

      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection
          showTrustedExchange={true}
          showMapBelowText={true}
          purpose="Sell"
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          showLiveValue={true}
          crypto="Bitcoin"
          shortForm="(BTC)"
          purpose="Sell"
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>
      <div className="container text-center mt-3! sm:mt-28!">
        <FaqTurkey
          crypto="Bitcoin"
          shortForm="(BTC)"
          purpose="Sell"
        />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Bitcoin" shortForm="(BTC)" purpose="Sell" />
      </div>
    </>
  );
}
