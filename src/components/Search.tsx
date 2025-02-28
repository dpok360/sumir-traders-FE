import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Search = () => {
  {
    return (
      <div className="flex justify-between items-center !pt-6">
        <Input
          type="text"
          placeholder="search for products"
          className="bg-gray-200 w-2xl h-12 !p-4 !m-4"
        />
        <Button
          type="submit"
          className="!px-4 h-12  bg-gray-200 rounded-md hover:cursor-pointer hover:bg-gray-200"
          variant="secondary"
        >
          Search
        </Button>
      </div>
    );
  }
};

export default Search;
