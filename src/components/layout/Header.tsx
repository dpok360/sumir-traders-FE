'use client';
import React from 'react';
import Search from '../search/SearchInput';
import Logo from '../Icons/Logo';

import UserNav from '../user/UserNav';
import Cart from '../cart/Cart';
const Header = () => {
  return (
    <div className="flex justify-center items-center gap-30 shadow-sm  bg-white border fixed top-0 left-0 w-full z-10">
      <div className="flex items-center gap-14">
        <Logo />
        <Search />
      </div>
      <div className="flex gap-4">
        <Cart />
        <UserNav />
      </div>
    </div>
  );
};

export default Header;
