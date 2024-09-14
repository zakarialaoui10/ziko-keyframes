const fadeOut = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutBottomLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(-100%, 100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutBottomRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(100%, 100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutDown = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutDownBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutLeftBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutRightBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutTopLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(-100%, -100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutTopRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(100%, -100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutUp = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const fadeOutUpBig = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 },
            { opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    fadeOut,
    fadeOutBottomLeft,
    fadeOutBottomRight,
    fadeOutDown,
    fadeOutDownBig,
    fadeOutLeft,
    fadeOutLeftBig,
    fadeOutRight,
    fadeOutRightBig,
    fadeOutTopLeft,
    fadeOutTopRight,
    fadeOutUp,
    fadeOutUpBig
}