import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ImageItem {
    title: string;
    url: string;
    width: number;
}

interface AutoSliderProps {
    imageItems: ImageItem[];
    speed?: number; // Optional speed in milliseconds for the slide transition (not scrolling speed)
    autoplaySpeed?: number; // Optional autoplay speed in milliseconds
}

export const AutoSlider: React.FC<AutoSliderProps> = ({ imageItems }) => {
    return (
        <div className="text-center overflow-hidden">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                speed={800}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {imageItems.map((image) => (
                    <SwiperSlide key={image.title} className="w-full h-20 sm:h-24 flex items-center justify-center relative">
                        <div className="flex items-center justify-center transition-transform duration-300">
                            <img
                                src={image.url}
                                alt={image.title}
                                width={image.width}
                                className="mx-auto object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
