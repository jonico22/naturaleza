import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Didact_Gothic  } from 'next/font/google'
import localFont from 'next/font/local'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const oswald_font = localFont({
  src :[
      {
        path: '../styles/Oswald-Bold.ttf',
      }
  ] 
})
export const didact_gothic = Didact_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-didact_gothic',
})