"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";

export function BuyBitcoinTurkey() {
  const faqs = [
    {
      value: "item-1",
      question: "How do I buy Bitcoin from your office?",
      answer:
        "To buy Bitcoin at our Istanbul office, simply visit us with a valid ID. Our team will guide you through the process, calculate the current exchange rate, and help you complete the transaction via cash or bank transfer instantly.",
    },
    {
      value: "item-2",
      question: "Do I need my own Bitcoin wallet?",
      answer:
        "Yes, you should have a personal Bitcoin wallet ready to receive your funds. If you don't have one yet, our staff can recommend secure mobile or hardware wallet options and help you set it up during your visit.",
    },
    {
      value: "item-3",
      question: "Is it safe to trade with you?",
      answer:
        "Absolutely. We operate in full compliance with local regulations and MASAK requirements. Our office provides a secure, transparent environment for all high-volume and retail crypto transactions.",
    },
    {
      value: "item-4",
      question: "Do you offer large volume (wholesale) OTC deals?",
      answer:
        "Yes, we specialize in high-volume Over-The-Counter (OTC) trades. For large transactions, we provide competitive personalized rates and a private trading desk to ensure speed, security, and discretion.",
    },
    {
      value: "item-5",
      question: "Do you provide transaction receipts?",
      answer:
        "Yes, we provide official transaction receipts for every trade. You will receive a digital or physical confirmation detailing the amount, exchange rate, and transaction ID for your records.",
    },
    {
      value: "item-6",
      question: "Do you offer other cryptocurrencies?",
      answer:
        "While Bitcoin is our primary focus, we also support Ethereum (ETH), USDT, and other major cryptocurrencies. Please contact us or check in-office for the full list of currently available digital assets.",
    },
    {
      value: "item-7",
      question: "Where I can go for additional help or questions?",
      answer:
        "You can reach out to our 24/7 support team via WhatsApp, Telegram, or phone. Alternatively, you are always welcome to visit our Istanbul branch for face-to-face assistance with any queries.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Visit our branch in Istanbul",
      description: "Calculate the best exchange rate for your BTC.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Pay For BTC",
      description: "Make payment via cash, card or bank transfer.",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Get Your BTC",
      description:
        "You will receive your BTC at the same time after payment completed.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          crypto="Bitcoin"
          shortForm="(BTC)"
          image="/images/turkey/bitcoin.png"
        />
      </div>

      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection showTrustedExchange={true} showMapBelowText={true} />
      </div>

      <div className="container  mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="Bitcoin"
          shortForm="(BTC)"
          showLiveValue={true}
          steps={steps}
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>

      <div className="container text-center mt-3! sm:mt-28!">
        <FaqTurkey crypto="Bitcoin" shortForm="(BTC)" faqs={faqs} />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Bitcoin" shortForm="(BTC)" />
      </div>
    </>
  );
}
