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
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import CryptoLivePrice from "@/components/base/cryptoLivePrices";
import { useTranslations } from "next-intl";
import StepIntoCrypto from "@/components/base/StepIntoCrypto";
import Image from "next/image";
import CoinDetails from "@/components/base/CoinDetails";

export function BuyTethernTurkey() {
  const keyFeaturesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-black" />,
      id: "01",
      title: "Buy USDT with USD cash or Turkish Lira",
      description: "Flexible payment options to suit your needs",
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      id: "02",
      title: "Fast settlement",
      description: "Most transactions are completed within minutes.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      id: "03",
      title: "Competitive exchange rates",
      description: "Large liquidity allows better rates when buying USDT.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      id: "04",
      title: "Secure transactions",
      description:
        "Professional OTC desks provide safe and verified crypto transactions.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      id: "05",
      title: "Support for large transactions",
      description:
        "OTC desks can handle both small and high-volume crypto purchases.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      id: "06",
      title: "Reliable and Safe",
      description:
        "For traders, investors, and businesses, OTC services offer one of the most reliable ways to buy USDT in Istanbul safely.",
    },
  ];

  const howToBuySteps = [
    {
      id: 1,
      title: "Contact the OTC desk",
      description:
        "Confirm the current USDT exchange rate and the amount you want to purchase.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Choose your payment method",
      description:
        "You can buy USDT using USD, EUR, or Turkish Lira (TRY) depending on your preference.",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Receive your USDT",
      description:
        "Once the payment is completed, the USDT will be sent directly to your crypto wallet.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  const t = useTranslations("turkeyPage.howToBuy");

  const faqs = [
    {
      value: "1",
      question: "Where can I buy USDT in Istanbul?",
      answer:
        "You can buy USDT in Istanbul through a secure OTC crypto exchange that allows users to purchase Tether using USD, EUR, or Turkish Lira.",
    },
    {
      value: "2",
      question: "How long does it take to buy USDT in Istanbul?",
      answer:
        "Most USDT purchases are completed within a few minutes once the payment is confirmed.",
    },
    {
      value: "3",
      question: "What currencies can I use to buy USDT in Istanbul?",
      answer:
        "You can buy USDT using US Dollars (USD), Euro (EUR), or Turkish Lira (TRY) depending on availability.",
    },
    {
      value: "4",
      question: "Is buying USDT in Istanbul safe?",
      answer:
        "Yes, when using a trusted OTC crypto exchange that provides secure transactions and transparent pricing.",
    },
    {
      value: "5",
      question: "Do I need a crypto wallet to buy USDT?",
      answer:
        "Yes. To receive USDT, you will need a compatible cryptocurrency wallet address where the USDT will be sent.",
    },
    {
      value: "6",
      question: "Can tourists buy USDT in Istanbul?",
      answer:
        "Yes. Many international visitors and traders buy USDT in Istanbul through OTC crypto exchanges.",
    },
    {
      value: "7",
      question: "Is there a minimum or maximum amount to buy USDT?",
      answer:
        "OTC services typically support both small purchases and large crypto transactions depending on liquidity.",
    },
  ];

  const CointBenefits = [
    "Enter the cryptocurrency market quickly",
    "Transfer funds between exchanges",
    "Store value in a digital dollar format",
    "Trade other cryptocurrencies such as Bitcoin or Ethereum",
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          title1="Buy USDT in Istanbul, Secure Crypto "
          title2=" Exchange for USD, EUR & TRY"
          image="/images/turkey/tether.png"
        />
      </div>

      <div className="container mt-20! sm:mt-28!">
        <BuyAndSellUSDT
          title="Buy USDT in Istanbul – Fast and Secure Crypto Exchange"
          para4="Thanks to strong liquidity and direct access to major crypto markets, we can handle large USDT purchases quickly while maintaining the highest level of security and privacy."
          para3="Clients can purchase USDT in Istanbul using USD or TRY, with competitive exchange rates and immediate delivery to their crypto wallet. Our team ensures a professional and secure environment for every transaction, supporting both individual traders and high-volume buyers."
          para2="Tether (USDT) is one of the most widely used stable coins in the cryptocurrency market. Because its value is designed to stay close to the US Dollar, many traders and investors use USDT to enter the crypto market, store digital value, or move funds between exchanges."
          para1="Our Istanbul OTC desk offers a secure and efficient way to buy USDT with cash in US Dollars (USD) or Turkish Lira (TRY). Whether you are investing in cryptocurrency, sending funds internationally, or entering the crypto market for the first time, we make the process fast and straightforward."
        />
      </div>

      <div className=" mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <p className="text-md md:text-lg text-white text-center mt-20! sm:mt-28!">
          Using a professional OTC crypto exchange provides several advantages
          compared to informal trading methods.
        </p>
        <TurkeyInfoSection />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          data={howToBuySteps}
          purpose="Buy"
          crypto="Tether"
          shortForm="(USDT)"
          // showLiveValue={true}
          subTitle="Buying USDT in Istanbul through an OTC crypto exchange is simple and secure."
          information="Using a professional OTC crypto exchange provides several advantages
        compared to informal trading methods."
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <CoinDetails
          image="/images/turkey/turkey-ethereum.png"
          title="What is USDT (Tether)?"
          description="USDT, also known as Tether, is a stablecoin that is designed to maintain a value close to 1 US Dollar. Unlike many cryptocurrencies that can experience large price fluctuations, USDT provides stability while still allowing users to benefit from the flexibility of digital assets."
          textSecond="Many crypto traders prefer USDT because it allows them to:"
          benefits={CointBenefits}
          lastText="For many people entering the crypto world, buying USDT is often the first step."
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey
          data={keyFeaturesData}
          title="Why Buy USDT in Istanbul Through an OTC Crypto Exchange"
        />
      </div>

      <div className="container text-center text-white  space-y-2 mt-20! sm:mt-28!">
        <h1 className="text-4xl">{t("livePricesTitle")}</h1>
        <span className="text-white/50">{t("livePricesDesc")}</span>
        <CryptoLivePrice />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/turkey/trusted-site.png"
          alt="trusted-site-banner"
          width={750}
          height={450}
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <StepIntoCrypto />
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
