import { items } from '@/constants/constants';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const ItemsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-gray-50">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-60 h-80 !p-4  shadow-lg flex flex-col items-center"
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={120}
            height={120}
            className="w-24 h-24 object-cover"
          />
          <h3 className="text-xl font-bold !mt-4 text-gray-500 line-clamp-2">
            {item.name}
          </h3>
          <p className="text-lg font-semibold text-red-600">NPR {item.price}</p>
          <p className="text-sm text-gray-500">Available: {item.quantity}</p>
          <Button
            variant="outline"
            size="lg"
            className="!px-6 !m-4 bg-gray-100 font-bold hover:cursor-pointer"
          >
            Add to cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemsCard;
