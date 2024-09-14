const zoomIn = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 },
            { opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0.5 },
            { opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const zoomInDown = (duration = 1000, easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)', iterations = 1) => {
    return {
        keyframes: [
            { 
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
                offset: 0,
                easing: easingIn
            },
            { 
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
                offset: 0.6,
                easing: easingOut
            },
            { 
                opacity: 1,
                transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset: 1
            }
        ],
        config: {
            duration,
            iterations
        }
    };
};
const zoomInLeft = (duration = 1000, easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)', iterations = 1) => {
    return {
        keyframes: [
            { 
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
                offset: 0,
                easing: easingIn
            },
            { 
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
                offset: 0.6,
                easing: easingOut
            },
            { 
                opacity: 1,
                transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset: 1
            }
        ],
        config: {
            duration,
            iterations
        }
    };
};
const zoomInRight = (duration = 1000, easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)', iterations = 1) => {
    return {
        keyframes: [
            { 
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
                offset: 0,
                easing: easingIn
            },
            { 
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
                offset: 0.6,
                easing: easingOut
            },
            { 
                opacity: 1,
                transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset: 1
            }
        ],
        config: {
            duration,
            iterations
        }
    };
};
const zoomInUp = (duration = 1000, easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)', iterations = 1) => {
    return {
        keyframes: [
            { 
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
                offset: 0,
                easing: easingIn
            },
            { 
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
                offset: 0.6,
                easing: easingOut
            },
            { 
                opacity: 1,
                transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
                offset: 1
            }
        ],
        config: {
            duration,
            iterations
        }
    };
};
export{
    zoomIn,
    zoomInDown,
    zoomInLeft,
    zoomInRight,
    zoomInUp
}