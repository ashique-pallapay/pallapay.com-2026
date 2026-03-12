"use client";

import * as React from "react";
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import {
  ArrowRight,
  Check,
  Cpu,
  MemoryStick,
  QrCode,
  ReceiptText,
  Ruler,
  Signal,
  SmartphoneNfc,
  Wifi,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { Link } from '@/lib/inertia-shims';
import Image from "next/image";
import Link from "next/link";

export function PosMachine() {
  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="relative">
        <div>
          <ParallaxProvider>
            <Parallax speed={-20} className="absolute w-full h-full">
              <div className="absolute w-full h-full top-0 left-0 bg-[url(/images/pos-machine/wave2.png)] bg-top bg-cover blur-sm mt-8 2xl:mt-5"></div>
            </Parallax>
            <Parallax speed={25} className="absolute w-full h-full">
              <div className="absolute w-full h-full top-0 left-0 bg-[url(/images/pos-machine/wave1.png)] bg-top bg-cover blur-md mt-8 2xl:mt-5"></div>
            </Parallax>
          </ParallaxProvider>
        </div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 pt-8 md:pt-28 relative row-start-2 md:row-start-1">
              <div className="relative z-2">
                <h1 className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                  Pallapay Crypto POS Machine
                </h1>
                <div className="mt-4! text-lg md:text-xl">
                  Accept cryptocurrency payments in your store using pallapay
                  crypto pos machine and receive settlements in fiat, seamlessly
                  and securely.
                </div>
                <div className="mt-5!">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer flex gap-1 items-center">
                      Get Started
                      <ArrowRight />
                    </Button>
                  </a>
                </div>
                <div className="mt-12! lg:mt-24! lg:text-xl space-y-2.5">
                  <div className="flex gap-4 items-center">
                    <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                      <Check size={20} strokeWidth={2.8} />
                    </div>
                    <div>Pre-conﬁgured POS Machine</div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                      <Check size={20} strokeWidth={2.8} />
                    </div>
                    <div>Contactless Payments</div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                      <Check size={20} strokeWidth={2.8} />
                    </div>
                    <div>Built-in Receipt Printer</div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                      <Check size={20} strokeWidth={2.8} />
                    </div>
                    <div>Pre-installed and User-friendly App</div>
                  </div>
                </div>
              </div>
              <div className="absolute">
                <ParallaxProvider>
                  <Parallax rotate={[10, -20]} speed={15}>
                    <div className="absolute top-0 left-0 translate-x-[-75%] translate-y-[-100%] w-[120px] h-[105px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="md:col-span-8 relative pt-10 row-start-1 w-[120%] translate-x-[-10%] sm:w-full sm:translate-x-0">
              <ParallaxProvider>
                <Parallax
                  rotate={[20, -10]}
                  speed={4}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <div className="float-right w-[120px] h-[105px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                </Parallax>
                <Parallax
                  translateX={[10, -10]}
                  scale={[1.2, 0.8]}
                  rotate={[10, -10]}
                  speed={4}
                  className="absolute top-5 left-0"
                >
                  <Image
                    alt="Crypto POS Device Back"
                    src="/images/pos-machine/main2.png"
                    width={600}
                    height={700}
                  />
                </Parallax>
                <Parallax
                  translateX={[-10, 10]}
                  scale={[0.8, 1.2]}
                  rotate={[-10, 10]}
                  speed={4}
                  className="relative"
                >
                  <Image
                    alt="Crypto POS Device Front"
                    src="/images/pos-machine/main1.png"
                    width={600}
                    height={700}
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20! sm:mt-32!">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 text-lg lg:text-2xl flex items-center pt-10 row-start-2 md:row-start-1">
            Pallapay Crypto POS Machine is a powerful solution for physical,
            in-person transactions, enabling retail businesses to accept
            cryptocurrency payments with ease. Customers can pay using popular
            cryptocurrencies such as USDT, USDC, and Ethereum, while merchants
            receive settlements in fiat currencies like AED or USD, ensuring
            fast, secure, and convenient crypto payment processing at the point
            of sale.
          </div>
          <div className="md:col-span-7 px-5 md:pr-0 md:pl-12 row-start-1">
            <Image
              alt="Crypto POS in use"
              src="/images/pos-machine/pos-hand.png"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <h3 className="text-3xl font-semibold">Supported Cryptocurrencies</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 md:gap-0 md:grid-cols-none md:flex md:justify-between mt-10">
          <div>
            <Image
              alt="TRX"
              src="/images/coins/tron.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2! mx-auto">TRX</div>
          </div>
          <div>
            <Image
              alt="PALLA"
              src="/images/coins/palla.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">PALLA</div>
          </div>
          <div>
            <Image
              alt="USDT"
              src="/images/coins/tether.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">USDT</div>
          </div>
          <div>
            <Image
              alt="BNB"
              src="/images/coins/bnb.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">BNB</div>
          </div>
          <div>
            <Image
              alt="ETH"
              src="/images/coins/ethereum.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">ETH</div>
          </div>
          <div>
            <Image
              alt="DAI"
              src="/images/coins/dai.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">DAI</div>
          </div>
          <div>
            <Image
              alt="USDC"
              src="/images/coins/usdc.png"
              width={80}
              height={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">USDC</div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:hidden text-lg mt-2! w-full h-full pb-7 text-left">
            <div className="h-full content-center font-semibold">
              And More ...
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20! sm:mt-28!">
        <div className="grid col-span-1 lg:grid-cols-12 gap-7 md:w-[70%] lg:w-full mx-auto">
          <div className="lg:col-span-6 h-full">
            <div className="bg-[#292B31] rounded-2xl sm:flex h-full overflow-hidden">
              <div className="w-full px-5 py-5 sm:pr-0 sm:pl-9 sm:py-8">
                <h2 className="text-xl font-semibold text-amber-400">
                  Crypto POS Device
                </h2>
                <div className="mt-3">
                  Ready-to-use POS terminal featuring a pre-installed Pallapay
                  App, built-in receipt printer, 2D scanner, and support for
                  contactless crypto payments.
                </div>
                <div className="mt-5">
                  <TooltipProvider>
                    <div className="flex gap-4">
                      <Tooltip>
                        <TooltipTrigger>
                          <ReceiptText size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">
                            Built-in 58mm thermal printer
                          </h6>
                          <p>Print speed: 70mm/s</p>
                          <p>Paper roll: 40mm</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <QrCode size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">Scanner</h6>
                          <p>2D barcode scan engine</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Wifi size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">Wi-Fi</h6>
                          <p>2.4GHz/5GHz</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Signal size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">Network</h6>
                          <p>2G & 3G & 4G</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Tooltip>
                        <TooltipTrigger>
                          <Cpu size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">CPU</h6>
                          <p>Corte-A53</p>
                          <p>quad-core 1.4GHz</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <MemoryStick size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">Memory</h6>
                          <p>2GB RAM+16GB ROM</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <SmartphoneNfc size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm max-w-[300px]">
                          <h6 className="font-semibold mb-1">
                            NFC Card Reader
                          </h6>
                          <p>Supports Type A&B card, Mifare card</p>
                          <p>
                            Felica card; ISO/ICE 14443 and ISO15693 compliant
                          </p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Ruler size={28} strokeWidth={1.5} />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm">
                          <h6 className="font-semibold mb-1">
                            Physical Dimensions
                          </h6>
                          <p>Screen: 5.99"HD+，1440*720</p>
                          <p>Dimensions: 215.2*83*17mm</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>
                <div className="mt-6">
                  <Link href="/contact-us">
                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer flex gap-1 items-center">
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-end h-full">
                  <img
                    alt="POS Device side"
                    src="/images/pos-machine/pos-side.png"
                    className="w-[85%] max-w-[70%] sm:max-w-[85%] rounded-br-2xl translate-y-10 sm:translate-y-0 -mt-10 sm:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 overflow-hidden rounded-2xl">
            <div className="bg-[#292B31] rounded-2xl h-full relative">
              <div className="w-full pt-6 px-5 sm:px-9">
                <h2 className="text-xl font-semibold text-amber-400">
                  Dashboard
                </h2>
                <div className="mt-3">
                  A user-friendly application that lets you manage transactions
                  and balances in real time, making it simple and secure to
                  accept cryptocurrency in your store, with zero risk of fraud.
                </div>
              </div>
              <div className="pt-5 lg:absolute bottom-0 sm:pl-9">
                <img
                  alt="Pallapay user dashboard"
                  src="/images/pos-machine/dashboard-screen.png"
                  className="w-full min-w-[180%] sm:min-w-full sm:rounded-tl-2xl rounded-br-2xl rounded-bl-2xl sm:rounded-bl-none"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#292B31] rounded-2xl h-full relative overflow-hidden">
              <div className="w-full pt-6 px-5 sm:px-9">
                <h2 className="text-xl font-semibold text-amber-400">
                  Multiple Crypto Support
                </h2>
                <div className="mt-3">
                  Empower your clients to pay with a wide range of
                  cryptocurrencies, including UDST, Ethereum, USDC, and more.
                </div>
              </div>
              <div className="pt-5 bottom-0 pl-5 sm:px-9">
                <img
                  alt="Multiple cryptocurrencies to select"
                  src="/images/pos-machine/select-crypto.png"
                  className="w-full min-w-[120%] sm:min-w-0"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 overflow-hidden rounded-2xl">
            <div className="bg-[#292B31] rounded-2xl h-full relative">
              <div className="w-full pt-6 px-5 sm:px-9">
                <h2 className="text-xl font-semibold text-amber-400">
                  Fiat Settlement
                </h2>
                <div className="mt-3">
                  With Pallapay, you don’t need to handle cryptocurrency
                  directly, we manage the process for you. Accept crypto
                  payments and receive secure fiat settlements in AED, USD, and
                  more.
                </div>
              </div>
              <div className="pt-5 lg:absolute bottom-0 sm:px-9">
                <img
                  alt="Fiat settlement section in user dashboard"
                  src="/images/pos-machine/fiat-settlement.png"
                  className="w-full min-w-[180%] translate-x-[-15%] sm:translate-x-0 sm:min-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-32!">
        <div className="bg-gradient-to-r from-[#010101] via-50% via-[#181A20] to-[#353C45] py-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 text-center">
            <div className="md:col-span-5 md:col-start-2 row-start-2 md:row-start-1 flex items-center px-5! md:px-0!">
              <div className="relative">
                <h3 className="text-3xl font-semibold text-amber-400">
                  Instant Settlements
                </h3>
                <div className="mt-5 text-lg">
                  We guarantee that when you sell an item and accept
                  cryptocurrency with Pallapay, you’ll receive the full fiat
                  amount instantly.
                </div>
                <div className="absolute w-full">
                  <ParallaxProvider>
                    <Parallax rotate={[10, -25]} speed={3}>
                      <div className="absolute top-0 left-0 translate-x-[-60%] translate-y-[20%] w-[90px] h-[80px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px]"></div>
                    </Parallax>
                    <Parallax rotate={[20, -10]} speed={5}>
                      <div className="w-[25px] h-[25px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute -left-10 -bottom-8"></div>
                    </Parallax>
                  </ParallaxProvider>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-8 row-start-1 relative">
              <div className="absolute w-full">
                <ParallaxProvider>
                  <Parallax rotate={[10, -20]} speed={-6}>
                    <div className="absolute top-0 right-0 translate-x-[60%] translate-y-[-60%] w-[95px] h-[95px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px]"></div>
                  </Parallax>
                  <Parallax rotate={[10, -10]} speed={-5}>
                    <div className="bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain w-[35px] h-[35px] absolute top-0 right-0 -translate-y-2 -translate-x-7"></div>
                  </Parallax>
                  <Parallax rotate={[10, -40]} speed={5}>
                    <div className="bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain w-[25px] h-[25px]"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
              <img
                alt="Instant payment"
                src="/images/pos-machine/instant-payment.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full h-screen max-h-[900px] relative text-center flex items-center justify-center mt-24 sm:mt-32">
        <div className="w-full">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="container relative w-full h-full">
              <div className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
              <div className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
            </div>
          </div>
          <div className="text-3xl font-semibold py-8 relative">
            How Pallapay Crypto POS Machine Works
          </div>
          <div className="container h-full relative">
            <div className="relative bg-black rounded-3xl">
              <div className="absolute bottom-[-50px] right-[-90px] w-[153px] h-[148px] rotate-[-42deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2px] particle-move-4"></div>
              <iframe
                className="rounded-3xl w-full h-[520px] border-[3px] border-white"
                src="https://www.youtube.com/embed/HBsbSb-frlA?si=C_JKAkZmrYDNRvut"
                title="Cryptocurrency To Fiat POS Machine System Made by Pallapay For The First Time in The World"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <AboutUsSection className="!pt-0 sm:!pt-0 -mt-4" />

      <div className="container">
        <div className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full relative text-center flex items-center justify-center mt-20 sm:mt-32 py-10 rounded-2xl border-2 border-amber-400">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-14">
            <div className="md:col-span-4 md:col-start-2 w-1/2 md:w-full mx-auto">
              <img
                alt="POS Device Ordering"
                src="/images/pos-machine/pos-circle.png"
              />
            </div>
            <div className="md:col-span-6 flex items-center px-5 md:px-0">
              <div>
                <div className="text-3xl">
                  Order Your Pallapay Crypto POS Machine
                </div>
                <div className="mt-7">
                  Start accepting cryptocurrency payments with Pallapay crypto
                  POS machine at your store effortlessly. No crypto knowledge
                  needed—just enter the invoice amount in AED or USD, let your
                  customer pay with popular cryptocurrencies like USDT,
                  Ethereum, or USDC, and receive your fiat directly in your
                  account.
                </div>
                <div className="mt-7 flex justify-center">
                  <Link href="/contact-us">
                    <Button
                      size="xl"
                      className="bg-amber-400 hover:bg-amber-500 cursor-pointer flex gap-1 items-center !px-7"
                    >
                      Talk to Sales
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MainFooter className="!mt-8 sm:!mt-24" createAccountSectionType="SOLID" /> */}
    </div>
  );
}
