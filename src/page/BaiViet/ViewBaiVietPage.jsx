import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Link, useParams } from "react-router-dom";
import AddArticle from "../../components/Comments/AddArticle.jsx";
import Articles from "../../components/Comments/Articles.jsx";
import { Header } from "../../components";

import {
  FUNC_CREATE_ART,
  FUNC_FIND_ONE_ART,
} from "../../service/FuncArt/index.js";
function ViewBaiVietPage() {
  let { id } = useParams();
  const [data, setData] = useState();
  const [isShow, setisShow] = useState(Boolean(false));

  const findOnePost = async () => {
    try {
      console.log(id);
      const result = await FUNC_FIND_ONE_ART(id);
      console.log(result);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.table(data);
    findOnePost();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-full min-h-[90vh] bg-white flex justify-center items-center">
        <div className="w-[90%] justify-center items-center">
          <div className="w-full">
            <div className="w-[98%] flex  my-2 mx-2 ">
              <div>
                <nav
                  class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                  aria-label="Breadcrumb"
                >
                  <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                      <Link
                        to="/"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        <svg
                          class="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/baiviet" class="flex items-center">
                        <svg
                          class="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <a
                          href="#"
                          class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                          {" "}
                          Bài Viết
                        </a>
                      </Link>
                    </li>
                    <li aria-current="page">
                      <div class="flex items-center">
                        <svg
                          class="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                          {data?.title}
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="flex justify-start items-end my-1">
              <img className="h-8 w-8 rounded-full" src={data?.creatorsPhoto} />
              <Link
                class="text-black  hover:text-blue-400 mx-2 font-thin"
                to={`/u/${data?.creatorsId}`}
              >
                <h1 className="text-md">{data?.creatorsName}</h1>
              </Link>
            </div>
            <div class="p-4 rounded border border-gray-700 bg-gray-50 h-auto ">
              <div class="flex justify-between items-center">
                <div className="flex">
                  <a class="text-black font-bold hover:text-blue-400" href="#">
                    {data?.title}
                  </a>
                </div>
                <div className="flex gap-2">
                  <div class="flex">
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-l hover:border-b hover:border-blue-400-lg">
                      ⭐{data?.view}
                    </button>
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-r-lg">
                      Lượt xem
                    </button>
                  </div>
                  <div class="flex">
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-l hover:border-b hover:border-blue-400-lg">
                      ⭐{data?.like.length}
                    </button>
                    <button class="hover:border-white text-black bg-white p-1 border border-gray-600 rounded-r-lg">
                      Lượt thích
                    </button>
                  </div>
                </div>
              </div>
              {/* <p class="text-sm text-gray-400">{data?.content}</p> */}
              <div class="mt-3 flex items-center gap-5">
                {/* <p class="text-sm text-gray-400">🔴 C++</p> */}
                {data?.tag.map((i) => {
                  return (
                    <a href="#" class="text-sm text-gray-400">
                      ⭐ {i}
                    </a>
                  );
                })}
                <p class="text-sm text-gray-400">Update {data?.date}</p>
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
                <div class="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
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
                  Bạn Đang Ở Mục Bình Luận Cho Bài Viết{" "}
                  <span className="text-blue-300">{data?.title}</span>
                </span>
                <AddArticle colDB={id} />
                <div className="h-full">
                  <Articles colDB={id} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full bg-gray-100 p-1 justify-center items-center rounded-sm shadow-lg shadow-green-400/30">
              <div data-color-mode="light" className="">
                <MDEditor.Markdown
                  style={{ padding: 15 }}
                  source={data?.content}
                  linkTarget="_blank"

                  // previewOptions={{
                  //   linkTarget: "_blank"
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBaiVietPage;
