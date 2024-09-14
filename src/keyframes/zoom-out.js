const zoomOut = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { 
                opacity: 1,
                transform: 'scale3d(1, 1, 1)',
                offset: 0
            },
            { 
                opacity: 0,
                transform: 'scale3d(0.3, 0.3, 0.3)',
                offset: 0.5
            },
            { 
                opacity: 0,
                transform: 'scale3d(0.3, 0.3, 0.3)',
                offset: 1
            }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const zoomOutDown = (duration = 1000, iterations = 1, easingIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', easingOut = 'cubic-bezier(0.175, 0.885, 0.32, 1)') => {
    return {
        keyframes: [
            { 
                opacity: 1,
                transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
                offset: 0.4,
                easing: easingIn
            },
            { 
                opacity: 0,
                transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
                offset: 1,
                easing: easingOut
            }
        ],
        config: {
            duration,
            iterations
        }
    };
};
const zoomOutLeft = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)', offset: 0.4 },
            { opacity: 0, transform: 'scale(0.1) translate3d(-2000px, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        },
        transformOrigin: 'left center'
    };
};
const zoomOutRight = (duration = 1000, easing = 'linear', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', offset: 0.4 },
            { opacity: 0, transform: 'scale(0.1) translate3d(2000px, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        },
        transformOrigin: 'right center'
    };
};
const zoomOutUp = (duration = 1000, iterations = 1, easing = 'linear',) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)', offset: 0.4 },
            { opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        },
        transformOrigin: 'center bottom',
        timingFunction: ['cubic-bezier(0.55, 0.055, 0.675, 0.19)', 'cubic-bezier(0.175, 0.885, 0.32, 1)']
    };
};
export{
    zoomOut,
    zoomOutDown,
    zoomOutLeft,
    zoomOutRight,
    zoomOutUp
}