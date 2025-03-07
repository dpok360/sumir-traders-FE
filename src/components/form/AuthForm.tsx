'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomInput from './CustomInput';
import { authFormSchema, AuthFormType } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
//import { signIn, signUp } from '@/lib/actions/user.actions';

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  //TODO: implement signIn / signUp actions later
  const signIn = async () => {
    console.log('sign in');
  };

  const signUp = async () => {
    console.log('sign up');
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // This will be type-safe and validated.

    setIsLoading(true);

    try {
      //Sign up with Appwrite & create plaid link token
      const userData = {
        firstName: data.firstName!,
        lastName: data.lastName!,
        address1: data.address1!,
        city: data.city!,
        email: data.email,
        password: data.password,
      };

      if (type === 'sign-up') {
        const newUser = await signUp(userData);
        setUser(newUser);
      }

      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push('/');
        }
      }
    } catch (error) {
      console.log('Error during submit', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form !pt-26  flex flex-col   items-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[26rem]"
        >
          {type === 'sign-up' && (
            <>
              <p className="font-bold text-2xl !m-6 text-gray-600 flex justify-center items-center uppercase">
                CREATE AN ACCOUNT
              </p>
              <div className="flex flex-col justify-center gap-3">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  placeholder="First Name"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  placeholder="Last Name"
                />
                <CustomInput
                  control={form.control}
                  name="email"
                  placeholder="Email"
                />

                <CustomInput
                  control={form.control}
                  name="address1"
                  placeholder="Address"
                />

                <CustomInput
                  control={form.control}
                  name="city"
                  placeholder="City"
                />
                <CustomInput
                  control={form.control}
                  name="number"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  placeholder="Password"
                />
              </div>
            </>
          )}

          {type == 'sign-in' && (
            <div className="flex flex-col justify-center gap-4">
              <p className="font-bold text-2xl !m-6 text-gray-600 flex justify-center items-center  uppercase">
                LOGIN
              </p>
              <CustomInput
                control={form.control}
                name="email"
                placeholder="Email"
              />
              <CustomInput
                control={form.control}
                name="password"
                placeholder="Password"
              />
            </div>
          )}
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="form-btn !py-7 rounded-none uppercase !mt-6 text-xl font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === 'sign-in' ? (
                'login'
              ) : (
                'Sign Up'
              )}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600 !py-3">
          {type === 'sign-in'
            ? "Don't have an account?"
            : 'Already have an account?'}
        </p>
        <Link
          className="form-link"
          href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
        >
          {type === 'sign-in' ? (
            <p className="!py-3 font-bold text-gray-500">Sign Up</p>
          ) : (
            <p className="!py-3 font-bold text-gray-500">Sign In</p>
          )}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
