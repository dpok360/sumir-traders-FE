import React from 'react';
import { Input } from '@/components/ui/input';
//import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
//import CircularArrowLoader from '../loader/CircularArrowLoader';

//TODO: make loader render when fetching /seraching in db

const SearchInput = () => {
  {
    return (
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-[640px] top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            type="text"
            placeholder="SEARCH..."
            className=" border-black text-black rounded-none w-2xl h-12 !p-4 !m-4"
          />
          {/* <CircularArrowLoader /> */}
        </div>

        {/* <Button
          type="submit"
          className="!px-4 h-12 border-black text-white bg-black  shadow-2xs rounded-none hover:cursor-pointer "
          variant="outline"
        >
          Search
        </Button> */}
      </div>
    );
  }
};

export default SearchInput;
