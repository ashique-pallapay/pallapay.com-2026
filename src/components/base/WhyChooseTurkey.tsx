import Image from "next/image";
import React from "react";
import InteractiveGradientCard from "./InteractiveGradientCard";
import { useTranslations } from "next-intl";

const WhyChooseTurkey = () => {
  const t = useTranslations("turkeyPage.whyChoose");

  const images = [
    "/images/turkey/bank-level-security.png",
    "/images/turkey/instant-secure.png",
    "/images/turkey/kyc.png",
    "/images/turkey/24hr-support.png",
    "/images/turkey/low-commission.png",
    "/images/turkey/fast-approvel-process.png",
  ];

  const features = (t.raw("items") as any[]).map((item, index) => ({
    title: item.title,
    description: item.desc,
    image: images[index] || images[0],
  }));

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t("title")}
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
