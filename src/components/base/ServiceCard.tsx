import { Cpu, Globe, Code, Link as LinkIcon, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  bgImage?: string;
  isLarge?: boolean;
  href: string;
};

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  image,
  bgImage,
  isLarge,
  href,
}: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className={`relative rounded-2xl border border-white/10 hover:border-yellow-500/50
      transition-all overflow-hidden flex flex-col md:flex-row
      ${isLarge ? "md:col-span-3" : "md:col-span-2"}`}
    >
      {/* Full background */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none">
          <Image src={bgImage} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      )}

      {/* Floating mobile image */}
      {image && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 translate-y-1/6 h-64 md:hidden pointer-events-none">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover blur-[2px] opacity-90"
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
      )}

      {/* Card content */}
      <div
        className={`relative flex flex-col md:flex-row w-full ${
          !bgImage ? "bg-linear-to-b from-[#111] via-black to-[#3A3A3A]/60" : ""
        }`}
      >
        <div className="flex-1 flex flex-col justify-between p-5 lg:p-8 relative z-10">
          <div>
            <div className="bg-[#1a1a1a] w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-white/5">
              <Icon className="text-yellow-500 w-6 h-6" />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              {title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Styled like button, but div so link works correctly */}
          <div className="flex flex-col gap-1 items-end text-yellow-500 text-sm font-semibold cursor-pointer">
            <span className="mr-5">Explore More</span>
            <span className="ml-2 w-20 h-[2px] bg-gradient-to-r from-transparent to-yellow-500 relative transition-all">
              <span className="absolute right-0 -top-[3px] w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#eab308]" />
            </span>
          </div>
        </div>

        {/* Large desktop image */}
        {image && (
          <div className="-translate-x-1/6 translate-y-1/6 hidden lg:flex mx-2 w-1/3 items-end justify-center">
            <div className="h-[180px] md:h-[300px] flex items-end">
              <Image
                src={image}
                alt={title}
                width={300}
                height={220}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default function ServicesGrid() {
  return (
    <section className="container bg-black md:mt-16! md:mb-10!">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        <ServiceCard
          title="Crypto POS Machine"
          description="Accept cryptocurrency payments in your store using Pallapay crypto POS machine and receive settlements in fiat securely."
          icon={Cpu}
          image="/images/pos/POS.png"
          isLarge
          href="/crypto-pos-machine"
        />

        <ServiceCard
          title="Online Crypto Payment"
          description="Pallapay crypto payment gateway lets you accept crypto payments on your website easily."
          icon={Globe}
          image="/images/Pi7_cropper.png"
          isLarge
          href="/products/payment-link"
        />

        <ServiceCard
          title="API Integration"
          description="Accept crypto payments with our developer-friendly API compatible with any tech stack."
          icon={Code}
          bgImage="/images/shapes/gradient/Gradient-1.png"
          href="/products/payment-api"
        />

        <ServiceCard
          title="Payment Link"
          description="Accept crypto payments using payment links and receive fiat directly in your bank."
          icon={LinkIcon}
          bgImage="/images/shapes/gradient/Gradient-2.png"
          href="/products/payment-link"
        />

        <ServiceCard
          title="Fiat Settlement"
          description="Accept crypto and receive fiat directly in your bank account. Pallapay manages crypto for you."
          icon={Wallet}
          bgImage="/images/shapes/gradient/Gradient-3.png"
          href="/products/fiat-settlement"
        />
      </div>
    </section>
  );
}
