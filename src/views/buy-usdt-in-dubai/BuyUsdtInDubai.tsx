"use client"

import * as React from 'react';
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import InteractiveGradientCard from '@/components/base/InteractiveGradientCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator } from '@/components/calculator';

export function BuyUsdtInDubai({prices}: {prices: any}) {
    return (
        <>
            <div className="relative bg-black overflow-hidden">
                <MainNav hasBackground={true} />
                <div
                    className="absolute bg-[url(/images/cryptocurrency/waves.png)] bg-cover bg-center w-full h-full"></div>
                <div className="container py-14 relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4 relative hidden md:block">
                            <div
                                className="absolute w-[300px] h-[170px] bg-black/70 blur-[40px] rounded-[150%] -bottom-4 left-0"></div>
                            <img alt="sell USDT in dubai" className="relative"
                                 src="/images/cryptocurrency/globe.png" />
                        </div>
                        <div className="col-span-12 md:col-span-7 text-center md:pl-10">
                            <div>
                                <h1 className="text-3xl leading-[2.8rem] lg:text-4xl lg:leading-[3.7rem] font-semibold">
                                    Buy USDT (Tether) in Dubai<br /> Get Cash or Bank Transfer
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 lg:flex justify-center gap-3 mt-10">
                                <a href="https://dashboard.pallapay.com/auth/register">
                                    <Button size="xl"
                                            className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                                        Buy online now
                                    </Button>
                                </a>
                                <a href="https://maps.app.goo.gl/XF9ScJ3596UK4zmn6" target="_blank">
                                    <Button size="xl" variant="outline"
                                            className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">
                                        Visit our office
                                    </Button>
                                </a>
                            </div>

                            <div
                                className="text-amber-400 sm:flex sm:gap-5 sm:justify-center mt-10 w-full space-y-3 sm:space-y-0">
                                <div
                                    className="flex gap-3 text-xl font-semibold underline mx-auto sm:mx-0 justify-center sm:justify-start">
                                    <div
                                        className="flex w-8 h-8 items-center justify-center rounded-full border border-amber-400">
                                        <Phone size={20} strokeWidth={2} />
                                    </div>
                                    <a href="tel:971588971652">058 897 1652</a>
                                </div>
                                <div className="text-xl font-semibold underline">
                                    <a href="tel:97144264781">044264781</a>
                                </div>
                                <div className="text-xl font-semibold underline">
                                    <a className="flex gap-2 items-center justify-center sm:justify-start"
                                       target="_blank"
                                       href="https://api.whatsapp.com/send?phone=971588971652">
                                        <div
                                            className="w-7 h-7 bg-[url(/images/icons/social/whatsapp-icon.svg)] bg-no-repeat bg-cover"></div>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Calculator title="Calculate USDT to Cash" symbol="USDT" prices={prices} />

            <div className="container mt-20 text-black">
                <iframe title="Buy USDT dubai"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
                        width="100%" height="350" className="border-0 mt-8"></iframe>

                <h4 className="text-2xl font-semibold text-center mt-10">How to buy USDT (Tether) and Send Cash?</h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center mt-6">
                    <div>
                        <img src="/images/crypto-pg/compare.png"
                             alt="Buy USDT in dubai" className="w-[110px] mx-auto" />
                        <h5 className="card-title mt-3 font-semibold mb-2">1. Visit Our Branch in Dubai</h5>
                        <p className="card-text">Calculate the best exchange rate for your USDT.</p>
                    </div>
                    <div>
                        <img src="/images/crypto-pg/track.png"
                             alt="Buy USDT in dubai" className="w-[110px] mx-auto" />
                        <h5 className="card-title mt-3 font-semibold mb-2">2. Pay For The USDT</h5>
                        <p className="card-text">Make payment via cash, card or bank transfer.</p>
                    </div>
                    <div>
                        <img src="/images/crypto-pg/convert.png"
                             alt="Buy USDT in dubai" className="w-[110px] mx-auto" />
                        <h5 className="card-title mt-3 font-semibold mb-2">3. Get Your USDT</h5>
                        <p className="card-text">Get your USDT (Tether) Erc20 or Trc20.</p>
                    </div>
                </div>

                <iframe src="https://www.trustedsite.com/widget/tm-1001/?host=pallapay.com&amp;lang=en"
                        title="TrustedSite Certified" className="border-0 w-[60%] h-[60%] mx-auto mt-14" width="60%"
                        height="60%"></iframe>
            </div>

            <div className="container text-black text-center">
                <div>
                    <h2 className="text-3xl font-semibold">Our Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/laptop-coins.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">We guarantee the best rate</h5>
                            <p className="mt-2">we price match all local dealer competitors (including their online
                                prices).</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/wallet.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Get your funds instantly</h5>
                            <p className="mt-2">Payouts occur immediately after we receive your USDT</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/money-percentage.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Competitive fee structure</h5>
                            <p className="mt-2">Check the fees you are expected to pay before a transaction</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/earth.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Global support</h5>
                            <p className="mt-2">Buy usdt from nearly any country in the world</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/list.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">$100,000 Insurance</h5>
                            <p className="mt-2">Secure Checkout with coverage up to $100,000 Identity Protection.</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/heaset.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Continuous support</h5>
                            <p className="mt-2">Our support team stands ready to help you out</p>
                        </InteractiveGradientCard>
                    </div>
                </div>
            </div>

            {/*<div className="container mt-18">*/}
            {/*    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 text-black">*/}
            {/*        {*/}
            {/*            Object.entries(prices).map(([symbol, data]) => (*/}
            {/*                <InteractiveGradientCard key={symbol}*/}
            {/*                                         className="bg-neutral-300 flex items-center justify-center pb-2 pt-1 text-center">*/}
            {/*                    <img src={data.icon_url} alt={data.coin_id} width={50}*/}
            {/*                         className="mx-auto animate-pulse" />*/}
            {/*                    <h5 className="text-xl mt-3">{data.coin_symbol}</h5>*/}
            {/*                    <p className="font-semibold text-xl mt-1">${parseFloat(data.usd_price)}</p>*/}
            {/*                </InteractiveGradientCard>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="bg-black mt-18">
                <div className="container py-10">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex items-center row-start-2 md:row-start-1 text-center sm:text-left">
                            <div>
                                <h3 className="text-2xl font-semibold">What is (Tether) USDT?</h3>
                                <div className="desc-wiu mt-2">
                                    <p>Tether (USDT) is a stablecoin, a type of cryptocurrency which aims to keep
                                        cryptocurrency valuations stable. Tether is used by crypto Traders and investors
                                        who want to avoid the extreme volatility of other cryptocurrencies while keeping
                                        value within the crypto market and it can easily transferable to other
                                        cryptocurrencies.</p>
                                </div>
                                <ParallaxProvider>
                                    <Parallax rotate={[10, -20]} speed={15}>
                                        <div
                                            className="absolute -top-10 left-0 translate-x-[-110%] w-[95px] h-[80px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]">
                                        </div>
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                        </div>
                        <div className="row-start-1">
                            <img className="w-1/2 lg:w-2/5 mx-auto" src="/images/buy-sell-tether.png" alt="Buy USDT" />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full h-screen max-h-[900px] relative text-center flex items-center justify-center mt-24">
                <div className="w-full">
                    <div className="absolute w-full h-full top-0 left-0">
                        <div className="container relative w-full h-full">
                            <div
                                className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
                            <div
                                className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
                            <div
                                className="absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
                        </div>
                    </div>
                    <div className="text-3xl font-semibold py-8 relative">
                        Why people trust Pallapay
                    </div>
                    <div className="container h-full relative">
                        <div className="relative bg-black rounded-3xl">
                            <div
                                className="absolute bottom-[-50px] right-[-90px] w-[153px] h-[148px] rotate-[-42deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2px] particle-move-4"></div>
                            <iframe
                                className="rounded-3xl w-full h-[520px] border-[3px] border-white"
                                src="https://www.youtube.com/embed/tISphaSVLDg?si=DGK_5mzo5-zkh3bf"
                                title="Cryptocurrency To Fiat POS Machine System Made by Pallapay For The First Time in The World"
                                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-gradient-to-t from-[#353C45] to-[#010101] w-full relative text-center flex items-center justify-center -mt-1">
                <div className="container text-base py-28 relative">
                    <div
                        className="absolute bottom-[7%] left-[-12.5%] !w-[90px] !h-[80px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
                    <img src="/images/shapes/star.png" width={25} className="absolute left-0 bottom-[15%]" />
                    <img src="/images/shapes/star.png" width={35} className="absolute -right-5 bottom-[25%]" />
                    <img src="/images/shapes/star.png" width={30} className="absolute right-4 top-[10%]" />
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
                        <div>
                            <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                                <Check size={26} strokeWidth={3.8} />
                            </div>
                            <div className="mt-4">
                                No hidden fees
                            </div>
                        </div>
                        <div>
                            <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                                <Check size={26} strokeWidth={3.8} />
                            </div>
                            <div className="mt-4">
                                Verification in less than 5 minutes
                            </div>
                        </div>
                        <div>
                            <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                                <Check size={26} strokeWidth={3.8} />
                            </div>
                            <div className="mt-4">
                                Licenses Payment Service Providers
                            </div>
                        </div>
                        <div>
                            <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                                <Check size={26} strokeWidth={3.8} />
                            </div>
                            <div className="mt-4">
                                24/7/365 live customer support
                            </div>
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
                            <div className="mt-4">
                                Instant cryptocurrency payouts
                            </div>
                        </div>
                        <div>
                            <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                                <Check size={26} strokeWidth={3.8} />
                            </div>
                            <div className="mt-4">
                                Lowest fees on the market
                            </div>
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
                            <div className="mt-4">
                                Serving 180+ countries
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-14 container text-black">
                <h2 className="text-3xl font-semibold">FAQ about buying USDT (Tether) in PallaPay Dubai</h2>
                <Accordion type="single" collapsible className="w-full border-b mt-6">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>This is my first time. Can you help me?</AccordionTrigger>
                        <AccordionContent>
                            Yes, of course. Visit our office, and our employees will be happy to assist you with your
                            transaction.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is the min/max amount that I can buy?</AccordionTrigger>
                        <AccordionContent>
                            Our Minumun Transaction Amounth is 1000 USDT and Maximum 4M USDT Per Person Per Day
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            How long does it take to buy Tether in PallaPay Dubai?</AccordionTrigger>
                        <AccordionContent>
                            The exchange takes around 5 to 10 minutes. We want our service to be convenient, and we try
                            to take care of your needs as quickly as possible.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What are the opening and closing hours of the Dubai office?</AccordionTrigger>
                        <AccordionContent>
                            Monday to Saturday 10 A.M. to 7 P.M., Sunday closed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>How many branches do you have in Dubai?</AccordionTrigger>
                        <AccordionContent>
                            We have Few Branches in Dubai. But The Most convenient Branch is Located at Marasi Drive
                            Business Bay P4 Floor Office P401 and P402 The Binary By Omniyat - Dubai - UAE
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Can I Pay USD or Euro Instead of AED?</AccordionTrigger>
                        <AccordionContent>
                            Yes You Can Pay Via USD or Euro :)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Can I buy Tether (USDT) online?</AccordionTrigger>
                        <AccordionContent>
                            Yes You Can Buy Online And Get Cash Or Bank Transfer By Visiting The Buy Page, Also
                            Available on Our OTC (Over the Counter) exchange.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Do you have an app?</AccordionTrigger>
                        <AccordionContent>
                            Yes We Do Have an App, You Can Download From Apple Store Or Google Play.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Do you provide receipt when i buy my usdt in your Dubai
                            store?</AccordionTrigger>
                        <AccordionContent>
                            Yes we do provide an official receipt for any transaction.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="container mt-20 text-black">
                <div className="bg-white rounded-3xl p-10 shadow-[0_0px_40px_rgba(0,0,0,0.05)] space-y-3">
                    <h3 className="text-xl font-semibold">
                        Pallapay is the best place to buy and buy USDT and other Crypto instantly. Now you can trade in
                        a fast, easy, and secure method provided by Pallapay.
                    </h3>
                </div>
            </div>

            {/* <MainFooter className="!mt-24" /> */}
        </>
    )
}
