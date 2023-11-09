import React, { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const productsList = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    productsList();
  }, []);
  return (
    <div>
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
