import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import CircularArrowLoader from '../loader/CircularArrowLoader';

//TODO: make loader render when fetching

const CheckoutButton = () => {
  return (
    <Link href={'/checkout'}>
      <Button
        variant="ghost"
        className="w-full rounded-none border border-black bg-black text-white !py-6 hover:cursor-pointer"
      >
        <p className="uppercase text-xl font-semibold flex justify-center items-center">
          checkout&rarr;
        </p>

        {<CircularArrowLoader size="sm" />}
      </Button>
    </Link>
  );
};

export default CheckoutButton;
