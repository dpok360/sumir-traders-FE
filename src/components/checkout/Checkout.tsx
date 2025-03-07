'use client';
import React from 'react';

import DeliveryForm from './DeliveryForm';
import PaymentSelection from '../payment/PaymentSelection';

const Checkout = () => {
  return (
    <div className=" !my-10 !ml-40 ">
      <PaymentSelection />
      <DeliveryForm type="" />
    </div>
  );
};

export default Checkout;
