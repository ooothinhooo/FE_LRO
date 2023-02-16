import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import CardDoc from "../components/CardDoc.jsx";
import { FUNC_PAGE_DOCS } from "../../service/FuncDoc/index.js";
function CardTL({ searchKey }) {
  return (
    <div className="w-full  justify-center items-center ">
      <CardDoc />
    </div>
  );
}

export default CardTL;
