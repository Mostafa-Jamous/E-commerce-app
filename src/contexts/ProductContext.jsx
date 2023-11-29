import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const productsList = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((data) => setProducts(data.data));
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
