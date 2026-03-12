"use client"

import * as React from 'react';
import Image from "next/image";
import { MainFooter } from '@/components/base/MainFooter';
import { Header } from '@/views/gift-card-intro/components';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
// import { AutoSlider } from '@/components/base/AutoSlider';
// import { VideoSection } from '@/components/base/VideoSection';
// import { MapPin } from 'lucide-react';
// import { TextLink } from '@/components/text-link';

export function GiftCardIntro() {

    return (
        <>
            <Header />
            <div className="container translate-y-[-200px] mb-[-200px] overflow-hidden rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-[#FDD062] rounded-3xl px-7 sm:px-16 py-10 text-black">
                    <div className="md:col-span-3 flex justify-end items-center">
                        <Image src="/images/gift-cards/pallapay-gift-card-hero.png"
                             className="w-full scale-[110%] sm:scale-100"
                             alt="Pallapay Crypto gift card" width={800} height={500} />
                    </div>
                    <div className="md:col-span-2 flex justify-center md:justify-end items-center">
                        <div>
                            <h2 className="text-3xl font-semibold">Pallapay Gift Card</h2>
                            <h3 className="text-base mt-2">
                                Pallapay crypto gift-card is a multi-functional card that bridges the world of crypto and real-world purchases. Whether you’re looking to convert crypto to spendable funds or buy crypto conveniently, Pallapay makes it fast, secure, and easy.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-20 text-black text-center space-y-14">
                <div>
                    <div className="font-semibold px-2.5 py-1 rounded-md bg-amber-300 w-fit mx-auto">Step 1</div>
                    <div className="font-semibold text-2xl mt-2">
                        Sign Up & Verify
                    </div>
                    <ul className="space-y-3 mt-5 disabled: text-left w-fit mx-auto list-disc">
                        <li>Register at <a target="_blank" href="https://dashboard.pallapay.com/auth/register"
                                           className="text-blue-600">https://dashboard.pallapay.com/auth/register</a>.
                        </li>
                        <li>Complete account verification by submitting the required documents.</li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold px-2.5 py-1 rounded-md bg-amber-300 w-fit mx-auto">Step 2</div>
                    <div className="font-semibold text-2xl mt-2">
                        Purchase & Activation
                    </div>
                    <ul className="space-y-3 mt-5 disabled: text-left w-fit mx-auto list-disc">
                        <li>Buy your gift card from any Pallapay trusted partner store.</li>
                        <li>The card will be activated instantly, and a <span
                            className="font-semibold">PIN code</span> will be sent to your email.
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold px-2.5 py-1 rounded-md bg-amber-300 w-fit mx-auto">Step 3</div>
                    <div className="font-semibold text-2xl mt-2">
                        Access Your Gift Card
                    </div>
                    <ul className="space-y-3 mt-5 disabled: text-left w-fit mx-auto list-disc">
                        <li>Log in to your Pallapay account on the Pallapay App.</li>
                        <li>Go to <span className="font-semibold">Crypto Gift Card → All My Gift Cards</span>.</li>
                        <li>You will see your purchased gift card listed as <span
                            className="font-semibold">Active</span>.
                        </li>
                    </ul>
                    <Image src="/images/gift-card-intro/step1.png" alt="Gift cards page Pallapay"
                         className="max-w-[75%] md:max-w-[280px] mx-auto mt-5 border-2 border-neutral-300" width={280} height={500} />
                </div>
                <div>
                    <div className="font-semibold px-2.5 py-1 rounded-md bg-amber-300 w-fit mx-auto">Step 4</div>
                    <div className="font-semibold text-2xl mt-2">
                        Redeem Your Gift Card
                    </div>
                    <ul className="space-y-3 mt-5 disabled: text-left w-fit mx-auto list-disc">
                        <li>Click <span className="font-semibold">Redeem</span> and enter the PIN code received by
                            email.
                        </li>
                        <li>If you haven’t received the PIN, click <span
                            className="font-semibold">Resend PIN Code</span>.
                        </li>
                        <li>Once redeemed, the balance will be added to your <span className="font-semibold">Gift Card Balance</span>.
                        </li>
                    </ul>
                    <div className="md:flex md:justify-center md:gap-5">
                        <Image src="/images/gift-card-intro/step2.png" alt="Redeem pallapay gift card in mobile application"
                             className="max-w-[75%] md:max-w-[280px] mx-auto md:mx-0 mt-5 border-2 border-neutral-300" width={280} height={500} />
                        <Image src="/images/gift-card-intro/step3.png" alt="Pallapay gift card dashboard"
                             className="max-w-[75%] md:max-w-[280px] mx-auto md:mx-0 mt-5 border-2 border-neutral-300" width={280} height={500} />
                    </div>
                </div>
                <div>
                    <div className="font-semibold px-2.5 py-1 rounded-md bg-amber-300 w-fit mx-auto">Step 5</div>
                    <div className="font-semibold text-2xl mt-2">
                        Withdraw Crypto
                    </div>
                    <ul className="space-y-3 mt-5 disabled: text-left w-fit mx-auto list-disc">
                        <li>Navigate to <span className="font-semibold">Gift Cards → Crypto Withdrawals.</span></li>
                        <li>Click <span className="font-semibold">Request</span>, then click <span
                            className="font-semibold">Add</span> next to Withdrawal Address to save your wallet address.
                        </li>
                        <li>
                            In the withdrawal request section:
                            <ul className="mt-1.5 space-y-1 disabled: list-decimal pl-5">
                                <li>Enter the desired amount from your balance.</li>
                                <li>Select the cryptocurrency you want to receive.</li>
                                <li>Choose your wallet address.</li>
                                <li>Click <span className="font-semibold">Create Withdrawal Request</span>.</li>
                            </ul>
                            <div className="md:flex md:justify-center md:gap-5">
                                <Image src="/images/gift-card-intro/step4.png" alt="Pallapay crypto withdrawals in application"
                                     className="max-w-[75%] md:max-w-[280px] mx-auto md:mx-0 mt-5 border-2 border-neutral-300" width={280} height={500} />
                                <Image src="/images/gift-card-intro/step5.png" alt="Create pallapay crypto withdrawal in application"
                                     className="max-w-[75%] md:max-w-[280px] mx-auto md:mx-0 mt-5 border-2 border-neutral-300" width={280} height={500} />
                            </div>
                        </li>
                        <li>Enter the verification code sent to your email.</li>
                    </ul>
                    <Image src="/images/gift-card-intro/step6.png" alt="Final step of create pallapay crypto withdrawal in application"
                         className="max-w-[75%] md:max-w-[280px] mx-auto mt-5 border-2 border-neutral-300" width={280} height={500} />
                </div>
                <div
                    className="text-base font-semibold px-4 py-8 rounded-md bg-green-500/20 w-full text-center text-green-700">
                    That’s it! Your withdrawal request will be processed, and the crypto will be sent to your wallet.
                </div>
            </div>
            <MainFooter className="!mt-24" />
        </>
    )
}
