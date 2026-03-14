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
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import StepIntoCrypto from "@/components/base/StepIntoCrypto";
import Image from "next/image";
import CryptoLivePrice from "@/components/base/cryptoLivePrices";
import CoinDetails from "@/components/base/CoinDetails";
import { useTranslations } from "next-intl";

export function BuyBitcoinTurkey() {
  const keyFeaturesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-black" />,
      id: "01",
      title: "Buy BTC with USD cash or Turkish Lira",
      description: "Flexible payment options to suit your needs",
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      id: "02",
      title: "Fast settlement",
      description: "Most BTC transactions are completed within minutes.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      id: "03",
      title: "Competitive exchange rates",
      description: "Deep liquidity ensures better pricing when buying Bitcoin.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      id: "04",
      title: "Secure transactions",
      description:
        "Professional OTC desks provide safe and verified cryptocurrency transactions.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      id: "05",
      title: "Support for large transactions",
      description:
        "OTC desks can handle both small and high-volume Bitcoin trades.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      id: "06",
      title: "Reliable and Safe",
      description:
        "For traders, investors, and businesses, OTC services offer one of the most reliable ways to buy BTC in Istanbul safely.",
    },
  ];

  const howToBuySteps = [
    {
      id: 1,
      title: "Contact the OTC desk",
      description:
        "Confirm the current Bitcoin price and the amount of BTC you want to purchase.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Choose your payment method",
      description: "You can buy Bitcoin using USD, EUR, or Turkish Lira (TRY).",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Receive BTC in your wallet",
      description:
        "After payment confirmation, the Bitcoin will be transferred directly to your crypto wallet.",
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
      question: "Where can I buy Bitcoin in Istanbul?",
      answer:
        "You can buy Bitcoin in Istanbul through a secure OTC crypto exchange that allows BTC purchases using USD, EUR, or Turkish Lira.",
    },
    {
      value: "2",
      question: "How long does it take to buy Bitcoin in Istanbul?",
      answer:
        "Most Bitcoin purchases are completed within minutes after the payment is confirmed.",
    },
    {
      value: "3",
      question: "What currencies can I use to buy Bitcoin in Istanbul?  ",
      answer: "You can buy Bitcoin using USD, EUR, or Turkish Lira (TRY).",
    },
    {
      value: "4",
      question: "Is buying Bitcoin in Istanbul safe?  ",
      answer:
        "Yes. When using a trusted OTC crypto exchange, transactions are secure and transparent.",
    },
    {
      value: "5",
      question: "Do I need a crypto wallet to buy Bitcoin?",
      answer:
        "Yes. To receive Bitcoin, you must provide a compatible BTC wallet address.",
    },
    {
      value: "6",
      question: "Can tourists buy Bitcoin in Istanbul?",
      answer:
        "Yes. Many international visitors and traders buy Bitcoin in Istanbul through OTC crypto exchanges.",
    },
    {
      value: "7",
      question: "Is there a minimum or maximum amount to buy Bitcoin?",
      answer:
        "OTC services typically support both small purchases and large crypto transactions depending on liquidity.",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          title1="Buy Bitcoin in Istanbul"
          title2="Secure BTC Purchase with USD, EUR or TRY"
          image="/images/turkey/bitcoin.png"
        />
      </div>

      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection
          title="Buy Bitcoin in Istanbul – Fast and Secure BTC Exchange"
          showTrustedExchange={true}
          para3="If you want to buy BTC in Istanbul quickly and securely, using a professional OTC crypto exchange offers one of the safest and most convenient solutions."
          para2="Bitcoin (BTC) is the first and most widely known cryptocurrency. Many investors consider Bitcoin a digital store of value and an important part of the global financial system."
          para1="Istanbul has become one of the most active financial centers in the region, connecting Europe and Asia and attracting traders, investors, and technology entrepreneurs. As cryptocurrency adoption continues to grow worldwide, more people are looking for reliable ways to buy Bitcoin in Istanbul safely and efficiently."
          showMapBelowText={false}
        />
      </div>

      <div className="container  mt-20! sm:mt-28!">
        <KeyBenefitsTurkey
          data={keyFeaturesData}
          title="Why Buy Bitcoin in Istanbul Through an OTC Crypto Exchange"
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="Bitcoin"
          shortForm="(BTC)"
          subTitle="Buying Bitcoin in Istanbul through an OTC crypto exchange is simple and secure."
          purpose="Buy"
          data={howToBuySteps}
          information="This process allows clients to convert Bitcoin to cash in Istanbul quickly with transparent pricing.."
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <CoinDetails
          image="/images/turkey/bitcoin-details-image.png"
          title="What is Bitcoin?"
          description="Bitcoin is a decentralized digital currency that operates on a blockchain network. Unlike traditional currencies issued by governments, Bitcoin is maintained by a global network of computers that verify transactions."
          textSecond="Many people choose to invest in Bitcoin because it offers:"
          benefits={CointBenefits}
          lastText="Because of these features, Bitcoin has become one of the most widely traded cryptocurrencies in the world."
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

      <div className="container text-center mt-3! sm:mt-28!">
        <FaqTurkey crypto="Bitcoin" shortForm="(BTC)" faqs={faqs} />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Bitcoin" shortForm="(BTC)" />
      </div>
    </>
  );
}
