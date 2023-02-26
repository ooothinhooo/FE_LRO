import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CardAuthor,
  CardRight,
  CardTL,
  CardDoc,
  Header,
} from "../../components/index.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";


function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="w-full h-[200px]">
        <div className="bg-blue-800"></div>
      </div>
      <div
        className="w-full flex justify-center items-center bg-white
      "
      >
        <div className="w-full py-5 px-4  flex justify-center items-center ">
          <CardTL />
        </div>
      </div>
      {/* <div class="md:grid md:grid-cols-3 md:gap-4 md:mx-2 md:my-4 my-4 h-auto">
        <div class="col-span-2 h-auto">
          <div className=" w-full flex justify-center items-center bg-white">
            
          </div>
        </div>
        <div class="md:block hidden mr-2 overflow-y-auto h-auto">
          <div className="overflow-y-auto h-auto">
            <div className="p-2">
              <p className="text-2xl text-blue-400">BÀI VIẾT NỔI BẬT</p>
            </div>
            <CardRight data={data} type="baiviet" />
          </div>
          <div className="overflow-y-auto h-auto">
            <div className="p-2">
              <p className="text-2xl text-blue-400">CÁC TÁC GIẢ NỔI BẬT</p>
            </div>
            <CardAuthor data={dataUser} />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TaiLieuPage;
