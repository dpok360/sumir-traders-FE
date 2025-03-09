import { itemsInCart } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OrderedItems = () => {
  return (
    <section className="order-summary !p-8 w-full bg-gray-100 !my-6">
      <div className="max-h-96 overflow-y-auto !pr-2">
        <div className="flex flex-col gap-1">
          {itemsInCart.map((item) => (
            <Link
              key={item.id}
              href={`/${item.category}/${item.name}/${item.id}`}
            >
              <div className="cart-details gap-1 !py-2 !px-8 scroll-smooth flex items-center hover:cursor-pointer bg-white rounded-sm shadow-2xl">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="w-15 h-15 object-cover border shadow-lg !m-2"
                />
                <div className="check-out-details flex flex-1 justify-between items-center">
                  <h3 className="text-sm text-black line-clamp-2 max-w-xs">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-black">
                    NPR {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderedItems;
