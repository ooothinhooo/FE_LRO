import React, { useEffect, useState, Suspense } from "react";
import AddArticle from "../../components/Comments/AddArticle.jsx";
import Articles from "../../components/Comments/Articles.jsx";
import {
  CardAuthor,
  CardBV,
  CardRight,
  Header,
} from "../../components/index.js";

import { AiFillHeart, AiOutlineHeart, AiFillWechat } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io";
import dataCourse from "../../data/course.js";
import { doc_hight } from "../../service/TaiLieu/GetDocHight.js";
import axios from "axios";
import { GET_USER_HIGHT } from "../../service/apiConstant.js";

function BaiVietPage() {
  // console.log(dataPost);
  const [searchKey, setSearchKey] = useState();
  const arr = dataCourse.filter((item) => {
    return item?.key?.toLocaleLowerCase() === searchKey?.toLocaleLowerCase();
  });

  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const GetCardRight = async () => {
    try {
      const size = 12;
      const result = await doc_hight(size);
      if (result.status === 200) {
        setData(result.data.data);
      } else {
        setData();
      }
    } catch (error) {}
  };

  const GetUserHight = async () => {
    try {
      const result = await axios.get(GET_USER_HIGHT, { params: { S: "3" } });
      // console.log(result.data.data);
      setDataUser(result.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCardRight();
    GetUserHight();
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* Hiện thị */}

      <div className="w-full flex justify-center items-end my-4 border-none shadow-lg rounded-lg ">
        <div class="md:grid md:grid-cols-3 md:gap-4 w-[95%]">
          <div class="md:col-span-2 ">
            <>
              <div className=" flex mx-2 w-[90%] md:w-[80%]">
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

              <CardBV searchKey={searchKey} />
            </>
          </div>
          <div class=" hidden md:block">
            <div>
              <div className="p-2">
                <p className="text-2xl text-blue-400">TÀI LIỆU NỔI BẬT</p>
              </div>
              <CardRight data={data} type="tailieu" />
            </div>
            <div>
              <div className="p-2">
                <p className="text-2xl text-blue-400">CÁC TÁC GIẢ NỔI BẬT</p>
              </div>
              <CardAuthor data={dataUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaiVietPage;
{
  /* <div>
        <h1>Hello page </h1>
        <AddArticle colDB="test" />
        <div className="h-full">
          <Articles colDB="test" />
        </div>
      </div> */
}
