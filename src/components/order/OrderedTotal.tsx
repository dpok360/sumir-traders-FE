import React from 'react';

//TODO: make price dynamic

const OrderedTotal = () => {
  return (
    <section className="total-price flex flex-col gap-2 bg-gray-100 p-4 rounded ">
      <div className="!my-6 !mx-10 flex flex-col gap-2">
        <div className="flex justify-between w-full">
          <p className="font-semibold text-md text-gray-700">Sub Total</p>
          <p className="font-semibold text-md text-gray-700">NPR 120</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="font-semibold text-md text-gray-700">Delivery</p>
          <p className="font-semibold text-md text-gray-700">NPR 100</p>
        </div>
        <div className="flex justify-between w-full border-t !pt-2 !mt-1">
          <p className="font-semibold text-xl text-gray-700">Total</p>
          <p className="font-semibold text-xl text-gray-700">NPR 220</p>
        </div>
      </div>
    </section>
  );
};

export default OrderedTotal;
