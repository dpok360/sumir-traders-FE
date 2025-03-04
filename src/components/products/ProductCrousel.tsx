'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const mockDetails = {
  id: 2,
  name: 'Organic Bananas',
  category: 'Fruits',
  description: 'Organic banana from Nepal',
  price: 1.49,
  quantity: 15,
  images: [
    'https://www.merokirana.com/archive/KiranaProduct/14364249eab64a75b2d9f260a0fb6aba.jpg',
    'https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?q=80&w=3687&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ,
  ],
};

export default function ProductCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-[80%] max-w-2xl mx-auto !p-4 ">
      <Carousel className="">
        <CarouselContent className="">
          <CarouselItem className="flex justify-center !p-6">
            <Image
              src={mockDetails.images[selectedIndex]}
              width={300}
              height={300}
              alt={`${mockDetails.name}`}
              className="rounded-lg h-100 w-100 "
            />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
