import React, { useState } from 'react';
import { useLottie } from 'lottie-react';

interface LottieOnHoverProps {
    animationData: object; // Expects the Lottie animation data as a prop
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
}

export const LottieOnHover: React.FC<LottieOnHoverProps> = ({ animationData, width, height, style }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleAnimationComplete = () => {
    };

    const options = {
        animationData: animationData,
        loop: isHovering ? 0 : false,
        onComplete: handleAnimationComplete,
        style: { width: '100%', height: '100%' }
    };

    const { View } = useLottie(options);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ width: width, height: height, ...style }}
        >
            {View}
        </div>
    );
};
