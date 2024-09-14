const fadeIn = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, offset: 0 },  // from
            { opacity: 1, offset: 1 }   // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInBottomLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInBottomRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(100%, 100%, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInDown = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInDownBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInLeftBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInRightBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInTopLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(-100%, -100%, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInTopRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(100%, -100%, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInUp = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeInUpBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 0 },
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    fadeIn,
    fadeInBottomLeft,
    fadeInBottomRight,
    fadeInDown,
    fadeInDownBig,
    fadeInLeft,
    fadeInLeftBig,
    fadeInRight,
    fadeInRightBig,
    fadeInTopLeft,
    fadeInTopRight,
    fadeInUp,
    fadeInUpBig
}