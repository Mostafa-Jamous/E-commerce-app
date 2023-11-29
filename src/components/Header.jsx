import React, { useContext, useEffect, useState } from "react";
import logo from "../img/logo.svg";
import { BsBagFill } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(false) : setIsActive(true);
    });
  });

  return (
    <div
      className={`fixed z-50 w-full top-0 bg-gradient-to-r duration-300 ${
        isActive
          ? "from-blue-900 to-blue-500"
          : "from-blue-900/90 to-blue-500/90"
      }  `}
    >
      <div className="container mx-auto py-3 flex justify-between items-center">
        <Link to="/">
          <img className="w-10 cursor-pointer" src={logo} alt="" />
        </Link>
        <div className="relative">
          <BsBagFill
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer hover:opacity-50 duration-300"
            size={30}
          />
          <div className="absolute bg-red-600 text-white -bottom-3 -right-3 w-6 h-6 rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
