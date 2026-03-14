"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import WhyShouldBuyEthereumTurkey from "@/components/base/WhyEthereumTrustableExchange";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";
import { useTranslations } from "next-intl";
import BuyEthereumFastSecure from "@/components/base/BuyEthereumFastSecure";
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import CoinDetails from "@/components/base/CoinDetails";
import CryptoLivePrice from "@/components/base/cryptoLivePrices";
import Image from "next/image";
import StepIntoCrypto from "@/components/base/StepIntoCrypto";

export function SellEthereumInIstanbul() {
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
        "Most ETH transactions are completed within minutes after confirmation.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      id: "03",
      title: "Competitive crypto exchange rates",
      description:
        "Deep liquidity allows better pricing when selling Ethereum.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      id: "04",
      title: "Secure transactions",
      description:
        "Professional OTC exchanges provide verified and secure cryptocurrency transactions.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      id: "05",
      title: "Support for both small and large transactions",
      description:
        "OTC services can process both small and high-volume Ethereum sales.",
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
        "Confirm the current ETH exchange rate and the amount of Ethereum you want to sell.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Send your Ethereum ",
      description:
        "Transfer your ETH to the wallet address provided by the exchange.",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Receive cash in USD, EUR, or Turkish Lira instantly",
      description:
        "After the Ethereum transaction is confirmed on the blockchain, you will receive cash.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  const CointBenefits = [
    "A large global blockchain ecosystem",
    "Smart contract technology ",
    "Strong adoption by developers and companies",
    "Fast international crypto transfers",
  ];

  const t = useTranslations("turkeyPage.howToBuy");

  const faqs = [
    {
      value: "1",
      question: "Where can I sell Ethereum in Istanbul?",
      answer:
        "You can sell Ethereum in Istanbul through a trusted OTC crypto exchange that converts ETH into cash in USD, EUR, or Turkish Lira.",
    },
    {
      value: "2",
      question: "How long does it take to sell Ethereum in Istanbul?",
      answer:
        "Most Ethereum transactions are completed within minutes after the ETH transfer is confirmed.",
    },
    {
      value: "3",
      question:
        "What currencies can I receive when selling Ethereum in Istanbul? ",
      answer:
        "You can receive cash in US Dollars (USD), Euro (EUR), or Turkish Lira (TRY).",
    },
    {
      value: "4",
      question: "Is selling Ethereum in Istanbul safe?",
      answer:
        "Yes. When using a professional OTC crypto exchange, ETH transactions are secure and transparent.",
    },
    {
      value: "5",
      question: "Do I need a crypto wallet to sell Ethereum?",
      answer:
        "Yes. You must send your Ethereum from a compatible ETH wallet to the exchange wallet address.",
    },
    {
      value: "6",
      question: "Can tourists sell Ethereum in Istanbul?",
      answer:
        "Yes. Many international visitors and traders sell Ethereum in Istanbul through OTC crypto exchanges.",
    },
    {
      value: "7",
      question: "Is there a minimum or maximum amount to sell Ethereum?",
      answer:
        "OTC services usually support both small transactions and large Ethereum sales depending on available liquidity.",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          // crypto="Ethereum"
          purpose="Sell"
          title1="Sell Ethereum in Istanbul"
          title2="Exchange ETH for Cash USD, EUR or TRY"
          shortForm="(ETH)"
          image="/images/turkey/ethereum.png"
        />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <BuyEthereumFastSecure
          title="Sell Ethereum in Istanbul – Fast and Secure ETH to Cash Exchange"
          para1="If you want to sell Ethereum in Istanbul and receive cash instantly, using a professional OTC crypto exchange provides one of the fastest and safest solutions. Istanbul has become an important hub for cryptocurrency trading, attracting investors, traders, and international visitors who need reliable crypto-to-cash services."
          para2="Ethereum (ETH) is one of the largest and most widely used cryptocurrencies in the world. Many investors hold ETH for long-term investment, while others sell Ethereum to convert their digital assets into fiat currencies such as US Dollars, Euro, or Turkish Lira."
          para3="Our OTC crypto exchange service allows clients to sell Ethereum in Istanbul quickly and securely with transparent pricing and fast settlement."
        />
      </div>
      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection
          purpose="Sell"
          showMapBelowText={false}
          showTrustedExchange={false}
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey
          data={keyFeaturesData}
          title="Why Sell Ethereum Through an OTC Crypto Exchange"
        />
      </div>

      <div className="bg-linear-to-b from-black via-(--primary-grey) to-black text-center mt-20! sm:mt-28!">
        <WhyShouldBuyEthereumTurkey purpose="Sell" />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          crypto="Ethereum"
          shortForm="(ETH)"
          data={howToBuySteps}
          purpose="Sell"
          information="This process allows clients to convert Ethereum to cash in Istanbul quickly with transparent pricing."
          subTitle="Selling Ethereum in Istanbul through an OTC crypto exchange is simple and secure."
        />
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <CoinDetails
          image="/images/turkey/turkey-ethereum.png"
          title="What is Ethereum (ETH)?"
          description="Ethereum is a decentralized blockchain platform that allows developers to build smart contracts and decentralized applications. The network’s native cryptocurrency is ETH, which is widely used for payments, trading, and blockchain transactions."
          textSecond="Many investors use Ethereum because it offers:"
          benefits={CointBenefits}
          lastText="Because of these advantages, Ethereum has become one of the most widely traded digital assets in the world."
        />
      </div>

      <div className="container text-center text-white space-y-2 mt-20! sm:mt-28!">
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
        <FaqTurkey
          crypto="Ethereum"
          shortForm="(ETH)"
          purpose="Sell"
          faqs={faqs}
        />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Ethereum" shortForm="(ETH)" purpose="Sell" />
      </div>
    </>
  );
}
