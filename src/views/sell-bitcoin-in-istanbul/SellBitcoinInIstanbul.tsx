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
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import BitcoinExchangeCard from "@/components/base/BitcoinExchangeCard";
import CoinDetails from "@/components/base/CoinDetails";
import Image from "next/image";
import StepIntoCrypto from "@/components/base/StepIntoCrypto";
import CryptoLivePrice from "@/components/base/cryptoLivePrices";
import { useTranslations } from "next-intl";

export function SellBitcoinInIstanbul() {
  const keyFeaturesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-black" />,
      id: "01",
      title: "Cash settlement in USD, EUR, or TRY",
      description: "Flexible payment options to suit your needs",
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      id: "02",
      title: "Fast settlement",
      description:
        "Most BTC transactions are completed within minutes after confirmation.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      id: "03",
      title: "Competitive crypto exchange rates",
      description:
        "Deep liquidity ensures competitive market pricing when selling Bitcoin.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      id: "04",
      title: "Secure transactions",
      description:
        "OTC exchanges provide verified and secure cryptocurrency transactions.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      id: "05",
      title: "Support for both small and large transactions",
      description:
        "OTC services can handle both small and high-volume Bitcoin sales.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      id: "06",
      title: "No hidden fees or commissions",
      description: "Transparent pricing with what you see is what you get.",
    },
  ];

  const howToBuySteps = [
    {
      id: 1,
      title: "Contact the OTC desk in Istanbul",
      description:
        "Confirm the current BTC exchange rate and the amount of Bitcoin you want to sell.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Send your Bitcoin (BTC) to the provided wallet address.",
      description:
        "Transfer your BTC to the wallet address provided by the exchange.",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Receive cash in USD, EUR, or Turkish Lira",
      description:
        "After the Bitcoin transaction is confirmed on the blockchain, you will receive cash in USD, EUR, or Turkish Lira.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  const CointBenefits = [
    " Global accessibility ",
    "Limited supply (21 million BTC)",
    "Fast international transfers ",
    "Strong long-term adoption",
  ];

  const t = useTranslations("turkeyPage.howToBuy");

  const faqs = [
    {
      value: "1",
      question: "Where can I sell Bitcoin in Istanbul?",
      answer:
        "You can sell Bitcoin in Istanbul through a trusted OTC crypto exchange that converts BTC into cash in USD, EUR, or Turkish Lira.",
    },
    {
      value: "2",
      question: "How long does it take to sell Bitcoin in Istanbul?",
      answer:
        "Most Bitcoin transactions are completed within minutes after the BTC transfer is confirmed on the blockchain.",
    },
    {
      value: "3",
      question:
        "What currencies can I receive when selling Bitcoin in Istanbul?",
      answer:
        "You can receive cash in US Dollars (USD), Euro (EUR), or Turkish Lira (TRY).",
    },
    {
      value: "4",
      question: "Is selling Bitcoin in Istanbul safe?",
      answer:
        "Yes. When using a professional OTC crypto exchange, BTC transactions are secure and transparent.",
    },
    {
      value: "5",
      question: "Do I need a crypto wallet to sell Bitcoin?",
      answer:
        "Yes. You must send your Bitcoin from a compatible BTC wallet to the exchange wallet address.",
    },
    {
      value: "6",
      question: "Can tourists sell Bitcoin in Istanbul?",
      answer:
        "Yes. Many international visitors and traders sell Bitcoin in Istanbul through OTC crypto exchanges.",
    },
    {
      value: "7",
      question: "Is there a minimum or maximum amount to sell Bitcoin?",
      answer:
        "OTC services usually support both small transactions and large Bitcoin sales depending on available liquidity.",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          shortForm="(BTC)"
          title1="Sell Bitcoin in Istanbul "
          title2="Exchange BTC for Cash USD, EUR or TRY "
          image="/images/turkey/bitcoin.png"
          purpose="Sell"
        />
      </div>

      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection
          showTrustedExchange={true}
          showMapBelowText={true}
          purpose="Sell"
          title="Sell Bitcoin in Istanbul – Fast and Secure BTC to Cash Exchange"
          para3="Our OTC crypto exchange service allows clients to sell Bitcoin in Istanbul quickly and securely, with transparent pricing and fast settlement."
          para2="Bitcoin (BTC) is the most widely known cryptocurrency and is traded globally. Many investors hold Bitcoin as a long-term asset, while others choose to convert BTC into fiat currencies such as US Dollars, Euro, or Turkish Lira."
          para1="If you want to sell Bitcoin in Istanbul and receive cash instantly, using a professional OTC crypto exchange is one of the safest and most efficient solutions. Istanbul has become a growing hub for cryptocurrency trading, attracting investors, traders, and international visitors who need reliable crypto-to-cash services."
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <BitcoinExchangeCard />
      </div>
      <div className="container  mt-20! sm:mt-28!">
        <KeyBenefitsTurkey
          data={keyFeaturesData}
          title="Why Sell Bitcoin Through an OTC Crypto Exchange"
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="Bitcoin"
          shortForm="(BTC)"
          data={howToBuySteps}
          subTitle="Selling Bitcoin in Istanbul through an OTC crypto exchange is simple and secure."
          purpose="Sell"
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <CoinDetails
          image="/images/turkey/bitcoin-details-image.png"
          title="What is Bitcoin?"
          description="Bitcoin is a decentralized digital currency that operates on a blockchain network. Unlike traditional currencies issued by governments, Bitcoin transactions are verified by a distributed network of computers around the world."
          textSecond="Many people choose to invest in Bitcoin because it offers:"
          benefits={CointBenefits}
          lastText="Because of these features, Bitcoin has become one of the most widely traded cryptocurrencies in the world."
        />
      </div>
      <div className="text-center text-white  space-y-2 mt-20! sm:mt-28!">
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
      <div className="container text-center mt-3! sm:mt-28!">
        <FaqTurkey
          crypto="Bitcoin"
          shortForm="(BTC)"
          purpose="Sell"
          faqs={faqs}
        />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Bitcoin" shortForm="(BTC)" purpose="Sell" />
      </div>
    </>
  );
}
