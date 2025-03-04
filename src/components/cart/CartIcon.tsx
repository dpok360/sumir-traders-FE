import React from 'react';
import Image from 'next/image';

//TODO:use this as props for cart items
//TODO: when cart is empty shows "your cart is empty"
const itemCount = 1;

const CartIcon = () => {
  return (
    <div className="relative cursor-pointer flex justify-center items-center h-12 top-1">
      <Image
        src="/cart.svg"
        alt="Cart"
        width={30}
        height={30}
        className="w-8 h-8"
      />

      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
