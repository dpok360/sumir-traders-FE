import React from 'react';
import { navLinks } from '@/constants/constants';
import Link from 'next/link';
const HeaderLinks = () => {
  return (
    <nav>
      <ul className="flex gap-2 h-24 !m-2 !pr-12">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderLinks;
