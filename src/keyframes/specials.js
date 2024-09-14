const hinge = (duration = 2000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { offset: 0, animationTimingFunction: easing },
            { transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2, animationTimingFunction: easing },
            { transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4, opacity: 1, animationTimingFunction: easing },
            { transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.6, opacity: 1, animationTimingFunction: easing },
            { transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.8, animationTimingFunction: easing },
            { transform: 'translate3d(0, 700px, 0)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const jackInTheBox = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom', offset: 0 },
            { transform: 'rotate(-10deg)', offset: 0.5 },
            { transform: 'rotate(3deg)', offset: 0.7 },
            { opacity: 1, transform: 'scale(1)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rollIn = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rollOut = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)', offset: 0 },
            { opacity: 0, transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    hinge,
    jackInTheBox,
    rollIn,
    rollOut
}