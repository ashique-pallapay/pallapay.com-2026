"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { clsx } from 'clsx';

export const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div onClick={scrollToTop}
            className={clsx(
                "fixed bottom-20 right-6 p-1.5 rounded-full bg-amber-400 hover:bg-amber-500",
                "hover:cursor-pointer text-black opacity-0 transition-opacity",
                {["opacity-100"]: isVisible}
            )}>
            <ArrowUp size={30} strokeWidth={1.6} />
        </div>
    );
};
