"use client";

import * as React from "react";
import Image from "next/image";
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from "@/components/base/MainNav";
import { ArrowRightLeft, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SellBnbInDubai() {
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <div className="absolute bg-[url(/images/cryptocurrency/waves.png)] bg-cover bg-center w-full h-full"></div>
        <div className="container py-14 relative">
          <div className="grid grid-cols-12">
            <div className="col-span-4 relative hidden md:block">
              <div className="absolute w-[300px] h-[170px] bg-black/70 blur-[40px] rounded-[150%] -bottom-4 left-0"></div>
              <Image
                alt="sell bitcoin in dubai"
                className="relative"
                src="/images/cryptocurrency/globe.png"
                width={300}
                height={170}
              />
            </div>
            <div className="col-span-12 md:col-span-7 text-center md:pl-10">
              <div>
                <h1 className="text-3xl leading-[2.8rem] lg:text-4xl lg:leading-[3.7rem] font-semibold">
                  Sell BNB (Binance) in Dubai
                  <br /> Get Cash or Bank Transfer
                </h1>
              </div>

              <div className="grid grid-cols-1 lg:flex justify-center gap-3 mt-10">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button
                    size="xl"
                    className="bg-amber-400 hover:bg-amber-500 cursor-pointer"
                  >
                    Buy online now
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
                    Visit our office
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
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-14!">
        <h2 className="text-3xl font-semibold text-black text-center">
          Calculate BNB to Cash
        </h2>
        <div className="bg-white rounded-3xl p-6 shadow-[0_0px_40px_rgba(0,0,0,0.2)] flex gap-10 mt-6">
          <Image
            src="/images/cryptocurrency/calculator.png"
            width={140}
            height={140}
            className="hidden lg:block"
            alt="Calculator"
          />
          <div className="text-black grid lg:grid-cols-7 w-full px-2 lg:pl-0 lg:pr-5">
            <div className="lg:col-span-3 flex gap-3 items-center justify-center">
              <div className="grid w-full items-center gap-1.5">
                <Label className="font-semibold text-base" htmlFor="email">
                  You Spend
                </Label>
                <Input
                  value="0.00"
                  className="h-12"
                  type="email"
                  id="email"
                  placeholder="Enter amount"
                />
              </div>
              <Select defaultValue="BTC">
                <SelectTrigger className="w-[220px] h-12 mt-7 bg-amber-400 border-none">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="BTC">
                      <Image
                        src="/images/coins/ethereum.png"
                        width={25}
                        height={25}
                        alt="BTC"
                      />
                      BTC
                    </SelectItem>
                    <SelectItem value="ETH">
                      <Image
                        src="/images/coins/ethereum.png"
                        width={25}
                        height={25}
                        alt="ETH"
                      />
                      ETH
                    </SelectItem>
                    <SelectItem value="USDC">
                      <Image
                        src="/images/coins/usdc.png"
                        width={25}
                        height={25}
                        alt="USDC"
                      />
                      USDC
                    </SelectItem>
                    <SelectItem value="USDT">
                      <Image
                        src="/images/coins/tether.png"
                        width={25}
                        height={25}
                        alt="USDT"
                      />
                      USDT
                    </SelectItem>
                    <SelectItem value="TRX">
                      <Image
                        src="/images/coins/tron.png"
                        width={25}
                        height={25}
                        alt="TRX"
                      />
                      TRX
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-center mt-7 rotate-90 lg:rotate-0">
              <ArrowRightLeft size={35} strokeWidth={1.5} />
            </div>
            <div className="lg:col-span-3 gap-3 flex items-center justify-center">
              <div className="grid w-full items-center gap-1.5">
                <Label className="font-semibold text-base" htmlFor="email">
                  You Receive
                </Label>
                <Input
                  value="0.00"
                  className="h-12"
                  type="email"
                  id="email"
                  placeholder="Enter amount"
                />
              </div>
              <Select defaultValue="BTC">
                <SelectTrigger className="w-[220px] h-12 mt-7 bg-amber-400 border-none">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="BTC">AED</SelectItem>
                    <SelectItem value="ETH">USD</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20 text-black">
        <iframe
          title="Buy bitcoin dubai"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
          width="100%"
          height="350"
          className="border-0 mt-8"
        ></iframe>

        <h4 className="text-2xl font-semibold text-center mt-10">
          How to sell BNB (Binance Coin) and Receive Cash in Dubai UAE?
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center mt-6">
          <div>
            <Image
              src="/images/crypto-pg/compare.png"
              alt="Buy bitcoin in dubai"
              className="w-[110px] mx-auto"
              width={110}
              height={110}
            />
            <h5 className="card-title mt-3 font-semibold mb-2">
              1. Visit Our Branch in Dubai
            </h5>
            <p className="card-text">
              Calculate the best exchange rate for your BNB.
            </p>
          </div>
          <div>
            <Image
              src="/images/crypto-pg/convert.png"
              alt="Buy bitcoin in dubai"
              className="w-[110px] mx-auto"
              width={110}
              height={110}
            />
            <h5 className="card-title mt-3 font-semibold mb-2">
              2. Transfer BNB
            </h5>
            <p className="card-text">
              Transfer your BNB using our automated system.
            </p>
          </div>
          <div>
            <Image
              src="/images/crypto-pg/track.png"
              alt="Buy bitcoin in dubai"
              className="w-[110px] mx-auto"
              width={110}
              height={110}
            />
            <h5 className="card-title mt-3 font-semibold mb-2">3. Get Cash</h5>
            <p className="card-text">Get your payment via the chosen method.</p>
          </div>
        </div>

        <iframe
          src="https://www.trustedsite.com/widget/tm-1001/?host=pallapay.com&amp;lang=en"
          title="TrustedSite Certified"
          className="border-0 w-[60%] h-[60%] mx-auto mt-14"
          width="60%"
          height="60%"
        ></iframe>
      </div>

      <div className="container text-black text-center">
        <div>
          <h2 className="text-3xl font-semibold">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
              <div className="bg-[url(/images/benefits/laptop-coins.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
              <h5 className="text-xl font-semibold mt-9">
                We guarantee the best rate
              </h5>
              <p className="mt-2">
                we price match all local dealer competitors (including their
                online prices).
              </p>
            </InteractiveGradientCard>
            <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
              <div className="bg-[url(/images/benefits/wallet.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
              <h5 className="text-xl font-semibold mt-9">
                Get your funds instantly
              </h5>
              <p className="mt-2">
                Payouts occur immediately after we receive your BNB
              </p>
            </InteractiveGradientCard>
            <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
              <div className="bg-[url(/images/benefits/money-percentage.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
              <h5 className="text-xl font-semibold mt-9">
                Competitive fee structure
              </h5>
              <p className="mt-2">
                Check the fees you are expected to pay before a transaction
              </p>
            </InteractiveGradientCard>
            <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
              <div className="bg-[url(/images/benefits/earth.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
              <h5 className="text-xl font-semibold mt-9">Global support</h5>
              <p className="mt-2">
                Sell BNB from nearly any country in the world
              </p>
            </InteractiveGradientCard>
            <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
              <div className="bg-[url(/images/benefits/list.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
              <h5 className="text-xl font-semibold mt-9">$100,000 Insurance</h5>
              <p className="mt-2">
                Secure Checkout with coverage up to $100,000 Identity
                Protection.
              </p>
            </InteractiveGradientCard>
            <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
              <div className="bg-[url(/images/benefits/heaset.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
              <h5 className="text-xl font-semibold mt-9">Continuous support</h5>
              <p className="mt-2">
                Our support team stands ready to help you out
              </p>
            </InteractiveGradientCard>
          </div>
        </div>
      </div>

      <div className="bg-black mt-18">
        <div className="container py-10">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-center row-start-2 md:row-start-1">
              <div>
                <h3 className="text-2xl font-semibold">
                  What Is Binance Coin (BNB)?
                </h3>
                <div className="desc-wiu mt-2">
                  <p>
                    Binance Coin is the cryptocurrency issued by Binance
                    exchange and trades with the BNB symbol. As of June 2021,
                    Binance Exchange is the largest cryptocurrency exchange in
                    the world, supporting more than 1.4 million transactions per
                    second.
                  </p>
                </div>
                <ParallaxProvider>
                  <Parallax rotate={[10, -20]} speed={15}>
                    <div className="absolute -top-10 left-0 translate-x-[-110%] w-[95px] h-[80px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="row-start-1">
              <Image
                src="/images/binance-one-crypto.png"
                alt="Sell Bitcoin"
                className="w-[70%] ml-auto"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full h-screen max-h-[900px] relative text-center flex items-center justify-center mt-24">
        <div className="w-full">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="container relative w-full h-full">
              <div className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
              <div className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
              <div className="absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
            </div>
          </div>
          <div className="text-3xl font-semibold py-8 relative">
            Why people trust Pallapay
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
      <div className="bg-gradient-to-t from-[#353C45] to-[#010101] w-full relative text-center flex items-center justify-center -mt-1">
        <div className="container text-base py-28 relative">
          <div className="absolute bottom-[7%] left-[-12.5%] !w-[90px] !h-[80px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
          <Image
            src="/images/shapes/star.png"
            width={25}
            height={25}
            className="absolute left-0 bottom-[15%]"
            alt="Star"
          />
          <Image
            src="/images/shapes/star.png"
            width={35}
            height={35}
            className="absolute -right-5 bottom-[25%]"
            alt="Star"
          />
          <Image
            src="/images/shapes/star.png"
            width={30}
            height={30}
            className="absolute right-4 top-[10%]"
            alt="Star"
          />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">No hidden fees</div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">Verification in less than 5 minutes</div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">Licenses Payment Service Providers</div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">24/7/365 live customer support</div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">
                40-person team with expertise and experience
              </div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">
                More than $170,000,000 in annual transactions
              </div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">Instant cryptocurrency payouts</div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">Lowest fees on the market</div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">
                Excellent option for beginners and pros
              </div>
            </div>
            <div>
              <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                <Check size={26} strokeWidth={3.8} />
              </div>
              <div className="mt-4">Serving 180+ countries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-14 container text-black">
        <h2 className="text-3xl font-semibold">
          FAQ about selling BNB (Binance) in PallaPay Dubai
        </h2>
        <Accordion type="single" collapsible className="w-full border-b mt-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              This is my first time. Can you help me?
            </AccordionTrigger>
            <AccordionContent>
              Yes, of course. Visit our office, and our employees will be happy
              to assist you with your transaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is the min/max amount that I can sell?
            </AccordionTrigger>
            <AccordionContent>
              Our Minimum Transaction Amount is 1000 BNB and Maximum 4M BNB Per
              Person Per Day
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long does it take to sell Binance Coin in PallaPay Dubai?
            </AccordionTrigger>
            <AccordionContent>
              The exchange takes around 5 to 10 minutes. We want our service to
              be convenient, and we try to take care of your needs as quickly as
              possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What are the opening and closing hours of the Dubai office?
            </AccordionTrigger>
            <AccordionContent>
              Monday to Saturday 10 A.M. to 7 P.M., Sunday closed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How many branches do you have in Dubai?
            </AccordionTrigger>
            <AccordionContent>
              We have Few Branches in Dubai. But The Most convenient Branch is
              Located at Marasi Drive Business Bay P4 Floor Office P401 and P402
              The Binary By Omniyat - Dubai - UAE
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can I Get USD or Euro Instead of AED?
            </AccordionTrigger>
            <AccordionContent>
              Yes We Can Pay You Via USD or Euro :)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Can I sell Binance (BNB) online?
            </AccordionTrigger>
            <AccordionContent>
              <a
                href="https://www.pallapay.com/buy-sell-bitcoin-tether-dubai"
                className="text-blue-600 underline"
                title="Sell Online"
              >
                Yes You Can Sell Online And Get Cash Or Bank Transfer By
                Visiting The Sell Page, Also Available on Our OTC (Over the
                Counter) exchange.
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Can I send Binance (BNB) to another person with cash in PallaPay?
            </AccordionTrigger>
            <AccordionContent>
              Providing your ID, you can send crypto coins with cash to another
              person.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Do you have an app?</AccordionTrigger>
            <AccordionContent>
              Yes We Do Have an App, You Can Download From Apple Store Or Google
              Play.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Do you provide receipt when i sell my BNB in your Dubai store?
            </AccordionTrigger>
            <AccordionContent>
              Yes we do provide an official receipt for any transaction.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="container mt-20 text-black">
        <div className="bg-white rounded-3xl p-10 shadow-[0_0px_40px_rgba(0,0,0,0.05)] space-y-3">
          <h3 className="text-xl font-semibold">
            Pallapay is the best place to sell BNB and other Cryptocurrency and
            get cash instantly in Dubai UAE. Pallapay is an international brand
            providing cryptocurrency exchange services. Currently, it operates
            in four (4) different countries and major cities: Dubai, USA,
            Singapore, and Istanbul. Since 2015, thousands of people have relied
            on Pallapay to exchange their cryptocurrencies for cash and vice
            versa.
          </h3>
        </div>
      </div>

      {/* <MainFooter className="!mt-24" /> */}
    </>
  );
}
