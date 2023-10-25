import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * a random number generator helper
 * @param min minimum number
 * @param max maximum number
 * @returns number between min and max (inclusive)
 */
export function rng(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * random tailwind bg color generator
 * @returns a string with a random bg color and contrast compatable text color
 */
export function randomColor(): string {
  const colorList = [
    'bg-red-500 text-gray-50',
    'bg-yellow-400 text-gray-900',
    'bg-green-400 text-gray-900',
    'bg-blue-400 text-green-900',
    'bg-purple-600 text-gray-50',
    'bg-pink-400 text-gray-900',
    'bg-orange-600 text-gray-50',
    'bg-indigo-600 text-gray-50',
  ];
  return cn(colorList[rng(0, colorList.length - 1)]);
}
