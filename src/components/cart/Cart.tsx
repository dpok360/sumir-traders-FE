import React, { useState } from 'react';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';
import CartItems from './CartItems';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CartIcon onClick={() => setIsOpen(true)} />
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="uppercase font-bold text-xl">Your Cart</h2>
        <CartItems />
      </CartDrawer>
    </div>
  );
};

export default Cart;
