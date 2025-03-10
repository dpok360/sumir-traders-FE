import { itemsInCart } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import QuantitySlector from '../products/QuantitySlector';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';

const itemCount = 2;

const CartItems = () => {
  return (
    <section className="border-b">
      <div className="max-h-170 overflow-y-auto !p-2">
        <div className="flex flex-col gap-1">
          {itemsInCart.map((item) => (
            <div
              key={item.id}
              className="cart-details gap-2 !py-2 !px-8 scroll-smooth flex items-center hover:cursor-pointer bg-white  "
            >
              <Link href={`/${item.category}/${item.name}/${item.id}`}>
                <div className="relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="w-17 h-17 object-cover  !m-2"
                  />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white border border-gray-900 text-black text-md font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                      {itemCount}
                    </span>
                  )}
                </div>
              </Link>
              <div className="check-out-details flex flex-col flex-1 gap-4 justify-evenly items-center ">
                <h3 className="text-sm !py-2 font-semibold text-gray-700 line-clamp-2 max-w-xs">
                  {item.name}
                </h3>
                <div>
                  <QuantitySlector
                    size="w-24"
                    buttonSize="w-7"
                    textSize="text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 ">
                <Button
                  className="delete-cart-btn hover:bg-white  hover:cursor-pointer "
                  variant="ghost"
                >
                  <Trash className="w-4 h-4 " />
                </Button>
                <p className="text-sm font-semibold text-black">
                  NPR {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartItems;
