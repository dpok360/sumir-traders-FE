import React from 'react';
import Search from './Search';
import HeaderBox from './HeaderBox';
const Header = () => {
  return (
    <div className="flex border w-full bg-slate-200">
      <Search />
    </div>
  );
};

export default Header;
