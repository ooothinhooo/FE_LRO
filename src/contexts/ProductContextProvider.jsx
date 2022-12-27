import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ProductContext.Provider value={{ setUser, user }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
