import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchInput = () => {
  {
    return (
      <div className="flex justify-between items-center !pt-6 !ml-46">
        <div className="relative">
          <Search className="absolute left-[640px] top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            type="text"
            placeholder="search for products"
            className="bg-gray-100 w-2xl h-12 !p-4 !m-4"
          />
        </div>

        <Button
          type="submit"
          className="!px-4 h-12  bg-gray-100 shadow-2xs rounded-md hover:cursor-pointer hover:border-1"
          variant="secondary"
        >
          Search
        </Button>
      </div>
    );
  }
};

export default SearchInput;
