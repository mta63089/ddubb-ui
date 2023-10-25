// src/components/ui/Alert/Alert.stories.tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
    RocketIcon,
    ResetIcon,
    QuestionMarkCircledIcon,
    ExclamationTriangleIcon,
    ExitIcon,
    CrossCircledIcon,
    AccessibilityIcon,
    InfoCircledIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/lib/animations';

const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                destructive:
                    'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
                info: 'border-info text-info [&>svg]:text-info',
                warning: 'border-warning text-warning [&>svg]:text-warning',
                success: 'border-success text-success [&>svg]:text-success',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

const iconMap = {
    rocket: RocketIcon,
    reset: ResetIcon,
    question: QuestionMarkCircledIcon,
    warning: ExclamationTriangleIcon,
    exit: ExitIcon,
    cross: CrossCircledIcon,
    accessibility: AccessibilityIcon,
    info: InfoCircledIcon,
};

const iconSizeMap = {
    xs: 'w-2 h-2',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
};

interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    iconName?: keyof typeof iconMap;
    iconSize?: keyof typeof iconSizeMap;
    animation?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant, iconName, iconSize, animation = 'slideUp', ...props }, ref) => {
        const animRef = useAnimation(animation || '');
        const Icon = iconName ? iconMap[iconName] : null;
        const IconSize = Icon ? (iconSize ? iconSizeMap[iconSize] : iconSizeMap['md']) : null;
        return (
            <div
                ref={ref || animRef}
                role="alert"
                className={cn(alertVariants({ variant }), className)}
                {...props}
            >
                {Icon && <Icon className={cn(IconSize)} />}
                {props.children}
            </div>
        );
    },
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5
            ref={ref}
            className={cn('mb-1 font-medium leading-none tracking-tight', className)}
            {...props}
        />
    ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };
