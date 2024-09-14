const slideOutDown = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const slideOutLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const slideOutRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const slideOutUp = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 0, 0)', offset: 0 },
            { visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    slideOutDown,
    slideOutLeft,
    slideOutRight,
    slideOutUp
}