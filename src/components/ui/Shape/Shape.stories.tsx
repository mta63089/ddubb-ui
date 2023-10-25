import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Shape } from './Shape';

type ShapePropsAndCustomArgs = React.ComponentProps<typeof Shape> & {
    baseAnimation?: any;
    animationDuration?: any;
    animationX?: any;
    animationY?: any;
    animationEase?: any;
    animationLoop?: any;
};

const meta: Meta<ShapePropsAndCustomArgs> = {
    component: Shape,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        baseAnimation: {
            options: ['fade', 'slide', 'spin', 'zoom', 'grow', 'shrink', 'flip', 'pulse'],
            control: {
                type: 'radio',
            },
            defaultValue: 'fade',
        },
        animationDuration: {
            control: { type: 'range', min: 0.1, max: 10, step: 0.1, default: 0.5 },
            defaultValue: 0.5,
        },
        animationLoop: {
            control: { type: 'boolean', default: true },
            defaultValue: true,
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            control: {
                type: 'radio',
                default: 'md',
            },
        },
        circle: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
    },
};

export default meta;
type Story = StoryObj<ShapePropsAndCustomArgs>;

// TODO: add more of the controls
const animResolver = (baseAnimation: string, animationDuration: number, animationLoop: boolean) => {
    const r = `${baseAnimation} duration-${animationDuration || 0.5} ${
        animationLoop ? 'loop' : ''
    }`;
    console.log(r);
    return r;
};

// TODO: Write a ton of tests for this because it seems like it works but I dont trust it
// Going to need to add a ton to this and possibly abstract the file to make it easily callable later
// For all base animations
export const Fade: Story = {
    render: (args) => {
        const { baseAnimation, animationDuration, animationLoop } = args;
        const animResolverResult = animResolver(baseAnimation, animationDuration, animationLoop);
        return <Shape {...args} animation={animResolverResult} />;
    },
    args: {},
};
