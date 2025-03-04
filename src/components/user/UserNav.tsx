import Link from 'next/link';
import { User } from 'lucide-react';

const UserNav = () => {
  return (
    <Link href={'/sign-in'}>
      <div className=" flex items-center justify-center w-12 h-12">
        <User className=" w-8 h-8 fill-current text-black  " />
      </div>
    </Link>
  );
};

export default UserNav;
