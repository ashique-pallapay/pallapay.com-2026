import Image from "next/image";
import React from "react";
import InteractiveGradientCard from "./InteractiveGradientCard";

const WhyChooseTurkey = () => {
  const features = [
    {
      title: "Bank-Level Security",
      description:
        "Your assets are protected with multi-layer security protocols and cold wallet storage.",
      image: "/images/turkey/bank-level-security.png",
    },
    {
      title: "Instant Transactions",
      description:
        "Your crypto trades complete in 30 seconds. TRY transfers appear instantly in your account.",
      image: "/images/turkey/instant-secure.png",
    },
    {
      title: "KYC & Compliance",
      description:
        "Full compliance with Turkish regulations, MASAK approved and secure trading environment.",
      image: "/images/turkey/kyc.png",
    },
    {
      title: "24/7 Live Support",
      description:
        "Our expert team is always by your side. Instant help via WhatsApp, phone and live chat.",
      image: "/images/turkey/24hr-support.png",
    },
    {
      title: "Low Commission",
      description:
        "Industry's lowest transaction fees, 0.1% trading commission, free TRY withdrawals.",
      image: "/images/turkey/low-commission.png",
    },
    {
      title: "Fast Approval Process",
      description:
        "Open account in 15 minutes, complete identity verification and start trading.",
      image: "/images/turkey/fast-approvel-process.png",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Why choose Pallapay?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <InteractiveGradientCard
              key={index}
              className="bg-[#0c0c0c] hover:bg-[#121212] transition-colors duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-6 h-24 flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTurkey;
