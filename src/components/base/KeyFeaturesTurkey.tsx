import React from "react";
import {
  DollarSign,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function KeyBenefitsTurkey() {
  const t = useTranslations("turkeyPage.keyBenefits");

  const icons = [
    <DollarSign className="w-6 h-6 text-black" />,
    <Zap className="w-6 h-6 text-black" />,
    <TrendingUp className="w-6 h-6 text-black" />,
    <ShieldCheck className="w-6 h-6 text-black" />,
    <Users className="w-6 h-6 text-black" />,
    <CheckCircle2 className="w-6 h-6 text-black" />,
  ];

  const benefits = (t.raw("items") as any[]).map((item, index) => ({
    id: (index + 1).toString().padStart(2, "0"),
    title: item.title,
    description: item.desc,
    icon: icons[index] || icons[0],
  }));

  return (
    <div className=" mx-auto">
      <h2 className="text-lg md:text-4xl font-semibold text-white text-center md:mb-12 mb-4 ">
        {t("title")}
      </h2>

      <div className="text-left relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="relative overflow-hidden bg-[#161618] p-8 rounded-2xl min-h-[250px] flex flex-col justify-between"
          >
            <span className="absolute top-4 right-6 text-7xl font-bold text-white opacity-5 select-none pointer-events-none">
              {benefit.id}
            </span>

            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
              {benefit.icon}
            </div>

            <div className="bottom-0 left-0 absolute h-3 w-full bg-yellow-300"></div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
