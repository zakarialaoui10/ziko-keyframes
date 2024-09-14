const bounce = (duration, iterations=1, easing=cubic-bezier(0.215, 0.61, 0.355, 1)) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { transform: 'translate3d(0, -30px, 0) scaleY(1.1)', offset: 0.4 },
            { transform: 'translate3d(0, -15px, 0) scaleY(1.05)', offset: 0.7 },
            { transform: 'translate3d(0, 0, 0) scaleY(0.95)', offset: 0.8 },
            { transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: 0.9 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const flash = (duration = 1000, iterations = Infinity, easing = 'linear') => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 0.25 },
            { opacity: 1, offset: 0.5 },
            { opacity: 0, offset: 0.75 },
            { opacity: 1, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const headShake = (duration = 1000, iterations = 1, easing = 'ease-in-out') => {
    return {
        keyframes: [
            { transform: 'translateX(0) rotateY(0deg)', offset: 0 },
            { transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 },
            { transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 },
            { transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 },
            { transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 },
            { transform: 'translateX(0) rotateY(0deg)', offset: 0.5 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const heartBeat = (duration = 1000,iterations = Infinity, easing = 'ease-in-out') => {
    return {
        keyframes: [
            { transform: 'scale(1)', offset: 0 },
            { transform: 'scale(1.3)', offset: 0.14 },
            { transform: 'scale(1)', offset: 0.28 },
            { transform: 'scale(1.3)', offset: 0.42 },
            { transform: 'scale(1)', offset: 0.7 }
        ],
        config: {
            duration: duration * 1.3,  // To Fix
            easing,
            iterations 
        }
    };
};
const jello = (duration = 1000,iterations = Infinity, easing = 'ease-in-out') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 },
            { transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 },
            { transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 },
            { transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 },
            { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 },
            { transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 },
            { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const pulse = (duration = 1000,iterations = Infinity, easing = 'ease-in-out') => {
    return {
        keyframes: [
            { transform: 'scale3d(1, 1, 1)', offset: 0 },
            { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 },
            { transform: 'scale3d(1, 1, 1)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rubberBand = (duration = 1000,iterations = 1, easing = 'ease-in-out') => {
    return {
        keyframes: [
            { transform: 'scale3d(1, 1, 1)', offset: 0 },
            { transform: 'scale3d(1.25, 0.75, 1)', offset: 0.30 },
            { transform: 'scale3d(0.75, 1.25, 1)', offset: 0.40 },
            { transform: 'scale3d(1.15, 0.85, 1)', offset: 0.50 },
            { transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 },
            { transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 },
            { transform: 'scale3d(1, 1, 1)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const shake = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.10 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.20 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.30 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.40 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.50 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.60 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.70 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.80 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.90 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const shakeX = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.10 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.20 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.30 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.40 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.50 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.60 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.70 },
            { transform: 'translate3d(10px, 0, 0)', offset: 0.80 },
            { transform: 'translate3d(-10px, 0, 0)', offset: 0.90 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const shakeY = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { transform: 'translate3d(0, -10px, 0)', offset: 0.10 },
            { transform: 'translate3d(0, 10px, 0)', offset: 0.20 },
            { transform: 'translate3d(0, -10px, 0)', offset: 0.30 },
            { transform: 'translate3d(0, 10px, 0)', offset: 0.40 },
            { transform: 'translate3d(0, -10px, 0)', offset: 0.50 },
            { transform: 'translate3d(0, 10px, 0)', offset: 0.60 },
            { transform: 'translate3d(0, -10px, 0)', offset: 0.70 },
            { transform: 'translate3d(0, 10px, 0)', offset: 0.80 },
            { transform: 'translate3d(0, -10px, 0)', offset: 0.90 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const swing = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 },  // Equivalent to `from`
            { transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.20 },
            { transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.40 },
            { transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.60 },
            { transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.80 },
            { transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }  // Equivalent to `to`
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const tada = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'scale3d(1, 1, 1)', offset: 0 },  // Equivalent to `from`
            { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.1 },
            { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.2 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8 },
            { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9 },
            { transform: 'scale3d(1, 1, 1)', offset: 1 }  // Equivalent to `to`
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const wobble = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },  // Equivalent to `from`
            { transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15 },
            { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.30 },
            { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45 },
            { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.60 },
            { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }  // Equivalent to `to`
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    bounce,
    flash,
    headShake,
    heartBeat,
    jello,
    pulse,
    rubberBand,
    shake,
    shakeX,
    shakeY,
    swing,
    tada,
    wobble
}