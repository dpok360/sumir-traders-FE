import React from 'react';
import { Button } from '../ui/button';

// type Props = {
//   product: { id: string; name: string; price: number };
// };

const AddToCart = () => {
  return (
    <Button
      variant="ghost"
      className="border border-black bg-black text-lg font-semibold text-white w-70 rounded-none hover:cursor-pointer !py-5"
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
