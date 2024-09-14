const slideInDown = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, -100%, 0)', visibility: 'visible', offset: 0 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const slideInLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const slideInRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const slideInUp = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0 },
            { transform: 'translate3d(0, 0, 0)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    slideInDown,
    slideInLeft,
    slideInRight,
    slideInUp
}