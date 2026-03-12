"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Check, Phone } from "lucide-react";
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
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator } from "@/components/calculator";

export function BuyEthereumInDubai({
  prices = {},
}: {
  prices?: {
    [key: string]: {
      coin_id: string;
      coin_symbol: string;
      usd_price: string;
      icon_url: string;
      one_day_change_percentage: number;
      last_updated_at: string;
      last_updated_human: string;
    };
  };
}) {
  return (
    <>
      <div className="relative mb-10 bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <div className="absolute bg-[url(/images/cryptocurrency/waves.png)] bg-cover bg-center w-full h-full"></div>
        <div className="container py-14! relative">
          <div className="grid grid-cols-12">
            <div className="col-span-4 relative hidden md:block">
              <div className="absolute w-[300px] h-[170px] bg-black/70 blur-[40px] rounded-[150%] -bottom-4 left-0"></div>
              <img
                alt="sell bitcoin in dubai"
                className="relative"
                src="/images/cryptocurrency/globe.png"
              />
            </div>
            <div className="col-span-12 md:col-span-7 text-center md:pl-10">
              <div>
                <h1 className="text-3xl leading-[2.8rem] lg:text-4xl lg:leading-[3.7rem] font-semibold">
                  Buy ETH (Ethereum) in Dubai
                  <br />
                  Get Cash or Bank Transfer
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

      <Calculator title="Calculate ETH to Cash" symbol="ETH" prices={prices} />

      <div className="container mt-20! text-black">
        <iframe
          title="Buy bitcoin dubai"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
          width="100%"
          height="350"
          className="border-0 mt-8"
        ></iframe>

        <h4 className="text-2xl font-semibold text-center mt-10">
          How to buy Ethereum (ETH) with cash in dubai UAE?
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center mt-6">
          <div>
            <img
              src="/images/crypto-pg/compare.png"
              alt="Buy bitcoin in dubai"
              className="w-[110px] mx-auto"
            />
            <h5 className="card-title mt-3 font-semibold mb-2">
              1. Visit Our Branch in Dubai
            </h5>
            <p className="card-text">
              Calculate the best exchange rate for your ETH.
            </p>
          </div>
          <div>
            <img
              src="/images/crypto-pg/track.png"
              alt="Buy bitcoin in dubai"
              className="w-[110px] mx-auto"
            />
            <h5 className="card-title mt-3 font-semibold mb-2">
              2. Pay For The ETH
            </h5>
            <p className="card-text">
              Make payment via cash, card or bank transfer.
            </p>
          </div>
          <div>
            <img
              src="/images/crypto-pg/convert.png"
              alt="Buy bitcoin in dubai"
              className="w-[110px] mx-auto"
            />
            <h5 className="card-title mt-3 font-semibold mb-2">
              3. Get Your ETH
            </h5>
            <p className="card-text">Get your ETH (Ethereum).</p>
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
                Payouts occur immediately after we receive your ETH
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
                Buy ETH from nearly any country in the world
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
        <div className="container py-10!">
          <img
            src="/images/ethereum-coins.jpg"
            alt="Ethereum"
            className="w-[70%] mx-auto"
          />
          <h3 className="text-3xl font-semibold text-center">
            3 Reasons to Buy Ethereum
          </h3>
          <div className="desc-wiu mt-8">
            <h4 className="text-xl font-semibold mt-5">
              1. Ethereum provides real-world applications
            </h4>
            <p className="mt-1">
              Perhaps the key ingredient to Ethereum's success is its inclusion
              of smart contracts since its inception . Way back in 2013, Vitalik
              Buterin saw the importance of providing ways for a cryptocurrency
              network to execute transactions immediately upon some agreed-upon
              conditions being met. This functionality spurred a range of
              real-world applications that extend from finance to insurance,
              healthcare, and other large sectors waiting to be disrupted. Being
              an open-source, decentralized blockchain has its advantages for
              those holding ETH tokens. As Ethereum becomes the go-to platform
              upon which developers build dApps or crypto-focused projects,
              Ethereum's network effect grows. Accordingly, the utility Ethereum
              provides is real and tangible. Other cryptocurrencies struggle
              with this concept. While other cryptocurrencies do possess
              currency-like features, decentralized finance and the real-world
              applications that Ethereum has unlocked is a game changer in so
              many respects. The fact that Ethereum powers an incredible number
              of important, high-profile crypto projects right now leads
              investors to the idea that owning the basic building blocks of the
              cryptocurrency ecosystem is a good idea. Indeed, that's a hard
              concept to argue against.
            </p>

            <h4 className="text-xl font-semibold mt-5">
              2. Ethereum will be (more) green very shortly
            </h4>
            <p className="mt-1">
              Perhaps one of the biggest arguments against cryptocurrency
              ownership or acceptance as of late is the sheer amount of energy
              required to power these blockchain networks. Even one of the most
              bullish influencers in the crypto world, Elon Musk, took to
              Twitter to push for change on this issue. Ethereum's rise as one
              of the earliest cryptocurrencies meant a proof-of-work crypto
              mining model was necessary. Miners, or those verifying
              transactions across the blockchain, needed to be rewarded for
              doing so. After all, there are costs to adding the computing power
              necessary to make a network to begin with. However, with the
              crypto world having seemingly evolved to near-ubiquitous status
              among investors, Ethereum looks to change its ways. The
              cryptocurrency network announced an Ethereum Improvement Proposal
              3554 (or EIP-3554, for short) to switch to a proof-of-stake model.
              By allowing Ethereum users to stake their existing Ethereum tokens
              to verify transactions, a significant energy reduction is seen
              across the blockchain. Those who stake their tokens will be
              rewarded in a similar way (via more ETH tokens). However, the
              amount of energy consumed across the blockchain will drop
              dramatically, a good thing for those looking to make passive
              income from their holdings without putting up the capital for
              mining rigs and handling the ongoing power costs associated with
              mining. The total energy reduction across the Ethereum network is
              estimated by the Ethereum foundation to be roughly 99.95%. This
              move is expected to vastly improve the social costs of crypto
              mining (and indirectly, crypto ownership). Those looking to own a
              greener, leaner cryptocurrency may start shifting toward mega-cap
              Ethereum as the primary choice over Bitcoin for this reason alone.
            </p>

            <h4 className="text-xl font-semibold mt-5">
              3. Ethereum powers the NFT world
            </h4>
            <p className="mt-1">
              Perhaps the biggest buzzword in the crypto world right now is NFT
              (non-fungible token). NFTs rose to popularity over the past year,
              due to the rapid rise in the valuations of these digital assets.
              Famously, a non-fungible token was sold earlier this year for a
              whopping $69 million. These sorts of price tags tend to invite
              speculators to the party quickly. As it happens, Ethereum powers
              some of the biggest and most well-known NFT marketplaces right
              now. Among these, opensea.io has seen incredible volume of late.
              NFT investors appear to like the flexibility of using Ethereum to
              trade their artwork. However, other cryptocurrencies such as
              Solana (SOL -10.60%) are popping up as competitors in the race for
              NFT market share. Will Ethereum be able to crowd out the
              competition in these growing crypto markets? Time will tell.
              However, investors looking to bet on the biggest and most robust
              ecosystem certainly have their fair share of reasons to consider
              Ethereum right now.
            </p>
          </div>
          <ParallaxProvider>
            <Parallax rotate={[10, -20]} speed={15}>
              <div className="absolute -top-10 left-0 translate-x-[-110%] w-[95px] h-[80px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
            </Parallax>
          </ParallaxProvider>
        </div>
      </div>

      <div className="container mt-20! text-black">
        <div className="bg-white rounded-3xl p-10 shadow-[0_0px_40px_rgba(0,0,0,0.05)] space-y-3">
          <h3 className="text-xl font-semibold">
            Pallapay is the best place to buy Ethereum (ETH) and other
            Cryptocurrency with cash instantly.
          </h3>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full h-screen max-h-[900px] relative text-center flex items-center justify-center mt-24">
        <div className="w-full">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="container relative w-full! h-full!">
              <div className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
              <div className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
              <div className="absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
            </div>
          </div>
          <div className="text-3xl font-semibold py-8 relative">
            Why people trust Pallapay
          </div>
          <div className="container h-full! relative">
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
        <div className="container text-base py-28! relative">
          <div className="absolute bottom-[7%] left-[-12.5%] !w-[90px] !h-[80px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
          <img
            src="/images/shapes/star.png"
            width={25}
            className="absolute left-0 bottom-[15%]"
          />
          <img
            src="/images/shapes/star.png"
            width={35}
            className="absolute -right-5 bottom-[25%]"
          />
          <img
            src="/images/shapes/star.png"
            width={30}
            className="absolute right-4 top-[10%]"
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

      <div className="my-14! container text-black">
        <h2 className="text-3xl font-semibold">
          FAQ about buying ETH (Ethereum) in PallaPay Dubai
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
              What is the min/max amount that I can buy?
            </AccordionTrigger>
            <AccordionContent>
              Our Minimum Transaction Amount is 1 ETH and Maximum 4M ETH Per
              Person Per Day
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long does it take to buy Ethereum in PallaPay Dubai?
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
              Can I Pay USD or Euro Instead of AED?
            </AccordionTrigger>
            <AccordionContent>
              Yes You Can Pay Via USD or Euro :)
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
              Do you provide receipt when i buy my eth in your Dubai store?
            </AccordionTrigger>
            <AccordionContent>
              Yes we do provide an official receipt for any transaction.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* <MainFooter className="!mt-24" /> */}
    </>
  );
}
