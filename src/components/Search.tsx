import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Search = () => {
  {
    return (
      <div className="flex items-center">
        <Input type="text" placeholder="search" className="bg-white" />
        <Button
          type="submit"
          className="hover:cursor-pointer"
          variant="outline"
        >
          Search
        </Button>
      </div>
    );
  }
};

export default Search;
