import React from 'react';
import ProductCarousel from '@/components/products/ProductCrousel';

const mockDetails = {
  id: 2,
  name: 'Organic-Bananas',
  category: 'Fruits',
  description: 'Organic banana from nepal,',
  price: 1.49,
  quantity: 15,
  imageUrl:
    'https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
interface Params {
  params: {
    category: string;
    name: string;
    id: string;
  };
}

const Productpage = async ({ params }: Params) => {
  const { category, name } = await params;

  return (
    <div className="flex justify-between  !mt-36 h-screen">
      <div className=" w-1/2 flex justify-center ">
        <ProductCarousel />
      </div>
      <div className=" w-1/2 flex flex-col shadow-sm">
        <h1 className="text-3xl font-bold text-gray-700">{name}</h1>
        <p>{category}</p>
        <p>{mockDetails.description}</p>
        <p className="font-bold text-2xl">NPR {mockDetails.price}</p>
      </div>
    </div>
  );
};

export default Productpage;
