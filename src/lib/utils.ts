import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum AuthFormType {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}

export const authFormSchema = (type: AuthFormType) =>
  z.object({
    //sign up
    firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
    address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
    city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
    number:
      type === 'sign-in' ? z.string().optional() : z.string().min(10).max(15),

    //both
    email: z.string().email(),
    password: z.string().min(8),
  });
