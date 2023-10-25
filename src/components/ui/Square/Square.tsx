// src/components/Square/Square.tsx
import React from 'react';
import { Animations, useAnimation } from '@/lib/animations';
import { cn, randomColor } from '@/lib/utils';

type SquareProps = {
  children?: React.ReactNode;
  animationType?: Animations;
};

const Square: React.FC<SquareProps> = ({ children = '', animationType = 'slideUp' }) => {
  const ref = useAnimation(animationType);

  return (
    <div ref={ref} className={cn(randomColor(), 'h-24 w-24 items-center text-center align-middle')}>
      {children}
    </div>
  );
};

export default Square;
