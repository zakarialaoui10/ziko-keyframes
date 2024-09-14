const rotateIn = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'rotate3d(0, 0, 1, -200deg)', opacity: 0, offset: 0 },
            { transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateInDownLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 0 },
            { transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateInDownRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 0 },
            { transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateInUpLeft = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 0 },
            { transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const rotateInUpRight = (duration = 1000, iterations = 1, easing = 'ease') => {
    return {
        keyframes: [
            { transform: 'rotate3d(0, 0, 1, -90deg)', opacity: 0, offset: 0 },
            { transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    rotateIn,
    rotateInDownLeft,
    rotateInDownRight,
    rotateInUpLeft,
    rotateInUpRight
}