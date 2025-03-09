import React from 'react';
import OrderedItems from './OrderedItems';
import OrderedTotal from './OrderedTotal';

const OrderSummary = () => {
  return (
    <>
      <p className="text-xl !my-6 text-gray-600 font-extrabold uppercase ">
        Order summary
      </p>
      <div className="bg-gray-100">
        <OrderedItems />
        <OrderedTotal />
      </div>
    </>
  );
};

export default OrderSummary;
