"use client"

import * as React from 'react';
import Image from 'next/image';
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { ArrowRightLeft, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import InteractiveGradientCard from '@/components/base/InteractiveGradientCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function BuySellBitcoinTetherDubai() {
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
                            <Image alt="sell bitcoin in dubai" className="relative"
                                 src="/images/cryptocurrency/globe.png" width={300} height={170} />
                        </div>
                        <div className="col-span-12 md:col-span-7 text-center md:pl-10">
                            <div>
                                <h1 className="text-3xl leading-[2.8rem] lg:text-5xl lg:leading-[4rem] font-semibold">
                                    Buy and Sell Bitcoin and<br />
                                    other Cryptocurrencies securely in Dubai UAE
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

            <div className="container mt-14">
                <h2 className="text-3xl font-semibold text-black text-center">Calculate and sell Bitcoin and other
                    cryptocurrencies to cash</h2>
                <div className="bg-white rounded-3xl p-6 shadow-[0_0px_40px_rgba(0,0,0,0.2)] flex gap-10 mt-6">
                    <Image src="/images/cryptocurrency/calculator.png" width={140} height={140} className="hidden lg:block" alt="Calculator" />
                    <div className="text-black grid lg:grid-cols-7 w-full px-2 lg:pl-0 lg:pr-5">
                        <div className="lg:col-span-3 flex gap-3 items-center justify-center">
                            <div className="grid w-full items-center gap-1.5">
                                <Label className="font-semibold text-base" htmlFor="email">You Spend</Label>
                                <Input defaultValue="0.00" className="h-12" type="email" id="email"
                                       placeholder="Enter amount" />
                            </div>
                            <Select defaultValue="BTC">
                                <SelectTrigger className="w-[220px] h-12 mt-7 bg-amber-400 border-none">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="BTC">
                                            <Image src="/images/coins/ethereum.png" width={25} height={25} alt="BTC" />
                                            BTC
                                        </SelectItem>
                                        <SelectItem value="ETH">
                                            <Image src="/images/coins/ethereum.png" width={25} height={25} alt="ETH" />
                                            ETH
                                        </SelectItem>
                                        <SelectItem value="USDC">
                                            <Image src="/images/coins/usdc.png" width={25} height={25} alt="USDC" />
                                            USDC
                                        </SelectItem>
                                        <SelectItem value="USDT">
                                            <Image src="/images/coins/tether.png" width={25} height={25} alt="USDT" />
                                            USDT
                                        </SelectItem>
                                        <SelectItem value="TRX">
                                            <Image src="/images/coins/tron.png" width={25} height={25} alt="TRX" />
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
                                <Label className="font-semibold text-base" htmlFor="email">You Receive</Label>
                                <Input defaultValue="0.00" className="h-12" type="email" id="email"
                                       placeholder="Enter amount" />
                            </div>
                            <Select defaultValue="BTC">
                                <SelectTrigger className="w-[220px] h-12 mt-7 bg-amber-400 border-none">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="BTC">
                                            AED
                                        </SelectItem>
                                        <SelectItem value="ETH">
                                            USD
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-20 text-black">
                <iframe title="Buy bitcoin dubai"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
                        width="100%" height="350" className="border-0 mt-8"></iframe>

                <h4 className="text-2xl font-semibold text-center mt-10">How does this cryptocurrency trade work?</h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center mt-6">
                    <div>
                        <Image src="/images/crypto-pg/compare.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" width={110} height={110} />
                        <h5 className="card-title mt-3 font-semibold mb-2">1. Get Rate</h5>
                        <p className="card-text">Calculate the best exchange rate for your Bitcoin.</p>
                    </div>
                    <div>
                        <Image src="/images/crypto-pg/convert.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" width={110} height={110} />
                        <h5 className="card-title mt-3 font-semibold mb-2">2. Transfer Bitcoin</h5>
                        <p className="card-text">Transfer your Bitcoin using our automated system.</p>
                    </div>
                    <div>
                        <Image src="/images/crypto-pg/track.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" width={110} height={110} />
                        <h5 className="card-title mt-3 font-semibold mb-2">3. Get Cash</h5>
                        <p className="card-text">You will receive your Bitcoin or other crypto at the same time
                            after payment completed.</p>
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
                            <p className="mt-2">We price match all local dealer competitors (including their online
                                prices).</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/wallet.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Get your funds instantly</h5>
                            <p className="mt-2">Payouts occur immediately after we receive your BTC</p>
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
                            <p className="mt-2">Sell Bitcoin from nearly any country in the world</p>
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

            <div className="bg-black mt-18">
                <div className="container py-10">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex items-center row-start-2 md:row-start-1">
                            <div>
                                <h3 className="text-2xl font-semibold">What is Bitcoin and how does it work?</h3>
                                <div className="desc-wiu mt-2">
                                    <p>Bitcoin is a digital currency which operates free of any central control or the
                                        oversight of banks or governments. Instead it relies on peer-to-peer software
                                        and cryptography.</p>
                                    <p>Bitcoin was created as a way for people to send money over the internet. The
                                        digital currency was intended to provide an alternative payment system that
                                        would operate free of central control but otherwise be used just like
                                        traditional currencies.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-semibold">Can bitcoin be converted to cash?</h3>
                                </div>
                                <div className="mt-2">
                                    <p>Yes Bitcoin can be exchanged for cash just like any other cryptocurrency in
                                        Pallapay branches in Dubai.</p>
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
                            <img src="/images/cryptocurrency/bitcoin.png" alt="Sell Bitcoin" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative text-black mt-20 sm:mt-32">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-0 relative text-left">
                    <div
                        className="col-span-4 text-3xl lg:text-4xl font-semibold pl-4 pr-8 text-center flex items-center relative">
                        <div
                            className="absolute rounded-full w-[370px] h-[370px] bg-amber-400 top-0 left-0 translate-x-[-60%] blur-[220px]"></div>
                        <div className="relative">
                            <h2>How to Sell Bitcoin in Dubai?</h2>
                            <div className="relative hidden sm:block">
                                <div
                                    className="absolute rounded-[150%] w-[250px] h-[220px] bg-white top-0 left-0 blur-[60px]"></div>
                                <img src="/images/cryptocurrency/bit-wallet.png"
                                     className="w-[50%] mx-auto mt-5 relative" />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-8 sm:px-12">
                        <Carousel
                            opts={{
                                align: 'start'
                            }}
                        >
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">Steps to Proceed</h4>
                                        <div className="mt-5">
                                            <p>Bitcoin can be exchanged for cash just like any other cryptocurrency in
                                                Pallapay branches in Dubai.</p>
                                            <p>To proceed, here’s a quick guide on how to sell Bitcoin and Receive Cash
                                                or Bank Transfer:</p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li> 1st Step: Start a new transaction online or visit one of our
                                                    branches.
                                                </li>
                                                <li>2nd Step: Choose how would you like to receive your cash.</li>
                                                <li>3rd Step: Transfer BTC to Pallapay and money will be sent to your
                                                    chosen method.
                                                </li>
                                            </ul>
                                            <p>The process takes 5-10 minutes to complete and money will arrive in 1-5
                                                working days (depending on your bank’s processing times). For more
                                                details, swipe through the steps.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">Benefits of Bitcoin</h4>
                                        <div className="mt-5">
                                            <p>Satoshi Nakamoto introduced Bitcoin in 2009. Since then, it has increased
                                                in popularity thanks to its advantages over traditional currencies:</p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li>Bitcoin can be sent to anyone in the world, instantly, and at any
                                                    time.
                                                </li>
                                                <li>BTC transfers have low fees and are faster than bank transfers.</li>
                                                <li>Governmental institutions cannot control Bitcoin.</li>
                                                <li>With only 21 million Bitcoins in existence, the scarcity and the
                                                    value of the coin is constantly increasing.
                                                </li>
                                            </ul>
                                            <p>Having said that, it's also important to sell BTC when it's needed and
                                                use it as a means of payment.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">
                                            What's the best way to sell Bitcoin online
                                        </h4>
                                        <div className="mt-5">
                                            <p>To sell bitcoin or other cryptos online, Enter the crypto amount on the
                                                top and click on Calculate My Cash and choose your payout method.</p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li>Transactions are secure and enable you to spend your money
                                                    immediately after you receive your funds
                                                </li>
                                                <li>You can convert Bitcoin to Dirham (AED), Dollar (USD), Euro (EUR),
                                                    or other currencies.
                                                </li>
                                            </ul>
                                            <p>If you are ready to sell, the good news is, Pallapay's service is not
                                                only the <a href="https://www.pallapay.com"
                                                            title="Best way to buy bitcoin">best
                                                    way to buy</a> but also the best way to sell Bitcoins online.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">Why choose Pallapay?</h4>
                                        <div className="mt-5">
                                            <p>If you are looking for a convenient way to sell Bitcoin fast, here are
                                                the reasons to choose Pallapay: </p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li>Our interface is user friendly and it takes less than 10 minutes to
                                                    transfer bitcoin to visa card.
                                                </li>
                                                <li>Our support team is online 24/7 and is constantly praised for their
                                                    personal approach.
                                                </li>
                                                <li>Pallapay supports nearly 180 countries and most of the popular
                                                    currencies.
                                                </li>
                                            </ul>
                                            <p>So, what’s next after you withdraw Bitcoin? To make sure you have all the
                                                necessary information, check the tips on the next slide.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">What’s next after you sell Bitcoin?</h4>
                                        <div className="mt-5 space-y-2">
                                            <p>After you sell Bitcoins, if you choose to have cash delivery you will get
                                                a call from currier on the same or next day to schedule your cash
                                                delivery.</p>
                                            <p>if you choose cash pickup you can visit our office from Saturday to
                                                Thursday 10 Am to 5 PM, please make sure to carry your id.</p>
                                            <p>For ATM deposit you will receive the deposit on the same or next business
                                                day. Please make sure the info you've entered is the same on the
                                                account.</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious
                                className="!border-none bg-amber-400/70 !text-white hover:bg-amber-400 cursor-pointer top-auto bottom-0 left-[50%] translate-y-[150%] translate-x-[-140%]" />
                            <CarouselNext
                                className="!border-none bg-amber-400/70 !text-white hover:bg-amber-400 cursor-pointer top-auto bottom-0 right-[50%] translate-y-[150%] translate-x-[140%]" />
                        </Carousel>
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
                    <Image src="/images/shapes/star.png" width={25} height={25} className="absolute left-0 bottom-[15%]" alt="Star" />
                    <Image src="/images/shapes/star.png" width={35} height={35} className="absolute -right-5 bottom-[25%]" alt="Star" />
                    <Image src="/images/shapes/star.png" width={30} height={30} className="absolute right-4 top-[10%]" alt="Star" />
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
                <h2 className="text-3xl font-semibold">FAQ about selling bitcoin in Pallapay Dubai</h2>
                <Accordion type="single" collapsible className="w-full border-b mt-6">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>This is my first time. Can you help me?</AccordionTrigger>
                        <AccordionContent>
                            Yes, of course. Visit our office, and our employees will be happy to assist you with your
                            transaction.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is the min/max amount that I can sell?</AccordionTrigger>
                        <AccordionContent>
                            Our Minimum Transaction Amount is 0.001 BTC and Maximum 4M BTC Per Person Per Day
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How long does it take to sell Bitcoin in PallaPay Dubai?</AccordionTrigger>
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
                        <AccordionTrigger>Can I Get USD or Euro Instead of AED?</AccordionTrigger>
                        <AccordionContent>
                            Yes We Can Pay You Via USD or Euro :)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Can I sell Bitcoin online?</AccordionTrigger>
                        <AccordionContent>
                            <a href="https://www.pallapay.com/buy-sell-bitcoin-tether-dubai"
                               className="text-blue-600 underline"
                               title="Sell Online">Yes You Can Sell Online And Get Cash Or Bank Transfer By Visiting The
                                Sell Page, or by Downloading our APP. Also Available on Our OTC (Over the Counter)
                                exchange.</a>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Can I send Bitcoin to another person with cash in PallaPay?</AccordionTrigger>
                        <AccordionContent>
                            By providing your ID, you can send cryptocurrency to another person.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Can bitcoin be converted to cash?</AccordionTrigger>
                        <AccordionContent>
                            By providing your ID, you can send cryptocurrency to another person.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Can bitcoin be converted to cash?</AccordionTrigger>
                        <AccordionContent>
                            Yes Bitcoin can be exchanged for cash just like any other cryptocurrency in Pallapay
                            branches in Dubai.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Do you have an app?</AccordionTrigger>
                        <AccordionContent>
                            Yes We Do Have an App, You Can Download From Apple Store Or Google Play.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>Do you provide receipt when i sell my Bitcoin in your Dubai
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
                        Pallapay is the best place to sell Bitcoin (BTC) and other cryptocurrencies and get cash
                        instantly in Dubai UAE. Pallapay is an international brand providing cryptocurrency OTC
                        services. Currently, it operates in four (4) different countries and major cities: Dubai, the
                        USA, Singapore, and Istanbul. Since 2015, thousands of people have relied on Pallapay to
                        exchange their cryptocurrencies for cash and vice versa.
                    </h3>
                </div>
            </div>

            {/* <MainFooter className="!mt-24" /> */}
        </>
    )
}
