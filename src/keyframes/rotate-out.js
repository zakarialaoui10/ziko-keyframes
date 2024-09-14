const rotateOut = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'rotate3d(0, 0, 1, 200deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateOutDownLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateOutDownRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateOutUpLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateOutUpRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { opacity: 1, offset: 0 },
            { transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    rotateOut,
    rotateOutDownLeft,
    rotateOutDownRight,
    rotateOutUpLeft,
    rotateOutUpRight
}