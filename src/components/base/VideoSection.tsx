import * as React from "react";
import { clsx } from "clsx";

type VideoSectionProps = React.HTMLAttributes<HTMLDivElement>;

export function VideoSection({ className, ...props }: VideoSectionProps) {
  return (
    <div
      className={clsx(
        "bg-gradient-to-b from-black via-(--primary-grey) to-black w-full h-[110vh] max-h-[900px] relative text-center flex items-center justify-center",
        className ?? "",
      )}
      {...props}
    >
      <div className="w-full">
        <div className="absolute w-full h-full top-0 left-0">
          <div className="container relative w-full h-full">
            <div className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
            <div className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
            <div className="absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
          </div>
        </div>
        <div className="text-3xl font-semibold py-8 relative">
          You’re In Good Company
        </div>
        <div className="container h-full relative">
          <div className="relative bg-black rounded-3xl">
            <div className="absolute bottom-[-50px] right-[-90px] w-[153px] h-[148px] rotate-[-42deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2px] particle-move-4"></div>
            <iframe
              className="rounded-3xl  w-full h-[520px] border-[3px] border-white"
              src="https://www.youtube.com/embed/tISphaSVLDg?si=DGK_5mzo5-zkh3bf"
              title="Cryptocurrency To Fiat POS Machine System Made by Pallapay For The First Time in The World"
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-lg mt-5">
            Another Great Success For Pallapay and It's the Beginning
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
