import React, { createContext } from "react";
import { useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
        {children}
      </SidebarContext.Provider>
    </div>
  );
};

export default SidebarProvider;
