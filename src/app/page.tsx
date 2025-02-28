import Header from '@/components/layout/Header';
import ItemsCard from '@/components/product/ItemsCard';

import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="!mx-50 !my-8 !pt-34">
        <ItemsCard />
      </div>
    </div>
  );
};

export default Home;
