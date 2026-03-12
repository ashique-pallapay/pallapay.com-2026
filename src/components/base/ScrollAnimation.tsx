"use client"

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function ScrollAnimation({ 
    children, 
    className = '', 
    delay = 0
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`scroll-animate ${isVisible ? 'scroll-animate-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
}

