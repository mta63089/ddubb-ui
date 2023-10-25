import { Meta, StoryObj } from '@storybook/react';
import { Label, Switch } from '@/components/ui';

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            controls: { disabled: true },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchStory: Story = {
    args: {
        children: (
            <div>
                <Label htmlFor="switch">Here is the Switch Label</Label>
            </div>
        ),
    },
};
