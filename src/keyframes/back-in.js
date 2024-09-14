const backInDown = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translateY(-1200px) scale(0.7)', opacity: 0.7, offset: 0 },  // 0%
            { transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.8 },   // 80%
            { transform: 'scale(1)', opacity: 1, offset: 1 }                          // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const backInLeft = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translateX(-2000px) scale(0.7)', opacity: 0.7, offset: 0 },  // 0%
            { transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.8 },   // 80%
            { transform: 'scale(1)', opacity: 1, offset: 1 }                          // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const backInRight = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translateX(2000px) scale(0.7)', opacity: 0.7, offset: 0 },   // 0%
            { transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.8 },    // 80%
            { transform: 'scale(1)', opacity: 1, offset: 1 }                           // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const backInUp = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'translateY(1200px) scale(0.7)', opacity: 0.7, offset: 0 },   // 0%
            { transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.8 },    // 80%
            { transform: 'scale(1)', opacity: 1, offset: 1 }                           // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    backInDown,
    backInLeft,
    backInRight,
    backInUp
}