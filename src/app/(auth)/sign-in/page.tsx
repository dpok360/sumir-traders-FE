import AuthForm from '@/components/form/AuthForm';
import React from 'react';

const SignIN = () => {
  return (
    <section className="flex justify-center items-center w-full h-full gap-10">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIN;
