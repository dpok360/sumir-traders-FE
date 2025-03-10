import React, { useState } from 'react';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';
import CartItems from './CartItems';
import CheckoutButton from '../checkout/CheckoutButton';

const subtotal = 200;
const totalItems = 4;

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CartIcon onClick={() => setIsOpen(true)} />
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="uppercase font-bold text-xl">Your Cart</h2>
        <div
          className="text-black !my-2 bg-white rounded-xl border-5 border-black dark:text-white dark:bg-black dark:border-2 dark:border-white
"
        />
        <CartItems />
        <div className="flex justify-between items-center !m-3">
          <h3 className="uppercase text-sm font-bold ">
            subtotal({totalItems} items)
          </h3>
          <p className="font-semibold">NPR {subtotal}</p>
        </div>
        <CheckoutButton />
      </CartDrawer>
    </div>
  );
};

export default Cart;
