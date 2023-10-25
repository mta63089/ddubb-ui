import { gsap, Power2 } from 'gsap';
import { useLayoutEffect, useRef, MutableRefObject } from 'react';

const fadeLeft: AnimationFunction = (ref) => {
  return gsap.fromTo(ref.current, { opacity: 0, x: '-100%' }, { opacity: 1, x: '0%', duration: 1 });
};

const fadeRight: AnimationFunction = (ref) => {
  return gsap.fromTo(ref.current, { opacity: 0, x: '100%' }, { opacity: 1, x: '0%', duration: 1 });
};

const slideUp: AnimationFunction = (ref) => {
  return gsap.fromTo(ref.current, { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1 });
};

const zoomIn: AnimationFunction = (ref) => {
  return gsap.fromTo(
    ref.current,
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1, ease: Power2.easeInOut },
  );
};

const rotate: AnimationFunction = (ref) => {
  return gsap.fromTo(ref.current, { rotation: 0 }, { rotation: 360, duration: 1 });
};

type AnimationFunction = (ref: MutableRefObject<null>) => gsap.core.Tween | gsap.core.Timeline;

const animationMap = {
  fadeLeft,
  fadeRight,
  slideUp,
  zoomIn,
  rotate,
};

export type Animations = keyof typeof animationMap;

export const useAnimation = (animation: Animations) => {
  const ref = useRef(null);
  const animationInstance = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    animationInstance.current = animationMap[animation](ref);

    return () => {
      animationInstance.current?.kill();
    };
  }, [animation]);

  return ref;
};
