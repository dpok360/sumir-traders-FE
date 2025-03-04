import AuthForm from '@/components/form/AuthForm';
import React from 'react';

const SignUp = async () => {
  return (
    <section className="flex justify-center items-center w-full h-full ">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
