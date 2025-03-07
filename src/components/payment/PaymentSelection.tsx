import React from 'react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PaymentSelection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const paymentMethods = ['Cash', 'IME Pay', 'FonePay', 'Nepal Pay'];

  return (
    <div className="space-y-8 w-full !px-8 flex flex-col gap-4 ">
      <p className="text-xl !mb-2  text-gray-600 font-extrabold  uppercase ">
        Payment Method
      </p>
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto border-black ">
        {paymentMethods.map((method) => (
          <Card
            key={method}
            onClick={() => setSelected(method)}
            className={`rounded-sm border-black cursor-pointer transition-all ${
              selected === method
                ? 'text-white bg-black'
                : 'text-black bg-white'
            }`}
          >
            <CardContent className=" !p-3 text-center">{method}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelection;
