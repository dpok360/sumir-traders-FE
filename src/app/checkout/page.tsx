import Checkout from '@/components/checkout/Checkout';
import OrderSummary from '@/components/order/OrderSummary';
import React from 'react';

const ChekoutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container !mx-auto !mt-20 ">
      <div className="!p-10 ">
        <Checkout type="" />
      </div>
      <div className="!p-10 ">
        <OrderSummary />
      </div>
    </div>
  );
};

export default ChekoutPage;
