import { items } from '@/constants/constants';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

//TODO --> make cards links
//TODO --> on hover card should pop
//TODO -->  cart button adds items to cart
//TODO --> decrese available items when items is added to cart

const ItemsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-gray-50  ">
      {items.map((item) => (
        <Link key={item.id} href={`/${item.category}/${item.name}/${item.id}`}>
          <div
            key={item.id}
            className="w-60 h-90 !p-4  flex flex-col items-center hover:bg-gray-50 hover:shadow-lg hover:cursor-pointer"
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={120}
              height={120}
              className="w-30 h-30 object-cover"
            />

            <h3 className="text-xl font-bold !mt-4 text-gray-500 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-lg font-semibold text-red-600">
              NPR {item.price}
            </p>
            <p className="text-sm text-gray-500">Available: {item.quantity}</p>
            <div className="flex items-center relative  ">
              <ShoppingBag className="absolute left-6  z-10 h-5 w-5 top-1/2 transform -translate-y-1/2    text-gray-100 transition-colors" />
              <Button
                variant="outline"
                size="lg"
                className="!px-8 !m-4 bg-gray-100 rounded-sm font-bold hover:cursor-pointer hover:bg-black hover:text-white"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemsCard;
