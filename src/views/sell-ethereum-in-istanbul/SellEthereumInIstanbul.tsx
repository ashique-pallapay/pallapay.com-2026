"use client";

import * as React from "react";
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from "@/components/base/MainNav";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import WhyShouldBuyEthereumTurkey from "@/components/base/WhyEthereumTrustableExchange";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";

export function SellEthereumInIstanbul() {
  const faqs = [
    {
      value: "item-1",
      question: "This is my first time. Can you help me?",
      answer:
        "Welcome! Our team at the Istanbul office is dedicated to helping beginners. We will walk you through every step, from setting up a wallet to completing your first Ethereum purchase securely.",
    },
    {
      value: "item-2",
      question: "What is the min/max amount that I can buy?",
      answer:
        "We accommodate both retail and institutional investors. While minimums are kept low for accessibility, our OTC desk is equipped to handle large-scale transactions with personalized rates.",
    },
    {
      value: "item-3",
      question: "How long does it take to buy Ethereum in PallaPay Istanbul?",
      answer:
        "The process is designed for speed. Once your ID is verified and the rate is locked, most transactions are completed within 10 to 15 minutes, with the ETH sent to your wallet immediately.",
    },
    {
      value: "item-4",
      question:
        "What are the opening and closing hours of the Istanbul office?",
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
      question: "Do you provide transaction receipts?",
      answer:
        "Security and transparency are our priorities. You will receive an official digital or physical receipt for every transaction, including the blockchain hash and the exchange rate used.",
    },
    {
      value: "item-7",
      question: "Where I can go for additional help or questions?",
      answer:
        "You can visit our office in person, contact our 24/7 support via WhatsApp, or reach out through our official Telegram channel for any technical or general inquiries.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Visit our branch in Istanbul",
      description: "Calculate the best exchange rate for your ETH.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Transfer ETH",
      description: "Transfer your ETH using our automated system.",
      image: "/images/turkey/crypto-exchange-3d-icon-illustration1.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Get Cash",
      description: "Get your payment via the chosen method.",
      image: "/images/turkey/3d-hand-holding-dollar-money 1.png",
      alt: "Bitcoin Icon",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          crypto="Ethereum"
          purpose="Sell"
          shortForm="(ETH)"
          image="/images/turkey/ethereum.png"
        />
      </div>

      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection />
      </div>
      <div className="mt-8 text-center text-(--primary-orange)">
        Pallapay is the best place to Sell Ethereum (ETH) and other
        Cryptocurrency with cash instantly.
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey />
      </div>

      <div className="bg-linear-to-b from-black via-(--primary-grey) to-black text-center mt-20! sm:mt-28!">
        <WhyShouldBuyEthereumTurkey purpose="Sell" />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          showLiveValue={true}
          crypto="Ethereum"
          shortForm="(ETH)"
          steps={steps}
          purpose="Sell"
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <FaqTurkey crypto="Ethereum" shortForm="(ETH)" faqs={faqs} purpose="Sell"/>
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Ethereum" shortForm="(ETH)" purpose="Sell" />
      </div>
    </>
  );
}
