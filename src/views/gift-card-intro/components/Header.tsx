"use client"

import * as React from "react"
import { MainNav } from '@/components/base/MainNav';
import { ChevronRight } from 'lucide-react';

export function Header() {
    return (
        <>
            <div className="relative h-[500px] bg-gradient-to-t from-[#353C45] via-[#181A20] via-45% to-[#010101]">
                <MainNav hasBackground={true} />
                <div className="container pt-10 pb-32 sm:pb-52 relative">
                    <div
                        className="absolute sm:top-[28%] sm:right-[-5%] top-[44%] right-[-25%] w-[175px] h-[155px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[20px] sm:blur-[8px] rotate-[16deg]"></div>
                    <div
                        className="absolute sm:top-[48%] sm:right-[12%] top-[1%] right-[-10%] w-[82px] h-[80px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
                    <div
                        className="absolute bottom-[-20%] sm:bottom-[8%] left-[-7%] w-[140px] h-[132px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
                    <div className="flex w-full justify-center">
                        <div className="text-3xl font-semibold text-center">
                            How to Redeem Your Purchased Gift Card
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center mt-4 text-amber-400">
                        <div>Home</div>
                        <ChevronRight />
                        <div>Gift Card Intro</div>
                    </div>
                </div>
            </div>
        </>
    )
}
