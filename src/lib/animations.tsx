import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

type BaseAnimations =
    | 'fade'
    | 'slide'
    | 'spin'
    | 'zoom'
    | 'grow'
    | 'shrink'
    | 'flip'
    | 'pulse'
    | 'wobble'
    | 'swing'
    | 'tada';

type UtilityParams = {
    duration: number;
    ease: string;
    loop: boolean;
    fromX?: number;
    fromY?: number;
    fromScale?: number;
    toScale?: number;
    repeat?: number;
    fromOpacity?: number;
    toOpacity?: number;
    toX?: number;
    toY?: number;
    fromRotation?: number;
    rotationY?: number;
    rotationX?: number;
    toRotation?: number;
    rotation?: number;
    scale?: number;
};

const AnimationFunctions: Record<
    BaseAnimations,
    (element: any, utilities: UtilityParams) => gsap.core.Tween
> = {
    fade: (element, { duration, ease, fromOpacity, toOpacity, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { opacity: fromOpacity ?? 0 },
            { opacity: toOpacity ?? 1, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    slide: (element, { duration, ease, fromX, toX, fromY, toY, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { x: fromX ?? '-100%', y: fromY ?? 0 },
            { x: toX ?? '0%', y: toY ?? 0, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    spin: (element, { duration, ease, rotation, repeat }) => {
        const animation = gsap.to(element, {
            rotation: rotation ?? 360,
            duration,
            ease,
        });

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    zoom: (element, { duration, ease, fromScale, toScale, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { scale: fromScale ?? 0 },
            { scale: toScale ?? 1, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    grow: (element, { duration, ease, fromScale, toScale, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { scale: fromScale ?? 0 },
            { scale: toScale ?? 1, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    shrink: (element, { duration, ease, fromScale, toScale, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { scale: fromScale ?? 1 },
            { scale: toScale ?? 0, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    flip: (element, { duration, ease, rotationY, repeat }) => {
        const animation = gsap.to(element, {
            rotationY: rotationY ?? 180,
            duration,
            ease,
        });

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    pulse: (element, { duration, ease, scale, repeat }) => {
        const animation = gsap.to(element, {
            scale: scale ?? 1.2,
            yoyo: true,
            repeat: repeat ?? 1,
            duration,
            ease,
        });

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    wobble: (element, { duration, ease, fromX, toX, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { x: fromX ?? '-30px' },
            { x: toX ?? '30px', repeat: repeat ?? 1, yoyo: true, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    swing: (element, { duration, ease, rotation, repeat }) => {
        const animation = gsap.to(element, {
            rotation: rotation ?? 30,
            yoyo: true,
            repeat: repeat ?? 1,
            duration,
            ease,
        });

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
    tada: (element, { duration, ease, scale, rotation, repeat }) => {
        const animation = gsap.fromTo(
            element,
            { scale: scale ?? 0, rotation: rotation ?? 0 },
            { scale: 1, rotation: 360, duration, ease },
        );

        if (repeat) {
            animation.repeat(repeat);
        }

        return animation;
    },
};

export const parseAnimationProps = (prop: string) => {
    const [base, ...params] = prop.split(' ');
    let utilities: UtilityParams = {
        duration: 1,
        ease: 'none',
        loop: false,
    };

    params.forEach((param) => {
        const [key, value] = param.split('-');

        if (key == 'duration') {
            if (value && typeof value === 'string' && value.match(/^\d+(\.\d+)?$/)) {
                utilities.duration = parseFloat(value);
            } else {
                utilities.duration = 0.5;
            }
        }

        if (key.startsWith('ease')) {
            const validEasingValues = [
                'power1',
                'power2',
                'power3',
                'power4',
                'back',
                'sine',
                'bounce',
                'expo',
                'circ',
                'elastic',
            ];

            if (value && validEasingValues.includes(value)) {
                utilities.ease = value;
            } else {
                utilities.ease = 'power1';
            }
        }

        if (key == 'fromX' && key.length > 0 && key.length <= 6) {
            if (value && value.match(/^(-)?\d+(\.\d+)?$/)) {
                utilities.fromX = parseFloat(value);
            } else {
                // default value is 0 if value is incorrect
                utilities.fromX = 0;
            }
        }

        if (key == 'fromY' && key.length > 0 && key.length <= 6) {
            if (value && value.match(/^(-)?\d+(\.\d+)?$/)) {
                utilities.fromY = parseFloat(value);
            } else {
                // default value is 0 if value is incorrect
                utilities.fromY = 0;
            }
        }

        if (key == 'fromScale' && key.length > 0 && key.length <= 11) {
            if (
                value &&
                value.match(/^(\d+(\.\d+)?|0\.\d+)$/) &&
                parseFloat(value) >= 0.1 &&
                parseFloat(value) <= 2
            ) {
                utilities.fromScale = parseFloat(value);
            } else {
                // default value is 1 if value is incorrect
                utilities.fromScale = 1;
            }
        }

        if (key == 'toScale' && key.length > 0 && key.length <= 9) {
            if (
                value &&
                value.match(/^(\d+(\.\d+)?|0\.\d+)$/) &&
                parseFloat(value) >= 0.1 &&
                parseFloat(value) <= 2
            ) {
                utilities.toScale = parseFloat(value);
            } else {
                // default value is 1 if value is incorrect
                utilities.toScale = 1;
            }
        }

        if (key == 'repeat' && key.length > 0 && key.length <= 7) {
            if (value && !isNaN(parseInt(value))) {
                utilities.repeat = parseInt(value);
            } else {
                // default value is 0 if value is incorrect
                utilities.repeat = 0;
            }
        }
    });
    return { base: base as BaseAnimations, utilities };
};

// Rest of file...
export const useAnimation = (prop: string) => {
    const ref = useRef(null);
    const { base, utilities } = parseAnimationProps(prop);

    useLayoutEffect(() => {
        const animationInstance = AnimationFunctions[base](ref.current, utilities);

        if (utilities.loop) {
            animationInstance.repeat(-1);
        }

        return () => {
            animationInstance.kill();
        };
    }, [base, utilities]);

    return ref;
};
