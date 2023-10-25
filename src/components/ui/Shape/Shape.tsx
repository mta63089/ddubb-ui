import React, { HTMLAttributes, forwardRef } from 'react';
import { useAnimation } from '@/lib/animations';
import { cn, randomColor } from '@/lib/utils';

export const ShapeSizes = {
    xs: 'h4 w-4',
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
    '2xl': 'h-32 w-32',
};

export interface ShapeProps extends HTMLAttributes<HTMLButtonElement> {
    animation?: string;
    size?: keyof typeof ShapeSizes;
    circle?: boolean;
    onClick?: () => void;
}

const Shape = forwardRef<HTMLButtonElement, ShapeProps>(
    ({ animation, className, circle = false, size = 'md', ...props }, ref) => {
        const animRef = useAnimation(animation || '');

        return (
            <button
                ref={ref || animRef}
                className={cn(
                    randomColor(),
                    ShapeSizes[size],
                    className,
                    circle ? 'rounded-full' : '',
                )}
                {...props}
            />
        );
    },
);
Shape.displayName = 'Shape';

export { Shape };
