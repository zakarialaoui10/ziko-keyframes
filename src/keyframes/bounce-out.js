const bounceOut = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 },          // 20%
            { opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55 }, // 50% and 55%
            { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1 }    // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceOutDown = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, 10px, 0) scaleY(0.985)', offset: 0.2 },  // 20%
            { opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)', offset: 0.45 }, // 40% and 45%
            { opacity: 0, transform: 'translate3d(0, 2000px, 0) scaleY(3)', offset: 1 }   // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceOutLeft = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(20px, 0, 0) scaleX(0.9)', offset: 0.2 },  // 20%
            { opacity: 0, transform: 'translate3d(-2000px, 0, 0) scaleX(2)', offset: 1 }    // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceOutRight = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 1, transform: 'translate3d(-20px, 0, 0) scaleX(0.9)', offset: 0.2 },  // 20%
            { opacity: 0, transform: 'translate3d(2000px, 0, 0) scaleX(2)', offset: 1 }    // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceOutUp = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translate3d(0, -10px, 0) scaleY(0.985)', offset: 0.2 },  // 20%
            { opacity: 1, transform: 'translate3d(0, 20px, 0) scaleY(0.9)', offset: 0.4 },  // 40%
            { opacity: 1, transform: 'translate3d(0, 20px, 0) scaleY(0.9)', offset: 0.45 },  // 45%
            { opacity: 0, transform: 'translate3d(0, -2000px, 0) scaleY(3)', offset: 1 }    // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    bounceOutDown,
    bounceOutLeft,
    bounceOutRight,
    bounceOutUp
}