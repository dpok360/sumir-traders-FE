import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { itemsInCart } from '@/constants/constants';

const OrderSummary = () => {
  return (
    <div>
      <p className="text-xl !my-10   text-gray-600 font-extrabold uppercase">
        Order summary
      </p>
      <section className=" order-summary !p-8 flex flex-col gap-2 w-full bg-gray-100  !my-10 ">
        {itemsInCart.map((item) => (
          <Link
            key={item.id}
            href={`/${item.category}/${item.name}/${item.id}`}
          >
            <div
              key={item.id}
              className="cart-details gap-4 !p-4  flex  items-center  hover:cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={120}
                height={120}
                className="w-15 h-15 object-cover border shadow-lg !m-2"
              />
              <div className="check-out-details flex gap-20">
                <h3 className="text-sm  text-black line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-black">
                  NPR {item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
        <div className="total-price flex flex-col justify-evenly items-center border ">
          <p className="font-semibold text-xl text-gray-700 flex justify-evenly ">
            Sub Total: <span className="">NPR 120</span>
          </p>
          <p className="font-semibold text-xl text-gray-700 ">
            Delivey: <span className="">NPR 100</span>
          </p>
          <p className="font-semibold text-xl text-gray-700 ">
            Total: <span className="">NPR 120</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default OrderSummary;
