"use client"

import * as React from 'react';
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveGradientCard from '@/components/base/InteractiveGradientCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calculator } from '@/components/calculator';

export function BuyBitcoinDubai({prices = {}}: {prices?: {[key: string]: {
            coin_id: string;
            coin_symbol: string;
            usd_price: string;
            icon_url: string;
            one_day_change_percentage: number;
            last_updated_at: string;
            last_updated_human: string;
        }}}) {

            console.log('Prices in BuyBitcoinDubai:', prices);
    return (
        <>
            <div className="relative mb-5 bg-black overflow-hidden">
                <MainNav hasBackground={true} />
                <div
                    className="absolute bg-[url(/images/cryptocurrency/waves.png)] bg-cover bg-center w-full h-full"></div>
                <div className="container py-14! relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4 relative pr-10 hidden md:block">
                            <div
                                className="absolute w-[300px] h-[170px] bg-black/70 blur-[40px] rounded-[150%] -bottom-4 left-0"></div>
                            <img alt="Buy cryptocurrencies" className="relative" src="/images/cryptocurrency/buy.png" />
                        </div>
                        <div className="col-span-12 md:col-span-7 text-center md:pl-10">
                            <div>
                                <h1 className="text-3xl leading-[2.8rem] lg:text-5xl lg:leading-[4rem] font-semibold">
                                    Buy Bitcoin in Dubai UAE With Cash
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

            <Calculator title="Calculate Bitcoin to Cash" symbol="BTC" prices={prices} />

            <div className="container mt-20! text-black">
                <div className="text-center text-lg font-semibold">
                    <p>Buy bitcoin in Dubai, UAE securely and instantly. Now you can buy bitcoin in Dubai via cash in
                        less than 5 minutes. Pallapay is an exchange for buying bitcoin and other cryptocurrencies in
                        Dubai that you can mostly trust.</p>
                </div>
                <p className="mt-2">We all know that bitcoin is the most popular cryptocurrency now in the world even in
                    Dubai. Some
                    people make trading and invest on the particular cryptocurrency coins. Other people won’t know what
                    is bitcoin? Most of the traders, and investors are looking for trading company that they can buy
                    bitcoin.</p>
                <h2 className="text-3xl font-semibold mt-6">Why you should buy bitcoin in the trustable exchange?</h2>
                <p className="mt-2">I will give you some reason on how cryptocurrency exchange works for trader and
                    investor.</p>
                <ul className="list-disc pl-4 mt-4">
                    <li>First, if you purchase on the exchange you will guarantee that you receive the bitcoin on your
                        wallet upon leaving the shop.
                    </li>
                    <li>Bitcoin is always changing rate very fast, using exchange you can assure that the rate is
                        totally inform you without hidden charges.
                    </li>
                    <li>Imagine you can buy what amount you want, with asking the teller for rate for the day.</li>
                    <li>Exchange can help you if there is some minor issue that you encountered, they can guide you what
                        you need to do.
                    </li>
                    <li>Apart from that you can see the people you are dealing. Having an assurance that your money will
                        not be lost and the bitcoin you buy will confirm that come to your wallet.
                    </li>
                </ul>

                <iframe title="Buy bitcoin dubai"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
                        width="100%" height="350" className="border-0 mt-8"></iframe>

                <h4 className="text-2xl font-semibold text-center mt-10">How does this buy bitcoin work in Dubai?</h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center mt-6">
                    <div>
                        <img src="/images/crypto-pg/compare.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" />
                        <h5 className="card-title mt-3 font-semibold mb-2">1. Get Rate</h5>
                        <p className="card-text">Calculate the best exchange rate for your Bitcoin.</p>
                    </div>
                    <div>
                        <img src="/images/crypto-pg/track.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" />
                        <h5 className="card-title mt-3 font-semibold mb-2">2. Buy Bitcoin</h5>
                        <p className="card-text">Visit on of our VIP branches in Dubai and make the payment.</p>
                    </div>
                    <div>
                        <img src="/images/crypto-pg/convert.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" />
                        <h5 className="card-title mt-3 font-semibold mb-2">3. Get your Coin</h5>
                        <p className="card-text">You will receive your Bitcoin or other crypto at the same time
                            after payment completed.</p>
                    </div>
                </div>

                <iframe src="https://www.trustedsite.com/widget/tm-1001/?host=pallapay.com&amp;lang=en"
                        title="TrustedSite Certified" className="border-0 w-[60%] h-[60%] mx-auto mt-14" width="60%"
                        height="60%"></iframe>
            </div>

            {/*<div className="bg-black mt-18">*/}
            {/*    <div className="container py-10">*/}
            {/*        <div className="grid md:grid-cols-2 gap-5">*/}
            {/*            <div className="flex items-center row-start-2 md:row-start-1">*/}
            {/*                <div>*/}
            {/*                    <div className="text-lg">*/}
            {/*                        Pallapay is an exchange for buying bitcoin and other cryptocurrencies in Dubai that*/}
            {/*                        you can*/}
            {/*                        mostly trust. We all know that bitcoin is the most popular cryptocurrency now in the*/}
            {/*                        world*/}
            {/*                        even in Dubai. Some people make trading and invest on the particular cryptocurrency*/}
            {/*                        coins.*/}
            {/*                        Other people won’t know what is bitcoin? Most of the traders, and investors are*/}
            {/*                        looking for*/}
            {/*                        trading company that they can buy bitcoin.*/}
            {/*                    </div>*/}
            {/*                    <div className="flex gap-3 mt-10">*/}
            {/*                        <a href="https://dashboard.pallapay.com/auth/register">*/}
            {/*                            <Button*/}
            {/*                                className="bg-amber-400 hover:bg-amber-500 cursor-pointer">*/}
            {/*                                Buy online now*/}
            {/*                            </Button>*/}
            {/*                        </a>*/}
            {/*                        <a href="https://g.page/pallapay?share" target="_blank" title="Visit our store">*/}
            {/*                            <Button variant="outline"*/}
            {/*                                    className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">*/}
            {/*                                Visit our store*/}
            {/*                            </Button>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}

            {/*                    <ParallaxProvider>*/}
            {/*                        <Parallax rotate={[10, -20]} speed={15}>*/}
            {/*                            <div*/}
            {/*                                className="absolute -top-10 left-0 translate-x-[-110%] w-[95px] h-[80px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]">*/}
            {/*                            </div>*/}
            {/*                        </Parallax>*/}
            {/*                    </ParallaxProvider>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="row-start-1">*/}
            {/*                <img src="/images/cryptocurrency/bitcoin.png" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="container text-black text-center">
                {/*<div className="mt-20 hidden sm:block">*/}
                {/*    <h2 className="text-3xl font-semibold">How does this buy bitcoin work in Dubai?</h2>*/}
                {/*    <img src="/images/cryptocurrency/buy-crypto.png" className=" rounded-[1.85rem] shadow-[0_0px_40px_rgba(0,0,0,0.1)] mt-8" />*/}
                {/*</div>*/}
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
                                className="bg-[url(/images/benefits/money-hand.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Fast Payouts</h5>
                            <p className="mt-2">Fast cryptocurrency payouts - no more waiting time</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/money-percentage.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Best commissions available</h5>
                            <p className="mt-2">Great commission structure for all transactions with no hidden fees.</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/earth.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">Global payments</h5>
                            <p className="mt-2">We accept payments from nearly anywhere, as we support 180+
                                countries</p>
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
                            <h5 className="text-xl font-semibold mt-9">Live 24/7 support</h5>
                            <p className="mt-2">Our dedicated, multilingual support team is ready to help you out via
                                email or live chat</p>
                        </InteractiveGradientCard>
                    </div>
                </div>
            </div>

            <div className="container mt-18!">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 text-black">
                    {
                        Object.entries(prices).map(([symbol, data]) => (
                            <InteractiveGradientCard key={symbol}
                                                     className="bg-neutral-300 flex items-center justify-center pb-2 pt-1 text-center">
                                <img src={data.icon_url} alt={data.coin_id} width={50}
                                     className="mx-auto animate-pulse" />
                                <h5 className="text-xl mt-3">{data.coin_symbol}</h5>
                                <p className="font-semibold text-xl mt-1">${parseFloat(data.usd_price)}</p>
                            </InteractiveGradientCard>
                        ))
                    }
                </div>
            </div>

            <div className="container relative text-black mt-20! sm:mt-32!">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-0 relative text-left">
                    <div
                        className="col-span-4 text-3xl lg:text-4xl font-semibold pl-4 pr-8 text-center flex items-center relative">
                        <div
                            className="absolute rounded-full w-[370px] h-[370px] bg-amber-400 top-0 left-0 translate-x-[-60%] blur-[220px]"></div>
                        <div className="relative">
                            <h2>How to Buy Bitcoin in Dubai with Cash or Card</h2>
                            <div className="relative hidden sm:block">
                                <div
                                    className="absolute rounded-[150%] w-[250px] h-[220px] bg-white top-0 left-0 blur-[60px]"></div>
                                <img alt="Bitcoin wallet" src="/images/cryptocurrency/bit-wallet.png"
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
                                        <h4 className="text-xl font-semibold">Getting Started</h4>
                                        <div className="mt-5">
                                            <p>
                                                Welcome to Pallapay, the one-stop-shop for all your
                                                cryptocurrency
                                                (and
                                                digital currency) needs.
                                            </p>
                                            <p>
                                                Here is a short guide on how to Buy
                                                Bitcoin
                                                in
                                                dubai with Cash or Card:
                                            </p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li>1st Step: Create a Bitcoin wallet—we suggest using <a
                                                    className="text-blue-600 underline"
                                                    href="https://www.binance.com/en/register?ref=T4FLT1G2"
                                                    rel="nofollow noreferrer noopener" target="_blank"
                                                    title="Buy Bitcoin">Binance</a>.
                                                </li>
                                                <li>2nd Step: Start a new transaction on Pallapay.</li>
                                                <li>3rd Step: Enter your BTC address.</li>
                                                <li>4rth Step: Pay with your Pallapay account.</li>
                                            </ul>
                                            <p>
                                                The whole process takes 15 minutes (or less) to complete. To
                                                learn
                                                more
                                                about buying Bitcoin, swipe to the next step.
                                            </p>
                                            <div
                                                className="text-[200px] font-semibold text-amber-400 opacity-20 absolute bottom-0 right-0 translate-x-[-20%] translate-y-10">1
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">What is Bitcoin and How Does it Work?
                                        </h4>
                                        <div className="mt-5">
                                            <p>
                                                Since its creation in 2009, Bitcoin has become the most prominent method
                                                to store and exchange value across the web:
                                            </p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li>You can buy and send Bitcoin all over the world at all times.</li>
                                                <li>Transfers are cheaper and much faster than bank transfers.</li>
                                                <li>Bitcoin is fairly private, and it is not controlled by 3rd
                                                    parties.
                                                </li>
                                                <li>Furthermore, Bitcoin has a limited supply of 21 million coins.</li>
                                            </ul>
                                            <p>
                                                Thanks to all of this, Bitcoin’s value tends to appreciate over time.
                                            </p>
                                            <div
                                                className="text-[200px] font-semibold text-amber-400 opacity-20 absolute bottom-0 right-0 translate-x-[-20%] translate-y-10">2
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">
                                            Why use pallapay to Buy Bitcoin in Dubai?
                                        </h4>
                                        <div className="mt-5">
                                            <p>
                                                Credit and debit cards are the <strong>most popular payment
                                                method</strong> when buying goods and services worldwide. That’s also
                                                the reason why people favor bank cards over other payment methods.&nbsp;
                                                <br />
                                                Therefore, when looking for the best option to buy Bitcoin in Dubai
                                                instantly, look no further—choose debit cards or credit cards. They are
                                                the <strong>fastest </strong>and <strong>most secure</strong> way to buy
                                                BTC instantaneously <strong>in your local currency</strong>.
                                            </p>
                                            <div
                                                className="text-[200px] font-semibold text-amber-400 opacity-20 absolute bottom-0 right-0 translate-x-[-20%] translate-y-10">3
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="bg-white px-7 py-6 rounded-2xl relative">
                                        <h4 className="text-xl font-semibold">Choosing a Bitcoin Wallet</h4>
                                        <div className="mt-5">
                                            <p>To buy Bitcoin with cash or card, you will need to create a Bitcoin
                                                wallet, and here are your options:</p>
                                            <ul className="list-disc pl-4 my-4">
                                                <li>Desktop wallet - Easy to use and very secure. The most popular
                                                    option is <a
                                                        href="https://www.binance.com/en/register?ref=T4FLT1G2">Binance</a>.
                                                </li>
                                                <li>Hardware wallet - Outstanding security. The most popular option is
                                                    Ledger.
                                                </li>
                                                <li>Online wallet - Very convenient.</li>
                                                <li>Paper wallet - Budget option that’s also secure.</li>
                                            </ul>
                                            <p>
                                                In short, the best wallet to buy Bitcoin instantly is Electrum because
                                                it’s safe and takes just a minute to create.
                                            </p>
                                            <div
                                                className="text-[200px] font-semibold text-amber-400 opacity-20 absolute bottom-0 right-0 translate-x-[-20%] translate-y-10">4
                                            </div>
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
                        <div className="container relative w-full! h-full!">
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
                    <div className="container h-full! relative">
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
                <div className="container text-base py-28! relative">
                    <div
                        className="absolute bottom-[7%] left-[-12.5%] !w-[90px] !h-[80px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
                    <div className="bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat w-[25px] h-[25px] absolute left-0 bottom-[15%]" />
                    <div className="bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat w-[35px] h-[35px] absolute -right-5 bottom-[25%]" />
                    <div className="bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat w-[30px] h-[30px] absolute right-4 top-[10%]" />
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

            <div className="container mt-20! text-black">
                <div className="bg-white rounded-3xl p-10 shadow-[0_0px_40px_rgba(0,0,0,0.05)] space-y-3">
                    <h3 className="text-xl font-semibold">Buy Bitcoin, Tether (USDT), and over 3000 Cryptos in Dubai UAE
                        in The Best and Licensed
                        Cryptocurrency Exchange in Dubai Near Dubai Mall Using Cash or Card easily and securely with
                        Pallapay.</h3>
                </div>
                <div className="bg-white rounded-3xl p-10 shadow-[0_0px_40px_rgba(0,0,0,0.05)] space-y-3 mt-10">
                    <h3 className="text-3xl font-semibold text-center">The easiest way to buy bitcoins in Dubai UAE</h3>
                    <p>Dubai is the city of luxury life, here you can find beautiful places to see and visit. due to the
                        colorful life of the city, people like to visit it. There are so many aspects of living a life
                        in any city, so if you are living in Dubai that means you are enjoying your life very well.</p>
                    <p>On the other hand, it is also necessary for good living that you have good earning source and
                        many amounts of money that you spend to fulfill your desires. So, if you are looking for such an
                        opportunity to maximize your earning then you should invest your money in a good thing that
                        gives you a good amount in return.</p>
                    <p>This era has been digitalized, everything has become advance. So, cryptocurrencies are considered
                        a good source of earning; you can earn much by investing in them. There are some options that
                        you can select for you that suit you best.</p>
                    <ul className="list-disc pl-4">
                        <li>You can buy bitcoin</li>
                        <li>You can sell bitcoin</li>
                        <li>Or you can trade on it</li>
                    </ul>
                    <p>Whatever option suits you, you can opt for it. But here we are going to discuss the first option
                        that is buying bitcoins. Yes if you are in Dubai and want to buy bitcoins and for it, you are
                        searching the easiest way so you cannot face complex procedures then it is the right place for
                        you as we are going to tell you about a platform where you can buy Bitcoin most easily in Dubai.
                        Pallapay is an OTC platform that offers you a secure and authentic place to buy your bitcoin
                        most easily. You have to just follow some simple steps and you will easily buy bitcoins as much
                        as you want using cash or cards.
                    </p>
                    <p>The whole process is very easy and not requires you much time, it will take just 5 minutes maybe
                        less for the completion of this process.</p>
                    <p>Pallapay is a reliable OTC platform for all cryptocurrencies that you can sell, buy, and trade
                        through it. It has so many features that are good and friendly to its customers.</p>
                </div>
            </div>

            {/* <MainFooter className="!mt-24" /> */}
        </>
    )
}
