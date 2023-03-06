import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";

import AddArticle from "../../components/Comments/AddArticle.jsx";
import Articles from "../../components/Comments/Articles.jsx";
import { Header } from "../../components/index.js";
// import { auth } from "../../firebase.js";
import {
  FUNC_COUNT_VIEW_DOC,
  FUNC_FIND_ONE_DOC,
} from "../../service/FuncDoc/index.js";


function ViewTaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  let { id } = useParams();
  let colDB = `CMT/tailieu/${id}`;
  const [data, setData] = useState();
  const [isShow, setisShow] = useState(Boolean(false));

  const findOneDoc = async () => {
    try {
      // console.log(id);
      const result = await FUNC_FIND_ONE_DOC(id);
      // console.log(result);
      setData(result.data.data);
      console.table(data);
    } catch (error) {
      console.log(error);
    }
  };

  const view = async () => {
    try {
      const result = await FUNC_COUNT_VIEW_DOC(token, id);
      console.log(result);
    } catch (error) {}
  };
  useEffect(() => {
    findOneDoc();
    view();
  }, []);
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="w-full bg-white flex justify-center items-center">
        <div className=" w-[95%] h-full ">
          <div className="w-full bg-white">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full bg-primary p-2 h-full flex justify-between ">
                <div className=" flex justify-center items-end ">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={data?.creatorsPhoto}
                  />
                  <label className="block">
                    <h1 className="text-md">{data?.creatorsName}</h1>
                    <h1>{data?.date}</h1>
                  </label>
                </div>
                <div>
                  <h1>{data?.like.length} Lượt Thích</h1>
                  <h1>{data?.view} Lượt xem</h1>
                </div>
              </div>
            </div>
            {/* Button hiện thị bình luận */}
            <div className="w-[98%] md:m-2  m-1">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  // value={isP}
                  onChange={(e) => setisShow(!isShow)}
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                {!isShow ? (
                  <>
                    <span class="ml-3 text-sm font-medium text-black dark:text-gray-300">
                      Không Hiện Thị Bình Luận
                    </span>
                  </>
                ) : (
                  <>
                    <span class="ml-3 text-sm font-medium text-black dark:text-gray-300">
                      Hiện Thị Bình Luận
                    </span>
                  </>
                )}
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {isShow ? (
              <div className=" mt-2 rounded-lg shadow-md w-[98%] items-center justify-center">
                <span className="text-gray-400">
                  Bạn Đang Ở Mục Bình Luận Cho Tài Liệu{" "}
                  <span className="text-blue-300">{data?.title}</span>
                </span>
                <AddArticle colDB={colDB} />
                <div className="h-full">
                  <Articles colDB={colDB} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="w-full h-screen flex justify-center items-center ">
            <iframe
              className=" w-[99%] h-full rounded-xl
          "
              allowfullscreen=""
              frameborder="0"
              src={data?.docs_URL}
              title="Hello"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTaiLieuPage;
