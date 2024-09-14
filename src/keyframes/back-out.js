const backOutDown = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'scale(1)', opacity: 1, offset: 0 },                          // 0%
            { transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.2 },    // 20%
            { transform: 'translateY(700px) scale(0.7)', opacity: 0.7, offset: 1 }     // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const backOutLeft = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'scale(1)', opacity: 1, offset: 0 },                            // 0%
            { transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.2 },      // 20%
            { transform: 'translateX(-2000px) scale(0.7)', opacity: 0.7, offset: 1 }     // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const backOutRight = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'scale(1)', opacity: 1, offset: 0 },                            // 0%
            { transform: 'translateX(0px) scale(0.7)', opacity: 0.7, offset: 0.2 },      // 20%
            { transform: 'translateX(2000px) scale(0.7)', opacity: 0.7, offset: 1 }      // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const backOutUp = (duration = 1000, easing = 'ease-in-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'scale(1)', opacity: 1, offset: 0 },                            // 0%
            { transform: 'translateY(0px) scale(0.7)', opacity: 0.7, offset: 0.2 },      // 20%
            { transform: 'translateY(-700px) scale(0.7)', opacity: 0.7, offset: 1 }      // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    backOutDown,
    backOutLeft,
    backOutRight,
    backOutUp
}