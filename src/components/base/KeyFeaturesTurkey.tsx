import React from "react";
import {
  DollarSign,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    id: "01",
    title: "Sell USDT for USD cash or Turkish Lira",
    description: "Flexible payment options to suit your needs",
    icon: <DollarSign className="w-6 h-6 text-black" />,
  },
  {
    id: "02",
    title: "Instant settlement in Istanbul",
    description: "Get your cash immediately with no delays",
    icon: <Zap className="w-6 h-6 text-black" />,
  },
  {
    id: "03",
    title: "Competitive OTC exchange rates",
    description: "Best rates in the market for your trades",
    icon: <TrendingUp className="w-6 h-6 text-black" />,
  },
  {
    id: "04",
    title: "Safe and discreet crypto-to-cash transactions",
    description: "Your privacy and security are our priority",
    icon: <ShieldCheck className="w-6 h-6 text-black" />,
  },
  {
    id: "05",
    title: "Support for both retail and high-volume trades",
    description: "Perfect for individuals and businesses alike",
    icon: <Users className="w-6 h-6 text-black" />,
  },
  {
    id: "06",
    title: "No hidden fees or commissions",
    description: "Transparent pricing with what you see is what you get",
    icon: <CheckCircle2 className="w-6 h-6 text-black" />,
  },
];

export default function KeyBenefitsTurkey() {
  return (
    <div className=" mx-auto">
      <h2 className="text-lg md:text-4xl font-semibold text-white text-center md:mb-12 mb-4 ">
        Key Benefits
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
