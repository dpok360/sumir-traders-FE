import React, { useState } from 'react';
import { Button } from '../ui/button';

const QuantitySlector = () => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" onClick={decrease}>
        -
      </Button>
      <span className="text-lg font-medium">{quantity}</span>
      <Button variant="outline" onClick={increase}>
        +
      </Button>
    </div>
  );
};

export default QuantitySlector;
