import React from "react";
import { Clock, ShieldCheck, Users } from "lucide-react"; // Using Lucide for the icons
import TitleBanner from "../ui/TitleBanner";
import Image from "next/image";

export default function CryptoRamp() {
  return (
    <div className="container flex items-center justify-center flex-col mt-16! ">
      <TitleBanner title="Crypto Off-ramp" />

      <div className="bg-linear-to-b from-black to-(--primary-grey)/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left Column */}
        <div className="space-y-5 lg:max-w-[400px] xl:max-w-[600px] w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Convert <span className="text-amber-400">crypto</span> to fiat
            instantly !
          </h1>

          <div className="space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
            <p>
              Need to turn your crypto into cash? Our Crypto Off-Ramp service
              allows you to quickly convert digital assets like
              <span className="text-amber-400 font-semibold"> USDT, BTC, </span>
              and <span className="text-amber-400 font-semibold">ETH</span> into
              traditional currencies such as
              <span className="text-amber-400 font-semibold">
                {" "}
                USD, AED, EUR,{" "}
              </span>
              or <span className="text-amber-400 font-semibold">TRY</span>.
            </p>

            <p>
              Enjoy fast settlement, competitive market rates, and secure
              processing through trusted liquidity providers. Whether you are an
              investor cashing out profits or a business accepting crypto
              payments, our platform makes crypto-to-fiat conversion simple and
              reliable.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Image */}
          <div className="relative h-44 sm:h-52 md:h-60 lg:h-64 bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/turkey/cryptoOffRamp-globe-icon.png"
              width={300}
              height={300}
              alt="crypto-off-ramp-globe"
              className=" w-full h-full "
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <StatBox
              icon={<Clock className="text-amber-400 w-4 h-4 sm:w-5 sm:h-5" />}
              label="<5min"
              sub="Settlement"
            />

            <StatBox
              icon={
                <ShieldCheck className="text-amber-400 w-4 h-4 sm:w-5 sm:h-5" />
              }
              label="100%"
              sub="Secure"
            />

            <StatBox
              icon={<Users className="text-amber-400 w-4 h-4 sm:w-5 sm:h-5" />}
              label="24/7"
              sub="Support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col items-start gap-2">
      {icon}
      <div>
        <div className="text-amber-400 font-bold text-sm">{label}</div>
        <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-medium">
          {sub}
        </div>
      </div>
    </div>
  );
}
