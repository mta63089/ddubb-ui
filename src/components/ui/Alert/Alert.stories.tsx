import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta: Meta<typeof Alert> = {
    title: 'Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        children: {
            controls: { disabled: true },
        },
        animation: {
            control: { disabled: true },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconName: 'info',
        animation: 'fade ease-bounce duration-2',
        children: (
            <>
                <AlertTitle>{'Did you know?'}</AlertTitle>
                <AlertDescription>{'That you are awesome That is all.'}</AlertDescription>
            </>
        ),
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        animation: 'slide ease-power1',
        iconName: 'warning',
        children: (
            <>
                <AlertTitle>{'Warning'}</AlertTitle>
                <AlertDescription>
                    {'Your session has expired. Please log in again'}
                </AlertDescription>
            </>
        ),
    },
};
