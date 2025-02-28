import React from 'react';
import Image from 'next/image';

//TODO:use this as props for cart items
//TODO: when cart is empty shows "your cart is empty"
const itemCount = 1;

const CartIcon = () => {
  return (
    <div className="relative cursor-pointer !mt-6">
      {/* Cart Icon from public folder */}
      <Image
        src="/cart.svg" // Since it's in public, just use "/cart.svg"
        alt="Cart"
        width={32}
        height={32}
        className="w-10 h-10"
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
