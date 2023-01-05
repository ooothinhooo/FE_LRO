import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CardAuthor,
  CardRight,
  CardTL,
  Header,
} from "../../components/index.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import dataCourse from "../../data/course.js";
import { post_hight } from "../../service/BaiViet/GetPostHight.js";
import { GET_USER_HIGHT } from "../../service/apiConstant.js";
function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const [searchKey, setSearchKey] = useState();
  const arr = dataCourse.filter((item) => {
    return item?.key?.toLocaleLowerCase() === searchKey?.toLocaleLowerCase();
  });

  const GetCardRight = async () => {
    try {
      const size = 12;
      const result = await post_hight(size);
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

  console.log(data);
  return (
    <>
      <div>
        <Header />
      </div>

      <div class="md:grid md:grid-cols-3 md:gap-4 md:mx-2 md:my-4 my-4 h-auto">
        <div class="col-span-2 h-auto">
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
      </div>
    </>
  );
}

export default TaiLieuPage;
