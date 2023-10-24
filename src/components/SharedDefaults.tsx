/* eslint-disable @next/next/no-head-element */
// src/components/SharedDefaults.tsx
import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { ThemeProvider } from './ThemeProvider';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const SharedDefaults = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn('dark bg-background font-sans antialiased', fontSans.variable)}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </div>
  );
};
