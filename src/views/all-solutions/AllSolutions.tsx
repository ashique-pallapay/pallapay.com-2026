"use client";

import * as React from "react";
import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import { Link } from "@/lib/inertia-shims";

export function AllSolutions() {
  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container pt-14 pb-20 sm:py-28">
        <div className="grid sm:grid-cols-10">
          <div className="relative sm:col-span-2">
            <div className="absolute bottom-8 w-full">
              <ParallaxProvider>
                <Parallax speed={14}>
                  <div className="absolute top-0 right-0 sm:right-auto sm:left-0 translate-x-[70%] translate-y-[100%] sm:translate-x-24 w-[115px] h-[115px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[14px]"></div>
                </Parallax>
                <Parallax rotate={[20, -20]} speed={-5}>
                  <div className="bg-[url(/images/star.png)] bg-no-repeat bg-contain w-[130px] h-[130px] absolute hidden sm:block"></div>
                </Parallax>
                <Parallax speed={10}>
                  <div className="bg-[url(/images/boxes.png)] bg-no-repeat bg-contain w-[195px] h-[180px] hidden sm:block" />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
          <div className="sm:col-span-6 relative z-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-[2rem] md:leading-[3rem] lg:leading-[4rem] font-semibold">
              Accept Accept Crypto Payments for Any Business with Pallapay
            </h1>
            <div className="text-lg md:text-xl mt-7">
              Pallapay provides fast, secure crypto payment solutions for
              businesses of all sizes. Accept cryptocurrency payments online or
              in-store with zero merchant fees on transactions and seamless
              integration.
            </div>
            <div className="flex gap-3 mt-7 justify-center">
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                  Create Account
                </Button>
              </a>
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative sm:col-span-2">
            <div className="absolute top-0 w-full sm:w-fit">
              <ParallaxProvider>
                <Parallax speed={-4}>
                  <div className="absolute -top-10 left-0 -translate-x-16 -translate-y-5 w-[100px] h-[100px] md:w-[180px] md:h-[180px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                </Parallax>
                <Parallax rotate={[20, -20]} speed={-5}>
                  <div className="bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat w-[40px] h-[40px] absolute right-0 top-0" />
                </Parallax>
                <Parallax speed={-2}>
                  <div className="bg-[url(/images/shapes/shape3.png)] bg-contain bg-no-repeat w-[110px] h-[110px] absolute right-5 hidden sm:block" />
                </Parallax>
                <Parallax speed={5}>
                  <div className="bg-[url(/images/shapes/golden_dice.png)] bg-contain bg-no-repeat w-[130px] h-[130px] translate-y-20 translate-x-10 hidden sm:block" />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181A20]">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="md:col-span-6 flex items-center row-start-2 md:row-start-1 pb-14 md:pb-0">
              <div className="sm:py-5">
                <h3 className="text-4xl md:text-5xl font-semibold">Gaming</h3>
                <div className="mt-8 text-xl">
                  Power your gaming platform with Pallapay. accept
                  cryptocurrency for in-game purchases, subscriptions, boost
                  player engagement, and expand your reach.
                </div>
                <div className="mt-7">
                  <Link href="/industries/gaming">
                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
            <div className="relative md:col-span-5 row-start-1 mb-6 pt-5 md:pt-0 sm:w-[75%] md:w-auto mx-auto md:mx-0">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax
                  rotate={[-10, 0]}
                  speed={-2}
                  className="relative -mt-10 sm:mt-0"
                >
                  <img alt="Gaming galaxy" src="/images/gaming/galaxy.png" />
                </Parallax>
                <Parallax
                  rotate={[25, -10]}
                  speed={6}
                  className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute"
                >
                  <img alt="Gaming" src="/images/gaming/main-photos.png" />
                </Parallax>
                <Parallax
                  rotate={[-20, 5]}
                  speed={10}
                  className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute"
                >
                  <img
                    alt="Gaming illustrations"
                    src="/images/gaming/shapes.png"
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="relative md:col-span-5 mb-6 pt-5 md:pt-0 sm:w-[75%] md:w-auto mx-auto md:mx-0">
            <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
            <ParallaxProvider>
              <Parallax
                rotate={[-20, 5]}
                speed={-2}
                className="top-0 left-0 absolute"
              >
                <img
                  alt="Casino chips illustration"
                  src="/images/casinos/hero/chips.png"
                />
              </Parallax>
              <Parallax
                rotate={[-20, 5]}
                speed={-3}
                className="top-0 left-0 absolute"
              >
                <img
                  alt="Gold dice illustration"
                  src="/images/casinos/hero/gold-dices.png"
                />
              </Parallax>
              <Parallax
                rotate={[-20, 5]}
                speed={3}
                className="top-4 sm:top-0 left-0 absolute"
              >
                <img
                  alt="777 Win illustration"
                  src="/images/casinos/hero/777.png"
                />
              </Parallax>
              <Parallax
                rotate={[25, -10]}
                speed={-2}
                className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute"
              >
                <img alt="Casino" src="/images/casinos/hero/main2.png" />
              </Parallax>
              <Parallax
                rotate={[-10, 0]}
                speed={-2}
                className="relative -mt-10 sm:mt-0"
              >
                <img
                  alt="Casino illustration"
                  src="/images/casinos/hero/main1.png"
                />
              </Parallax>
            </ParallaxProvider>
          </div>
          <div className="hidden md:block"></div>
          <div className="col-span-6 flex items-center pb-14 md:pb-0">
            <div className="sm:py-5">
              <h3 className="text-4xl md:text-5xl font-semibold">Casinos</h3>
              <div className="mt-8 text-xl">
                Accept crypto payments at your casino with Pallapay. whether
                online or in-person, offer secure deposits and withdrawals with
                ease.
              </div>
              <div className="mt-7">
                <Link href="/industries/casinos">
                  <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181A20]">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="md:col-span-6 flex items-center row-start-2 md:row-start-1 pb-14 md:pb-0">
              <div className="sm:py-5">
                <h3 className="text-4xl md:text-5xl font-semibold">Hotels</h3>
                <div className="mt-8 text-xl">
                  Enhance your hotel experience with Pallapay. accept
                  cryptocurrency for reservations, check-ins, dining, and more.
                  Offer guests fast, secure, and flexible crypto payment options
                  that set your property apart.
                </div>
                <div className="mt-7">
                  <Link href="/industries/hotels">
                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
            <div className="relative md:col-span-5 row-start-1 mb-6 pt-5 md:pt-0 sm:w-[75%] md:w-auto mx-auto md:mx-0">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax
                  speed={4}
                  className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute"
                >
                  <img
                    alt="Hotel sign"
                    src="/images/hotels/hero/hotel-board.png"
                  />
                </Parallax>
                <Parallax speed={-1} className="relative -mt-10 sm:mt-0">
                  <img
                    alt="Hotel illustration"
                    src="/images/hotels/hero/bed.png"
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="relative md:col-span-5 mb-6 pt-5 md:pt-0 sm:w-[75%] md:w-auto mx-auto md:mx-0">
            <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
            <ParallaxProvider>
              <Parallax
                rotate={[10, -10]}
                speed={4}
                className="relative -mt-10 sm:mt-0 sm:-translate-y-14"
              >
                <img
                  alt="Money illustration"
                  src="/images/trading-platforms/hero/money.png"
                />
              </Parallax>
              <Parallax speed={-2} className="-top-10 left-0 absolute">
                <img
                  alt="Trading platform"
                  src="/images/trading-platforms/hero/main1.png"
                />
              </Parallax>
              <Parallax
                speed={4}
                className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute"
              >
                <img
                  alt="Phone"
                  src="/images/trading-platforms/hero/phone.png"
                />
              </Parallax>
            </ParallaxProvider>
          </div>
          <div className="hidden md:block"></div>
          <div className="col-span-6 flex items-center pb-14 md:pb-0">
            <div className="sm:py-5">
              <h3 className="text-4xl md:text-5xl font-semibold">
                Trading Platforms
              </h3>
              <div className="mt-8 text-xl">
                Power your trading platform with Pallapay. accept cryptocurrency
                payments and deposits instantly, securely, and without
                complications. Give your users the speed and confidence they
                need to trade without limits.
              </div>
              <div className="mt-7">
                <Link href="/industries/trading-platforms">
                  <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181A20]">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="md:col-span-6 flex items-center row-start-2 md:row-start-1 pb-14 md:pb-0">
              <div className="sm:py-5">
                <h3 className="text-4xl md:text-5xl font-semibold">
                  E-commerce
                </h3>
                <div className="mt-8 text-xl">
                  Power your online store with Pallapay. accept crypto payments
                  easily by integrating our API and offer your customers a
                  seamless, secure, and modern checkout experience.
                </div>
                <div className="mt-7">
                  <Link href="/industries/ecommerce">
                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
            <div className="relative md:col-span-5 row-start-1 mb-6 pt-5 md:pt-0 sm:w-[75%] md:w-auto mx-auto md:mx-0">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax rotate={[-20, 5]} speed={-5} className="relative">
                  <img
                    alt="Lightning fast"
                    src="/images/ecommerce/hero/bolt.png"
                  />
                </Parallax>
                <Parallax
                  rotate={[-10, 10]}
                  speed={2}
                  className="-top-6 left-0 absolute"
                >
                  <img
                    alt="Gift illustration"
                    src="/images/ecommerce/hero/gift.png"
                  />
                </Parallax>
                <Parallax speed={-1} className="top-4 sm:top-0 left-0 absolute">
                  <img alt="Ecommerce" src="/images/ecommerce/hero/main1.png" />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="relative md:col-span-5 mb-6 pt-5 md:pt-0 sm:w-[75%] md:w-auto mx-auto md:mx-0">
            <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
            <ParallaxProvider>
              <Parallax
                rotate={[-20, 20]}
                speed={3}
                className="-top-6 left-0 absolute"
              >
                <img
                  alt="Star background"
                  src="/images/retail-sector/hero/star1.png"
                />
              </Parallax>
              <Parallax
                rotate={[-20, 20]}
                speed={-4}
                className="-top-6 left-0 absolute"
              >
                <img
                  alt="Star background"
                  src="/images/retail-sector/hero/star2.png"
                />
              </Parallax>
              <Parallax
                rotate={[-10, 10]}
                speed={-3}
                className="-top-6 left-0 absolute"
              >
                <img
                  alt="Star background"
                  src="/images/retail-sector/hero/star3.png"
                />
              </Parallax>
              <Parallax speed={-3} className="top-0 left-0 absolute">
                <img
                  alt="Box background"
                  src="/images/retail-sector/hero/box.png"
                />
              </Parallax>
              <Parallax speed={5} className="relative">
                <img
                  alt="Retail store"
                  src="/images/retail-sector/hero/main1.png"
                />
              </Parallax>
            </ParallaxProvider>
          </div>
          <div className="hidden md:block"></div>
          <div className="col-span-6 flex items-center pb-14 md:pb-0">
            <div className="sm:py-5">
              <h3 className="text-4xl md:text-5xl font-semibold">
                Retail Sector
              </h3>
              <div className="mt-8 text-xl">
                Bring crypto to your retail store with Pallapay. accept
                cryptocurrency at your point of sale with secure, real-time
                transactions.
              </div>
              <div className="mt-7">
                <Link href="/industries/retail-store">
                  <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUsSection className="!pt-0 sm:!pt-0 -mt-4" />
      <MainFooter
        className="!mt-8 sm:!mt-24"
        hasCreateAccountSection={true}
        createAccountSectionType="SOLID"
      />
    </div>
  );
}
