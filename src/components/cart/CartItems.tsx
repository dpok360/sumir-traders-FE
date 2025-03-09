import { itemsInCart } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import QuantitySlector from '../products/QuantitySlector';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';

const CartItems = () => {
  return (
    <section className="border-b">
      <div className="max-h-150 overflow-y-auto !p-2">
        <div className="flex flex-col gap-1">
          {itemsInCart.map((item) => (
            <div
              key={item.id}
              className="cart-details gap-2 !py-2 !px-8 scroll-smooth flex items-center hover:cursor-pointer bg-white rounded-sm  "
            >
              <Link href={`/${item.category}/${item.name}/${item.id}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="w-17 h-17 object-cover  !m-2"
                />
              </Link>
              <div className="check-out-details flex flex-col flex-1 justify-between items-center border">
                <h3 className="text-sm font-semibold text-gray-700 line-clamp-2 max-w-xs">
                  {item.name}
                </h3>
                <div className="!m-3">
                  <QuantitySlector
                    size="w-24"
                    buttonSize="w-7"
                    textSize="text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 border">
                <Button
                  className="hover:bg-white hover:cursor-pointer "
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
