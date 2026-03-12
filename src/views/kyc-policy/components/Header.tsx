"use client"

import * as React from "react"
import Image from "next/image";
import { MainNav } from '@/components/base/MainNav';
import { ChevronRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type HeaderProps = {
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
}

export function Header({searchValue, setSearchValue}: HeaderProps) {
    return (
        <>
            <div className="relative bg-gradient-to-t from-[#353C45] via-[#181A20] via-45% to-[#010101]">
                <MainNav hasBackground={true} />
                <div className="container pt-10 pb-32 sm:pb-52 relative">
                    <div
                        className="absolute sm:top-[7%] sm:left-[-3%] top-[44%] left-[-25%] w-[175px] h-[155px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[20px] sm:blur-[8px] rotate-[16deg]"></div>
                    <div
                        className="absolute sm:top-[23%] sm:left-[12%] top-[1%] left-[-10%] w-[82px] h-[80px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
                    <div
                        className="absolute bottom-[8%] right-[-7%] w-[140px] h-[132px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
                    <div className="flex w-full justify-center">
                        <div>
                            <Image src="/images/faq.png" alt="Pallapay FAQ" width={450} height={450} />
                            <div className="text-3xl font-semibold text-center mt-5">
                                Frequently Asked Question
                            </div>
                            <div className="flex gap-2 items-center justify-center mt-4 text-amber-400">
                                <div>Home</div>
                                <ChevronRight />
                                <div>FAQ</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 mx-auto mt-8">
                        <div className="relative">
                            <Search className="absolute h-full ml-5" />
                            <Input placeholder="Search" className="bg-[#353C45] border-none !shadow-none pl-12" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
