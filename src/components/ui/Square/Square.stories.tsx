'// src/components/ui/Square.stories.tsx';
import { Meta, StoryObj } from '@storybook/react';
import Square from './Square';

const meta = {
  title: 'Animation Testing Square',
  component: Square,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FadeLeft: Story = {
  args: {
    children: 'fadeLeft',
    animationType: 'fadeLeft',
  },
};

export const FadeRight: Story = {
  args: {
    children: 'fadeRight',
    animationType: 'fadeRight',
  },
};

export const SlideUp: Story = {
  args: {
    children: 'slideUp',
    animationType: 'slideUp',
  },
};

export const ZoomIn: Story = {
  args: {
    children: 'zoomIn',
    animationType: 'zoomIn',
  },
};

export const Rotate: Story = {
  args: {
    children: 'rotate',
    animationType: 'rotate',
  },
};
