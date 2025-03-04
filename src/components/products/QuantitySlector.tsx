'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';

const QuantitySlector = () => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  return (
    <div className="flex justify-between  border rounded-4xl w-34 overflow-clip">
      <Button
        variant="ghost"
        className="border-r w-8 rounded-none"
        onClick={decrease}
      >
        -
      </Button>
      <span className="text-lg font-bold flex justify-center items-center">
        {quantity}
      </span>
      <Button
        variant="ghost"
        className="border-l w-8 rounded-none"
        onClick={increase}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySlector;
