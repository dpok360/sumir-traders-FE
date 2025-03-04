import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="flex justify-center items-center text-2xl ">
        <p className="!ml-10">Logo</p>
      </div>
    </Link>
  );
};

export default Logo;
