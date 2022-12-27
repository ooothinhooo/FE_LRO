import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CardTL, Header } from "../../components/index.js";
import { GET_ALL_DOC } from "../../service/apiConstant.js";
import { like_doc } from "../../service/TaiLieu/LikeDoc.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { AiFillTag, AiOutlineLike, AiFillLike } from "react-icons/ai";

import { view_doc } from "../../service/TaiLieu/ViewDoc.js";
import Like from "../../components/TaiLieu/Like.jsx";
import logo from "../../images/LRO_logo.png";
import dataCourse from "../../data/course.js";
function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [ArrayDocs, setArrayDocs] = useState([]);
  const [searchKey, setSearchKey] = useState();
  const arr = dataCourse.filter((item) => {
    return item?.key?.toLocaleLowerCase() === searchKey?.toLocaleLowerCase();
  });
  return (
    <>
      <div>
        <Header />
      </div>

      <div class="md:grid md:grid-cols-3 md:gap-4 md:mx-2 md:my-4 my-4">
        <div class="col-span-2 ">
          <>
            <>
              <div className=" flex ml-4 w-[90%] md:w-[80%]">
                <div class=" md:w-[30%] mx-1">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-medium text-white"
                    >
                      Mã Học Phần
                    </label>
                    <input
                      type="text"
                      name="key"
                      id="lName"
                      onChange={(e) => setSearchKey(e.target.value)}
                      value={searchKey}
                      placeholder=" Mã Học Phần"
                      class="w-full uppercase rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class=" md:w-[50%]">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-medium text-white"
                    >
                      Tên Học Phần
                    </label>
                    <input
                      type="text"
                      name="lName"
                      value={arr[0]?.name}
                      id="lName"
                      placeholder="Tên Học Phần"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </>
            <CardTL searchKey={searchKey} />
          </>
        </div>
        <div class="bg-gray-300">05</div>
      </div>
    </>
  );
}

export default TaiLieuPage;
