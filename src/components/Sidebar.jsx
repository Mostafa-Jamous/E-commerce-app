import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } z-50 shadow-2xl overflow-y-scroll px-4 py-2 fixed top-0 w-full md:w-2/3 lg:w-1/2 xl:w-[40%] h-full bg-white duration-300`}
    >
      <div className="flex justify-between py-2 border-b border-b-gray-700">
        <AiOutlineClose
          onClick={handleClose}
          className="cursor-pointer hover:text-red-500 duration-300"
          size={25}
        />
        <h1 className="text-lg font-semibold">Shopping Bag ({itemAmount})</h1>
      </div>
      {cart.map((item) => {
        return <CartItem cart={item} key={item.id} />;
      })}
      {cart.length > 0 && (
        <div>
          <div className="flex justify-between items-center my-2">
            <h1 className="flex gap-1 items-center uppercase font-semibold">
              <span>total:</span>
              <span>$ {parseFloat(total).toFixed(2)}</span>
            </h1>
            <div
              onClick={clearCart}
              className="bg-red-500 cursor-pointer p-2 hover:bg-red-600 duration-300 rounded-xl"
            >
              <FiTrash2 color="white" size={20} />
            </div>
          </div>
          <a
            href={"/"}
            className="bg-gray-300 flex p-4 my-3 justify-center hover:bg-gray-400 items-center text-primary w-full font-medium"
          >
            View cart
          </a>
          <a
            href={"/"}
            className="bg-primary flex p-4 my-3 justify-center hover:bg-primary/80 items-center text-white w-full font-medium"
          >
            Checkout
          </a>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
