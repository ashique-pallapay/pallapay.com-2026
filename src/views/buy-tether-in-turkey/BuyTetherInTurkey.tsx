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
  const faqs = [
    {
      value: "item-1",
      question: "How do I buy Tether from your office?",
      answer:
        "Welcome! Our team at the Istanbul office is dedicated to helping beginners. We will walk you through every step, from setting up a wallet to completing your first Ethereum purchase securely.",
    },
    {
      value: "item-2",
      question: "Is it safe to trade with you?",
      answer:
        "We accommodate both retail and institutional investors. While minimums are kept low for accessibility, our OTC desk is equipped to handle large-scale transactions with personalized rates.",
    },
    {
      value: "item-3",
      question: "Do you offer large volume (wholesale) OTC deals?",
      answer:
        "The process is designed for speed. Once your ID is verified and the rate is locked, most transactions are completed within 10 to 15 minutes, with the ETH sent to your wallet immediately.",
    },
    {
      value: "item-4",
      question: "Do you provide transaction receipts?",
      answer:
        "Our Istanbul branch is open Monday through Saturday from 9:00 AM to 7:00 PM. We recommend booking an appointment for high-volume OTC trades to ensure the private desk is available.",
    },
    {
      value: "item-5",
      question: "Do you offer other cryptocurrencies?",
      answer:
        "Yes, besides Ethereum (ETH), we offer Bitcoin (BTC), Tether (USDT), and several other major digital assets. Our inventory is constantly updated to reflect market demand.",
    },
    {
      value: "item-6",
      question: "Where I can go for additional help or questions?",
      answer:
        "Security and transparency are our priorities. You will receive an official digital or physical receipt for every transaction, including the blockchain hash and the exchange rate used.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Visit our branch in Istanbul",
      description: "Calculate the best exchange rate for your USDT.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Pay For USDT",
      description: "Make payment via cash, card or bank transfer.",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Get Your USDT",
      description:
        "You will receive your USDT at the same time after payment completed.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          crypto="USDT"
          // shortForm="(USDT)"
          image="/images/turkey/tether.png"
        />
      </div>

      <div className="container mt-20! sm:mt-28!">
        <BuyAndSellUSDT />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>

      <p className="container  mt-20! sm:mt-28!  text-md md:text-xl text-center ">
        If you are looking to buy USDT in Istanbul with USD or Turkish Lira, our
        OTC desk provides a trusted, fast, and professional crypto purchasing
        service
      </p>
      <div className=" mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="USDT"
          // shortForm="(ETH)"
          showLiveValue={true}
          steps={steps}
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <FaqTurkey crypto="Tether" shortForm="(USDT)" faqs={faqs} />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="USDT" />
      </div>
    </>
  );
}
