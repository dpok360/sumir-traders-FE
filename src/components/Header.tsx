import React from 'react';
import Search from './Search';
import Logo from './Logo';

import UserDropdownMenu from './UserDropdownMenu';
import Cart from './Cart';
const Header = () => {
  return (
    <div className="flex justify-between items-center border  bg-gary-100 shadow-xl">
      <Logo />
      <Search />
      <Cart />
      <UserDropdownMenu />
    </div>
  );
};

export default Header;
