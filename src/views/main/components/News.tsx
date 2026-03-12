"use client"

import * as React from "react"
import { Link } from '@/lib/inertia-shims';

export function News() {
    return (
        <div className="container text-black mt-24 sm:mt-36">
            <div className="text-3xl font-semibold">
                News And Tutorials
            </div>
            <div className="grid grid-cols-1 md:grid-cols-15 gap-4 mt-5">
                <Link href="/news" className="md:col-span-9">
                    <div
                        className="bg-[url(/images/blog-post-temp-1.png)] bg-cover bg-center flex rounded-2xl p-4 w-full h-[300px] justify-end items-end group transition-all delay-100 grayscale-50 hover:grayscale-0">
                        <div
                            className="bg-white rounded-2xl w-full flex items-center justify-between px-4 py-2 relative">
                            <div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur. Porttitor
                                </div>
                                <div className="text-xs text-neutral-600">
                                    12 Apr. 2025
                                </div>
                            </div>
                            <div>
                                <div
                                    className="w-[30px] h-[30px] bg-cover bg-[url(/images/icons/arrow-circle-more.svg)] group-hover:rotate-45 transition-all"></div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/news" className="md:col-span-6">
                    <div
                        className="bg-[url(/images/blog-post-temp-1.png)] bg-cover bg-center flex rounded-2xl p-4 w-full h-[300px] justify-end items-end group transition-all delay-100 grayscale-50 hover:grayscale-0">
                        <div
                            className="bg-white rounded-2xl w-full flex items-center justify-between px-4 py-2">
                            <div>
                                <div>
                                    Lorem ipsum dolor sit amet
                                </div>
                                <div className="text-xs text-neutral-600">
                                    12 Apr. 2025
                                </div>
                            </div>
                            <div>
                                <div
                                    className="w-[30px] h-[30px] bg-cover bg-[url(/images/icons/arrow-circle-more.svg)] group-hover:rotate-45 transition-all"></div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/news" className="md:col-span-7">
                    <div
                        className="bg-[url(/images/blog-post-temp-1.png)] bg-cover bg-center flex rounded-2xl p-4 w-full h-[300px] justify-end items-end group transition-all delay-100 grayscale-50 hover:grayscale-0">
                        <div
                            className="bg-white rounded-2xl w-full flex items-center justify-between px-4 py-2">
                            <div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className="text-xs text-neutral-600">
                                    12 Apr. 2025
                                </div>
                            </div>
                            <div>
                                <div
                                    className="w-[30px] h-[30px] bg-cover bg-[url(/images/icons/arrow-circle-more.svg)] group-hover:rotate-45 transition-all"></div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="/news" className="md:col-span-8">
                    <div
                        className="bg-[url(/images/blog-post-temp-1.png)] bg-cover bg-center flex rounded-2xl p-4 w-full h-[300px] justify-end items-end group transition-all delay-100 grayscale-50 hover:grayscale-0">
                        <div
                            className="bg-white rounded-2xl w-full flex items-center justify-between px-4 py-2">
                            <div>
                                <div>
                                    Lorem ipsum dolor sit amet
                                </div>
                                <div className="text-xs text-neutral-600">
                                    12 Apr. 2025
                                </div>
                            </div>
                            <div>
                                <div
                                    className="w-[30px] h-[30px] bg-cover bg-[url(/images/icons/arrow-circle-more.svg)] group-hover:rotate-45 transition-all"></div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
