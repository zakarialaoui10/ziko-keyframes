const flip = (duration = 1000, easing = 'ease-out', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)', offset: 0, easing: 'ease-out' },
            { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4, easing: 'ease-out' },
            { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5, easing: 'ease-in' },
            { transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', offset: 0.8, easing: 'ease-in' },
            { transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', offset: 1, easing: 'ease-in' }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const flipInX = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 0, easing: 'ease-in' },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4, easing: 'ease-in' },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1, offset: 0.6 },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: 0.8 },
            { transform: 'perspective(400px)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const flipInY = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 0, easing: 'ease-in' },
            { transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4, easing: 'ease-in' },
            { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, offset: 0.6 },
            { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8 },
            { transform: 'perspective(400px)', offset: 1 }
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const flipOutX = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'perspective(400px)', offset: 0 },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, offset: 0.3 },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration: duration * 0.75,
            easing,
            iterations
        }
    };
};
const flipOutY = (duration = 1000, easing = 'ease-in', iterations = 1) => {
    return {
        keyframes: [
            { transform: 'perspective(400px)', offset: 0 },
            { transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.3 },
            { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1 }
        ],
        config: {
            duration: duration * 0.75,
            easing,
            iterations
        }
    };
};
export{
    flip,
    flipInX,
    flipInY,
    flipOutX,
    flipOutY
}