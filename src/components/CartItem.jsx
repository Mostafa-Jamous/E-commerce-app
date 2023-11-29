import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartItem = ({ cart }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="min-h-[100px] my-3 flex items-center gap-2 border-b border-b-gray-400">
      <Link className="" to={`/product/${cart.id}`}>
        <img className="h-[80px] w-[80px]" src={cart.image} alt="" />
      </Link>
      <div className="w-full">
        <Link className="" to={`/product/${cart.id}`}>
          <h1 className="uppercase font-semibold hover:underline">
            {cart.title}
          </h1>
        </Link>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 w-fit mt-2">
            <button
              onClick={() => decreaseAmount(cart.id)}
              className="border py-1 hover:bg-red-500 hover:text-white duration-300 border-gray-700 rounded-2xl px-2 flex justify-center items-center text-2xl"
            >
              <AiOutlineMinus />
            </button>
            <h1 className="text-xl bg-slate-700 text-white rounded-full py-1 px-2">
              {cart.amount}
            </h1>
            <button
              onClick={() => increaseAmount(cart.id)}
              className="border py-1 hover:bg-green-500 hover:text-white duration-300 border-gray-700 rounded-2xl px-2 flex justify-center items-center text-2xl"
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="flex justify-between w-full items-center">
            <h1 className="text-[#777]">$ {cart.price}</h1>
            <h1 className="font-semibold text-lg">
              {`    $ ${parseFloat(cart.price * cart.amount).toFixed(2)}`}
            </h1>
          </div>
          <FiTrash2
            onClick={() => removeFromCart(cart.id)}
            className="ml-1 cursor-pointer hover:text-red-600 duration-300"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
