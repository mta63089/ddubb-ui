import { Meta, StoryObj } from '@storybook/react';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { Select } from '@radix-ui/react-select';

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
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

export const SelectStory: Story = {
    args: {
        children: (
            <>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </>
        ),
    },
};
