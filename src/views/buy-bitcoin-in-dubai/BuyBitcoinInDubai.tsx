"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectTrigger,
//     SelectValue
// } from '@/components/ui/select';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
// import InteractiveGradientCard from '@/components/base/InteractiveGradientCard';
import { useTranslations } from "next-intl";

export function BuyBitcoinInDubai() {
  const t = useTranslations("buyBitcoinInDubai");
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <div className="absolute bg-[url(/images/cryptocurrency/waves.png)] bg-cover bg-center w-full h-full"></div>
        <div className="container py-14 relative">
          <div className="text-center">
            <div>
              <h1 className="text-3xl leading-[2.8rem] lg:text-4xl lg:leading-[3.7rem] font-semibold">
                {t("heroTitle")}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:flex justify-center gap-3 mt-10">
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button
                  size="xl"
                  className="bg-amber-400 hover:bg-amber-500 cursor-pointer"
                >
                  {t("buyOnline")}
                </Button>
              </a>
              <a
                href="https://maps.app.goo.gl/XF9ScJ3596UK4zmn6"
                target="_blank"
              >
                <Button
                  size="xl"
                  variant="outline"
                  className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer"
                >
                  {t("visitOffice")}
                </Button>
              </a>
            </div>

            <div className="text-amber-400 sm:flex sm:gap-5 sm:justify-center mt-10 w-full space-y-3 sm:space-y-0">
              <div className="flex gap-3 text-xl font-semibold underline mx-auto sm:mx-0 justify-center sm:justify-start">
                <div className="flex w-8 h-8 items-center justify-center rounded-full border border-amber-400">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <a href="tel:971588971652">058 897 1652</a>
              </div>
              <div className="text-xl font-semibold underline">
                <a href="tel:97144264781">044264781</a>
              </div>
              <div className="text-xl font-semibold underline">
                <a
                  className="flex gap-2 items-center justify-center sm:justify-start"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=971588971652"
                >
                  <div className="w-7 h-7 bg-[url(/images/icons/social/whatsapp-icon.svg)] bg-no-repeat bg-cover"></div>
                  {t("whatsapp")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black container mt-14">
        <p>
          {t("introPara")}
        </p>
        <h2 className="text-2xl font-semibold mt-5">
          {t("whyBuyTitle")}
        </h2>
        <p className="mt-2">
          {t("whyBuySubtitle")}
        </p>
        <ul className="list-disc pl-4 my-4">
          {(t.raw("whyBuyItems") as string[]).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full h-screen max-h-[900px] relative text-center flex items-center justify-center mt-14">
        <div className="w-full">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="container relative w-full h-full">
              <div className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
              <div className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
              <div className="absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
            </div>
          </div>
          <div className="container h-full relative">
            <div className="relative bg-black rounded-3xl">
              <div className="absolute bottom-[-50px] right-[-90px] w-[153px] h-[148px] rotate-[-42deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2px] particle-move-4"></div>
              <iframe
                className="rounded-3xl w-full h-[520px] border-[3px] border-white"
                src="https://www.youtube.com/embed/tISphaSVLDg?si=DGK_5mzo5-zkh3bf"
                title="Cryptocurrency To Fiat POS Machine System Made by Pallapay For The First Time in The World"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-14 text-black">
        <iframe
          title="Buy bitcoin dubai"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
          width="100%"
          height="350"
          className="border-0 mt-8"
        ></iframe>
      </div>

      <div className="container text-black">
        <h2 className="text-3xl font-semibold mt-10">
          {t("howToBuyTitle")}
        </h2>
        <p className="mt-4">
          {t("howToBuyPara1")}
        </p>
        <p className="py-1">
          {t("howToBuyPara2")}
        </p>
        <p className="py-1">
          {t("howToBuyPara3")}
        </p>
        <ol className="list-disc pl-4 mt-2">
          {t.raw("howToBuyList").map((item: string, index: number) => (
            <li key={index}>
              {item}
              {index === 2 && (
                <>
                  {" "}
                  <a
                    className="text-blue-600 underline"
                    href="https://www.pallapay.com"
                    title="Buy bitcoin in dubai"
                  >
                    Pallapay.com
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* <MainFooter className="!mt-24" /> */}
    </>
  );
}
