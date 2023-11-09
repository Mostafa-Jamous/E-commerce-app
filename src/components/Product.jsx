import React, { useContext } from "react";
import { AiFillEye, AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="w-full h-full relative group bg-secondary rounded-2xl overflow-hidden border-2 border-[#e4e4e4] p-1 shadow-lg ">
        <div className="absolute z-20 bg-primary/60 p-2 rounded-xl group-hover:right-5 duration-300 transition-all flex-col flex gap-2 -right-full top-5">
          <button
            onClick={() => addToCart(product, product.id)}
            className="flex p-1 rounded-lg justify-center items-center bg-red-600 hover:bg-red-700 py-2 px-4 text-white text-4xl"
          >
            <AiOutlinePlus />
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="flex p-1 rounded-lg justify-center items-center bg-white hover:bg-gray-200 py-2 px-4 text-4xl">
              <AiFillEye />
            </button>
          </Link>
        </div>
        <img
          className="rounded-2xl overflow-hidden z-0 w-full h-[300px] group-hover:grayscale transition-all duration-300"
          src={product.image}
          alt=""
        />
        <h1 className="capitalize my-1">{product.category}</h1>
        <Link to={`/product/${product.id}`}>
          <h1 className="font-bold text-lg mb-5 hover:underline">
            {product.title}
          </h1>
        </Link>
        <div className="flex justify-between px-2 items-center absolute w-full bottom-0">
          <h3 className="text-slate-800 font-semibold">$ {product.price}</h3>
          <h3 className="flex items-center text-sm gap-1 ">
            {product.rating.rate}
            <AiFillStar color="gold" size={15} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
