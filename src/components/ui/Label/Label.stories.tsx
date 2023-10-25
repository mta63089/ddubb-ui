import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui';

const meta: Meta<typeof Label> = {
    title: 'Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Label',
    },
    argTypes: {
        children: {
            control: { disabled: true },
        },
        htmlFor: {
            options: ['textarea', 'select', 'switch'],
            control: { type: 'radio' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
    args: {},
};
