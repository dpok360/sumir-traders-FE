import React from 'react';
import { Form } from '../ui/form';
import CustomInput from '../form/CustomInput';
import { Button } from '../ui/button';
import { authFormSchema } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const DeliveryForm = ({ type }) => {
  const isLoading = false;
  const onSubmit = () => {};
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full !p-6 flex flex-col gap-2  "
        >
          <p className=" text-xl !mb-2  text-gray-600 font-extrabold uppercase">
            DELIVERY
          </p>

          <CustomInput
            control={form.control}
            name="email"
            placeholder="Email"
          />

          <div className="flex justify-between w-full gap-4">
            <div className="w-1/2">
              <CustomInput
                control={form.control}
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <CustomInput
                control={form.control}
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <CustomInput
            control={form.control}
            name="address1"
            placeholder="Address"
          />
          <div className="flex justify-between w-full gap-4">
            <div className="w-1/2">
              <CustomInput
                control={form.control}
                name="city"
                placeholder="city"
              />
            </div>
            <div className="w-1/2">
              <CustomInput
                control={form.control}
                name="province"
                placeholder="province"
              />
            </div>
          </div>
          <CustomInput
            control={form.control}
            name="number"
            placeholder="Mobile Number"
          />

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="form-btn !py-7 rounded-none uppercase !mt-6 text-xl hover:cursor-pointer"
              disabled={isLoading}
            >
              Place Order
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default DeliveryForm;
