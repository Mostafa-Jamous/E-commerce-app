import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className=" mt-9">
      <Hero />
      <div className="container mx-auto py-10 grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products?.map((item) => {
          return <Product product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
