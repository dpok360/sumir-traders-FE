import React from 'react';
import Search from '../search/SearchInput';
import Logo from '../logo/Logo';

import UserDropdownMenu from '../account/UserDropdownMenu';
import Cart from '../cart/Cart';
const Header = () => {
  return (
    <div className="flex justify-between items-center border  bg-gray-100 shadow-xl fixed top-0 left-0 w-full z-10">
      <Logo />
      <Search />
      <Cart />
      <UserDropdownMenu />
    </div>
  );
};

export default Header;
