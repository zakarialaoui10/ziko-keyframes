const lightSpeedInLeft = (duration = 1000, easing = 'ease-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: 0, offset: 0 },
            { transform: 'skewX(-20deg)', opacity: 1, offset: 0.6 },
            { transform: 'skewX(5deg)', offset: 0.8 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const lightSpeedInRight = (duration = 1000, easing = 'ease-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: 0, offset: 0 },
            { transform: 'skewX(20deg)', opacity: 1, offset: 0.6 },
            { transform: 'skewX(-5deg)', offset: 0.8 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const lightSpeedOutLeft = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const lightSpeedOutRight = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    lightSpeedInLeft,
    lightSpeedInRight,
    lightSpeedOutLeft,
    lightSpeedOutRight
}