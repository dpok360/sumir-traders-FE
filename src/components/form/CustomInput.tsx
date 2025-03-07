'use client';

import { z } from 'zod';
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Control, FieldPath } from 'react-hook-form';
import { Input } from '../ui/input';
import { authFormSchema, AuthFormType } from '@/lib/utils';

const formSchema = authFormSchema(AuthFormType.SignUp);

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  //label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class rounded-none border-black !px-6 !py-6"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
