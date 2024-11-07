import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from '../../Context';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="text-4xl font-semibold text-gray-800">Our Products</h1>
      </div>
      <div className="relative w-80 mb-4">
        <input 
          type="text" 
          placeholder="Search a product"
          className="rounded-lg border-2 border-black w-full p-4 pr-10 focus:outline-none text-center"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;

