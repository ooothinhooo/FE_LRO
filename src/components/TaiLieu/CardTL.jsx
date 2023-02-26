import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import CardDoc from "../components/CardDoc.jsx";

function CardTL({ searchKey }) {
  return (
    <div className="w-full  justify-center items-center ">
      <CardDoc />
    </div>
  );
}

export default CardTL;
