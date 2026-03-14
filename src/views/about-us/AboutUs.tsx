import * as React from "react";
import { Header } from "@/views/about-us/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { AutoSlider } from "@/components/base/AutoSlider";
import { VideoSection } from "@/components/base/VideoSection";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutUs() {
  // const trustedLogos = [
  //   {
  //     title: "Aliexpress",
  //     url: "/images/businesses/aliexpress.png",
  //     width: 130,
  //   },
  //   {
  //     title: "Salambooking",
  //     url: "/images/businesses/salambooking.png",
  //     width: 200,
  //   },
  //   {
  //     title: "Microcenter",
  //     url: "/images/businesses/microcenter.png",
  //     width: 80,
  //   },
  //   { title: "Graphy", url: "/images/businesses/graphy.png", width: 95 },
  //   { title: "Flybook", url: "/images/businesses/flybook.png", width: 120 },
  // ];

  const sliderItems: { image: string; title: string }[] = [
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-1.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-2.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-5.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-4.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-3.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-6.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-1.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
    {
      image: "/images/about/slider/pallapay-in-crypto-expo-dubai-2.jpeg",
      title: "Pallapay in Crypto Expo Dubai (CED)",
    },
  ];
  
  const t = useTranslations("aboutPage");
  return (
    <>
      <Header />
      <div className="container translate-y-[-200px] mb-[-200px] overflow-hidden rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 bg-(--primary-grey)/60 rounded-3xl px-7 sm:px-16 py-10 text-black">
          <div className="text-white row-start-2 lg:row-start-1 lg:col-span-7 flex justify-end items-center">
            <div>
              <h2 className="text-3xl font-semibold">{t("heroTitle")}</h2>
              <h3 className="text-base font-semibold">
                {t("heroSubtitle")}
              </h3>
              <div className="mt-5">
                {t("heroText1")}
                <br />
                {t("heroText2")}
                <br />
                {t("heroText3")}
                <br />
                {t("heroText4")}
                <br />
              </div>
            </div>
          </div>
          <div className="row-start-1 lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="absolute w-[250px] h-[250px] bg-white blur-[150px]"></div>
            <img
              src="/images/about/exchange.png"
              width="90%"
              className="relative sm:max-w-[55%] lg:max-w-none"
              alt="Exchange"
            />
          </div>
        </div>
      </div>
      <div className="container text-white mt-24">
        <div className="text-2xl font-semibold md:w-4/6 mx-auto text-center">
          {t("awardTitle")}
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[85%] md:w-[90%] lg:w-full mx-auto mt-10"
          >
            <CarouselContent>
              {sliderItems.map((item) => (
                <CarouselItem
                  key={item.title}
                  className="md:basis-1/2 lg:basis-1/4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl border-2 border-white/30"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white" />
            <CarouselNext className="bg-black text-white" />
          </Carousel>
        </div>
      </div>
      {/* <div className="container text-white mt-24">
        <div className="text-2xl font-semibold md:w-4/6 mx-auto text-center">
          We Honored To Be Trusted For Widest Companies :{" "}
        </div>
        <div>
          <Image src="/images/about/Busineses.png" alt="trusted-companies" width={300} height={300} />
        </div>
      </div> */}
      <div className="container text-white mt-26!">
        <div className="text-2xl font-semibold sm:w-4/6 mx-auto text-center">
          {t("trustedTitle")}
        </div>
        <div className="mt-10!">
          <Image
            src="/images/about/Busineses.svg"
            alt="trusted-companies"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        {/* <AutoSlider imageItems={trustedLogos} speed={1500} /> */}
      </div>
      <VideoSection className="mt-24 sm:mt-28 !h-full !max-h-full">
        <div className="space-y-4 pt-8 pb-24">
          {t("videoText1")}
          <br />
          {t("videoText2")}
          <br />
          {t("videoText3")}
          <br />
        </div>
      </VideoSection>
      <div className="container mt-20">
        <div className="text-3xl font-semibold text-black text-center">
          {t("officesTitle")}
        </div>
        <div className="bg-(--primary-grey) text-white rounded-3xl shadow-[0_0px_40px_rgba(0,0,0,0.15)] p-8 mt-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="md:col-span-2 font-semibold text-2xl">
            {t("hqTitle")}
          </div>
          <div className="flex gap-1">
            <div className="w-fit text-amber-400">
              <MapPin />
            </div>
            <div>
              <div className="font-semibold">{t("usa")}</div>
              <div className="mt-1">
                {t("usaReg")}
                <div className="mt-1 mb-3 text-sm">
                  {t("usaAddress1")}
                  <br />
                  {t("usaAddress2")}
                </div>
              </div>
              <div className="max-w-[140px] sm:max-w-[120px] pt-2">
                <img
                  src="/images/fincen-logo-img.png"
                  width={220}
                  alt="Fincen"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-fit text-amber-400">
              <MapPin />
            </div>
            <div>
              <div className="font-semibold">{t("canada")}</div>
              <div className="mt-1">
                {t("canadaReg")}
                <div className="mt-1 mb-3 text-sm">
                  <p>{t("canadaAddress1")}</p>
                  <p>{t("canadaAddress2")}</p>
                </div>
              </div>
              <div className="max-w-[270px] sm:max-w-[250px] pt-1.5">
                <img src="/images/fintrac-logo-img.png" alt="Fintrac" />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 font-semibold text-xl mb-4">
            <div className="mt-3 text-sm">
              {t("authDescription")}
            </div>
          </div>
          <div className="md:col-span-2 font-semibold text-2xl mt-5">
            {t("customerSupportTitle")}
          </div>
          <div className="flex gap-1">
            <div className="w-fit text-amber-400">
              <MapPin />
            </div>
            <div>
              <div className="font-semibold">{t("dubaiBranchName")}</div>
              <div className="mt-3 text-sm">{t("dubaiBranchReg")}</div>
              <div className="mt-1.5 text-sm">
                {t("dubaiBranchAddress")}
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-fit text-amber-400">
              <MapPin />
            </div>
            <div>
              <div className="font-semibold">{t("ltdName")}</div>
              <div className="mt-3 text-sm">{t("ltdReg")}</div>
              <div className="mt-1.5 text-sm">
                {t("ltdAddress")}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 font-semibold text-2xl mt-8">
            {t("branchTitle")}
          </div>
          <div className="flex gap-1">
            <div className="w-fit text-amber-400">
              <MapPin />
            </div>
            <div>
              <div className="font-semibold">{t("singaporeBranchName")}</div>
              <div className="mt-3 text-sm">{t("singaporeBranchReg")}</div>
              <div className="mt-1.5 text-sm">
                {t("singaporeBranchAddress")}
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-fit text-amber-400">
              <MapPin />
            </div>
            <div>
              <div className="font-semibold">{t("nyBranchName")}</div>
              <div className="mt-3 text-sm">
                {t("nyBranchAddress")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainFooter className="!mt-24" hasCreateAccountSection={true} /> */}
    </>
  );
}
