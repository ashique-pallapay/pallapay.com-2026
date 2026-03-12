import * as React from "react";
import { clsx } from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

type VideoSectionProps = React.HTMLAttributes<HTMLDivElement>;

export function AboutUsSection({ className, ...props }: VideoSectionProps) {
  const t = useTranslations();

  const mediaItems = [
    {
      logo: "/images/in-media/yahoo-finance.png",
      source: t("media.yahooFinance"),
      content: t("media.yahooContent"),
      link: "https://finance.yahoo.com/news/pallapay-establishes-itself-mega-company-050000714.html",
    },
    {
      logo: "/images/in-media/einpresswire.png",
      source: t("media.einPresswire"),
      content: t("media.einContent"),
      link: "https://www.einpresswire.com/article/575325873/with-pallapay-crypto-pos-machine-system-businesses-can-accept-crypto-and-get-fiat-in-their-bank-account-in-uae",
    },
  ];



  return (
    <div
      className={clsx(
        className,
        "bg-[url(/images/in-media/bg-image.png)] bg-contain bg-no-repeat bg-center sm:py-10",
      )}
      {...props}
    >
      <div className="container">
        <div className="text-3xl md:text-5xl font-semibold mt-28 text-center">
          {t("aboutUs.title")}
        </div>
        <div className="text-lg md:text-xl font-semibold mt-5 text-center">
          {t("aboutUs.subtitle")}
        </div>

        <div className="mt-10 relative">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {mediaItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" basis-full md:basis-1/2 md:mr-1"
                >
                  <div className="relative h-full ">
                    <div className="p-5 z-[2] relative">
                      <div className="flex gap-4 justify-between items-start w-full">
                        <img
                          alt={item.source}
                          src={item.logo}
                          className="h-10 sm:h-16"
                        />
                        <div className="md:w-12 md:h-12 w-8 h-8 bg-[url(/images/icons/quote.svg)] bg-contain bg-no-repeat"></div>
                      </div>
                      <div className="text-lg font-semibold mt-4">
                        {item.source}
                      </div>
                      <div className="mt-5 text-xs sm:text-sm sm:pr-22 pb-24 sm:pb-0 select-none">
                        {item.content}
                      </div>
                    </div>
                    <a target="_blank" href={item.link}>
                      <div className="bg-[#353C4590] hover:bg-[#353C45] p-5 rounded-2xl w-fit absolute right-0 bottom-0 z-[2]">
                        <ArrowUpRight size={56} strokeWidth={1.25} />
                      </div>
                    </a>
                    <div className="absolute w-full h-full top-0 left-0 corner-rounded-card backdrop-blur-[20px] rounded-2xl"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
