import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = (products || []).find((item) => {
    return item.id === parseInt(id);
    console.log(product);
  });

  if (!product) {
    return (
      <div className="flex justify-center items-center text-4xl font-light h-screen">
        loading ...
      </div>
    );
  }
  return (
    <div className="h-screen flex justify-center items-center mt-10">
      <div className="container w-[90%] mx-auto pr-2 bg-secondary rounded-2xl overflow-hidden justify-center items-center flex max-md:flex-col gap-5">
        <img
          className="max-w-[400px] lg:max-w-[600px] lg:max-h-[600px] max-lg:rounded-3xl max-lg:mt-3 max-lg:mx-auto"
          src={product.image}
          alt=""
        />
        <div className="max-lg:text-center max-lg:mx-auto">
          <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
          <h2 className="text-lg mb-1 text-red-700 font-medium">
            $ {product.price}
          </h2>
          <p className="text-lg leading-6 mb-4">{product.description}</p>
          <button
            className="bg-gradient-to-r from-blue-900 to-blue-500 max-lg:mb-4 text-white text-lg font-semibold px-4 py-2 hover:opacity-80"
            onClick={() => addToCart(product, product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
