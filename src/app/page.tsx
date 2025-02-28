import Header from '@/components/Header';

import React from 'react';
import ItemsCard from '@/components/ItemsCard';

const Home = () => {
  return (
    <div className="bg-white ">
      <Header />
      <div className="!mx-50 !my-8">
        <ItemsCard />
      </div>
    </div>
  );
};

export default Home;
