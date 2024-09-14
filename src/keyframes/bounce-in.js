const bounceIn = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 },                  // 0%
            { transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 },                            // 20%
            { transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 },                           // 40%
            { opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 },             // 60%
            { transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 },                        // 80%
            { opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }                        // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceInDown = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(0, -3000px, 0) scaleY(3)', offset: 0 },             // 0%
            { opacity: 1, transform: 'translate3d(0, 25px, 0) scaleY(0.9)', offset: 0.6 },            // 60%
            { transform: 'translate3d(0, -10px, 0) scaleY(0.95)', offset: 0.75 },                    // 75%
            { transform: 'translate3d(0, 5px, 0) scaleY(0.985)', offset: 0.9 },                      // 90%
            { transform: 'translate3d(0, 0, 0)', offset: 1 }                                          // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceInLeft = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(-3000px, 0, 0) scaleX(3)', offset: 0 },            // 0%
            { opacity: 1, transform: 'translate3d(25px, 0, 0) scaleX(1)', offset: 0.6 },             // 60%
            { transform: 'translate3d(-10px, 0, 0) scaleX(0.98)', offset: 0.75 },                  // 75%
            { transform: 'translate3d(5px, 0, 0) scaleX(0.995)', offset: 0.9 },                    // 90%
            { transform: 'translate3d(0, 0, 0)', offset: 1 }                                        // 100%
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceInRight = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(3000px, 0, 0) scaleX(3)', offset: 0 },            // from
            { opacity: 1, transform: 'translate3d(-25px, 0, 0) scaleX(1)', offset: 0.6 },          // 60%
            { transform: 'translate3d(10px, 0, 0) scaleX(0.98)', offset: 0.75 },                 // 75%
            { transform: 'translate3d(-5px, 0, 0) scaleX(0.995)', offset: 0.9 },                 // 90%
            { transform: 'translate3d(0, 0, 0)', offset: 1 }                                       // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
const bounceInUp = (duration = 1000, easing = 'cubic-bezier(0.215, 0.61, 0.355, 1)', iterations = 1) => {
    return {
        keyframes: [
            { opacity: 0, transform: 'translate3d(0, 3000px, 0) scaleY(5)', offset: 0 },          // from
            { opacity: 1, transform: 'translate3d(0, -20px, 0) scaleY(0.9)', offset: 0.6 },      // 60%
            { transform: 'translate3d(0, 10px, 0) scaleY(0.95)', offset: 0.75 },               // 75%
            { transform: 'translate3d(0, -5px, 0) scaleY(0.985)', offset: 0.9 },              // 90%
            { transform: 'translate3d(0, 0, 0)', offset: 1 }                                    // to
        ],
        config: {
            duration,
            easing,
            iterations
        }
    };
};
export{
    bounceIn,
    bounceInDown,
    bounceInLeft,
    bounceInRight,
    bounceInUp
}