import { type ClassValue, clsx } from 'clsx';

/**
 * Merge class names
 * @param inputs - Class names
 * @returns Merged class names
 * @example
 * cn('bg-red-500', 'text-white', 'p-4') // 'bg-red-500 text-white p-4'
 * cn({ 'bg-red-500': true, 'text-white': true, 'p-4': true }) // 'bg-red-500 text-white p-4'
 * cn(true && 'bg-red-500', false && 'text-white', 'p-4') // 'bg-red-500 p-4'
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
