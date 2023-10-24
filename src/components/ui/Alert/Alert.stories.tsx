import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta = {
  title: 'Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'info',
    children: (
      <>
        <AlertTitle>{'this is a default alert title'}</AlertTitle>
        <AlertDescription>{'this is a default alert description'}</AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    iconName: 'warning',
    children: (
      <>
        <AlertTitle>{'this is a destruction alert title'}</AlertTitle>
        <AlertDescription>{'this is a default alert description'}</AlertDescription>
      </>
    ),
  },
};
