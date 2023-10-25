import React, { useState } from 'react';
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
  title: 'Animation Playground',
  component: Shape,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    baseAnimation: {
      options: ['fade', 'slide', 'spin', 'zoom', 'grow', 'shrink', 'flip', 'pulse'],
    },
    animationDuration: {
      control: { type: 'range', min: 0.1, max: 10, step: 0.1 },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'radio',
      },
    },
    circle: {
      options: [true, false],
      control: {
        type: 'switch',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ShapePropsAndCustomArgs>;

// TODO: add more of the controls
const animResolver = (baseAnimation: string, animationDuration: number) => {
  return baseAnimation + ' ' + 's' + '-' + String(animationDuration);
};

// TODO: Write a ton of tests for this because it seems like it works but I dont trust it
// Going to need to add a ton to this and possibly abstract the file to make it easily callable later
// For all base animations
export const Fade: Story = {
  render: (args) => {
    const { baseAnimation, animationDuration } = args;
    const animResolverResult = animResolver(baseAnimation, animationDuration);
    return <Shape {...args} animation={animResolverResult} />;
  },
  args: {
    baseAnimation: 'fade',
    animationDuration: 1,
    size: 'md',
    circle: false,
  },
};
