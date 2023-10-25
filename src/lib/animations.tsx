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
};

const AnimationFunctions: Record<
  BaseAnimations,
  (element: any, utilities: UtilityParams) => gsap.core.Tween
> = {
  fade: (element, { duration, ease }) =>
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration, ease }),
  slide: (element, { duration, ease }) =>
    gsap.fromTo(element, { x: '-100%' }, { x: '0%', duration, ease }),
  spin: (element, { duration, ease }) => gsap.to(element, { rotation: 360, duration, ease }),
  zoom: (element, { duration, ease }) =>
    gsap.fromTo(element, { scale: 0 }, { scale: 1, duration, ease }),
  grow: (element, { duration, ease }) =>
    gsap.fromTo(element, { scale: 0 }, { scale: 1, duration, ease }),
  shrink: (element, { duration, ease }) =>
    gsap.fromTo(element, { scale: 1 }, { scale: 0, duration, ease }),
  flip: (element, { duration, ease }) => gsap.to(element, { rotationY: 180, duration, ease }),
  pulse: (element, { duration, ease }) =>
    gsap.to(element, { scale: 1.2, yoyo: true, repeat: 1, duration, ease }),
  wobble: (element, { duration, ease }) =>
    gsap.fromTo(element, { x: '-30px' }, { x: '30px', repeat: 1, yoyo: true, duration, ease }),
  swing: (element, { duration, ease }) =>
    gsap.to(element, { rotation: 30, yoyo: true, repeat: 1, duration, ease }),
  tada: (element, { duration, ease }) =>
    gsap.fromTo(element, { scale: 0, rotation: 0 }, { scale: 1, rotation: 360, duration, ease }),
};

export const parseAnimationProps = (
  prop: string,
): { base: BaseAnimations; utilities: UtilityParams } => {
  const [base, ...params] = prop.split('-');

  let utilities: UtilityParams = { duration: 1, ease: 'none', loop: false };

  params.forEach((param) => {
    // TODO: this is pretty sloppy for a start but it works for now
    // the main things that need to be done are creating a smarter regex/parsing function for the splitting
    // so that I can allow users to pass in things without extra dashes in some cases
    // I imagine it sort of like tailwind where the user could pass in something like this:
    // <SomeElement animation:{"fade in 4.2s x200 y50"} />
    // Later I can add the ability to add multiple base functions but the goal is to get a solid
    // utility framework working first for this
    const [key, value] = param.split('-');
    if (key === 'duration') {
      utilities.duration = parseFloat(value);
    }
    if (key === 'ease') {
      utilities.ease = value;
    }
    if (key === 'loop') {
      utilities.loop = true;
    }
  });

  return { base: base as BaseAnimations, utilities };
};

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
