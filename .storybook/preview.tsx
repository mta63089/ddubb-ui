// .storybook/preview.tsx
import * as React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { SharedDefaults } from '../src/components/SharedDefaults';

const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
  (Story) => (
    <SharedDefaults>
      <Story />
    </SharedDefaults>
  ),
];

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [...decorators],
};
