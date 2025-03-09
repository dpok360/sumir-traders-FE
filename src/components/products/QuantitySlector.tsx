'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';

interface QuantitySelectorProps {
  size?: string;
  buttonSize?: string;
  textSize?: string;
}

const QuantitySlector: React.FC<QuantitySelectorProps> = ({
  size = 'w-30',
  buttonSize = 'w-8',
  textSize = 'text-xl',
}) => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className={`flex justify-between border border-black h-full  ${size}`}>
      <Button
        variant="ghost"
        className={`${buttonSize} h-full border-r border-black rounded-none`}
        onClick={decrease}
      >
        -
      </Button>
      <span
        className={`flex justify-center items-center ${textSize} w-10 text-center`}
      >
        {quantity}
      </span>
      <Button
        variant="ghost"
        className={`${buttonSize} h-full border-l border-black rounded-none`}
        onClick={increase}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySlector;
