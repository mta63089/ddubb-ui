import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

export default { component: Alert };
const meta = {
  title: 'Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

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
    children: (
      <>
        <AlertTitle>{'this is a default alert title'}</AlertTitle>
        <AlertDescription>{'this is a default alert description'}</AlertDescription>
      </>
    ),
  },
};
