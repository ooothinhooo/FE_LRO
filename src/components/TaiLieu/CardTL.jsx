import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { GET_ALL_DOC } from "../../service/apiConstant.js";
import { like_doc } from "../../service/TaiLieu/LikeDoc.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { AiFillTag, AiOutlineLike, AiFillLike } from "react-icons/ai";
import dataCourse from "../../data/course.js";
import { view_doc } from "../../service/TaiLieu/ViewDoc.js";
import { pagination_doc } from "../../service/TaiLieu/PaginationDoc.js";
import Skenleton from "../components/Skenleton.jsx";
function CardTL({ searchKey }) {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [page, setPage] = useState(1);
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [ArrayDocs, setArrayDocs] = useState([]);
  const [like, setLike] = useState({
    docs_id: "",
    photoURL: "",
  });
  const getPagination = async () => {
    try {
      const { data } = await pagination_doc(page);
      // console.log(data);
      setArrayDocs(data);
      setData(data);
    } catch (error) {}
  };
  const getAllDocs = async () => {
    try {
      const { data } = await axios.get(GET_ALL_DOC);
      setdocs(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(docs.length);
  //* pagination page
  const nextPage = () => {
    const pg = page < Math.ceil(docs.length / 10) ? page + 1 : 1;
    setPage(pg);
    // getPagination();
  };
  const prevPage = () => {
    const pg = page === 1 ? 1 : page - 1;
    setPage(pg);
    // getPagination();
  };

  const handlerLike = async (id) => {
    like.docs_id = id;
    like.photoURL = photoURL;
    try {
      const result = await like_doc(token, like);
      console.log(result);
      if (result.data.status === 200) {
        // getAllDocs();
        getPagination();
        return;
      }

      if (result.data.status === 202) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlerView = async (id) => {
    try {
      const result = await view_doc(token, id);
      if (result.data.status === 200) {
        getAllDocs();
        return;
      }

      if (result.data.status === 202) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPagination();
  }, [page]);

  useEffect(() => {
    getAllDocs();
  }, []);

  const arrData = docs.filter((item) => {
    return item?.tag?.toLocaleLowerCase() === searchKey?.toLocaleLowerCase();
  });
  useEffect(() => {
    if (arrData == "") {
      setArrayDocs(data);
    } else {
      setArrayDocs(arrData.splice(0, 10));
    }
  }, [searchKey]);
  return (
    <div className="w-full  justify-center items-center ">
      {ArrayDocs && ArrayDocs != "" ? (
        <>
          <>
            {ArrayDocs &&
              ArrayDocs.map((item, index) => {
                return (
                  <>
                    <div className="flex justify-center items-center w-full">
                      <div class="flex justify-start items-start bg-white shadow-lg rounded-lg  my-1 shadow-green-200/30 w-[95%] ">
                        <div class="flex items-start px-4 py-4">
                          <img
                            class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                            src={item.createrPhoto}
                            alt="avatar"
                          />
                          <div class="">
                            <div class="flex items-center justify-between">
                              <h2 class="text-lg font-semibold text-gray-900 mt-1">
                                {item.creater}
                              </h2>
                              <small class="text-sm text-gray-700 mx-2">
                                {item.date}
                              </small>
                            </div>
                            {/* <p class="text-gray-700">{item.date} </p> */}
                            <div>
                              <div class="inline-block relative py-1 text-xs mx-1">
                                <div class="absolute inset-0 text-blue-200 flex">
                                  <svg height="100%" viewBox="0 0 50 100">
                                    <path
                                      d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <div class="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none"></div>
                                </div>
                                <span class="relative text-blue-500 uppercase font-semibold pr-px">
                                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                  {item.tag}
                                  <span>&nbsp;</span>
                                </span>
                              </div>
                              <div class="inline-block relative py-1 text-xs mx-1">
                                <div class="absolute inset-0 text-blue-200 flex">
                                  <svg height="100%" viewBox="0 0 50 100">
                                    <path
                                      d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <div class="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none"></div>
                                </div>
                                <span class="relative text-blue-500 uppercase font-semibold pr-px">
                                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                  {item.nameTag}
                                  <span>&nbsp;</span>
                                </span>
                              </div>
                            </div>
                            <p class="mt-3 text-gray-700 text-sm">
                              {item.title}
                            </p>
                            <div class="mt-4 flex items-center cursor-pointer">
                              <div
                                onClick={(e) => {
                                  handlerLike(item._id);
                                }}
                                class="flex mr-2 text-gray-700 text-sm mr-3"
                              >
                                <span>{item.like.length}</span>
                                <span className="mx-1">
                                  {!item.like?.includes(photoURL) ? (
                                    <>
                                      <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                      </svg>
                                    </>
                                  ) : (
                                    <>
                                      <svg
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M16.1315 3.71436C14.4172 3.71436 12.9029 4.57721 12 5.8915C11.0972 4.57721 9.58289 3.71436 7.86861 3.71436C5.10289 3.71436 2.85718 5.96007 2.85718 8.72578C2.85718 14.8344 12 20.3258 12 20.3258C12 20.3258 21.1429 14.8344 21.1429 8.72578C21.1429 5.96007 18.8972 3.71436 16.1315 3.71436Z"
                                          fill="url(#paint0_radial)"
                                        />
                                        <path
                                          opacity="0.5"
                                          d="M18.2056 4.16016C20.9485 8.53158 18.4228 14.2687 15.3885 15.8973C12.0399 17.6973 9.74847 16.8516 5.00562 14.1602C7.70847 17.743 11.9999 20.3202 11.9999 20.3202C11.9999 20.3202 21.1428 14.8287 21.1428 8.72016C21.1428 6.6973 19.937 4.94873 18.2056 4.16016Z"
                                          fill="url(#paint1_radial)"
                                        />
                                        <path
                                          opacity="0.5"
                                          d="M16.1315 3.71436C14.4172 3.71436 12.9029 4.57721 12 5.8915C11.0972 4.57721 9.58289 3.71436 7.86861 3.71436C5.10289 3.71436 2.85718 5.96007 2.85718 8.72578C2.85718 14.8344 12 20.3258 12 20.3258C12 20.3258 21.1429 14.8344 21.1429 8.72578C21.1429 5.96007 18.8972 3.71436 16.1315 3.71436Z"
                                          fill="url(#paint2_radial)"
                                        />
                                        <path
                                          opacity="0.5"
                                          d="M16.1315 3.71436C14.4172 3.71436 12.9029 4.57721 12 5.8915C11.0972 4.57721 9.58289 3.71436 7.86861 3.71436C5.10289 3.71436 2.85718 5.96007 2.85718 8.72578C2.85718 14.8344 12 20.3258 12 20.3258C12 20.3258 21.1429 14.8344 21.1429 8.72578C21.1429 5.96007 18.8972 3.71436 16.1315 3.71436Z"
                                          fill="url(#paint3_radial)"
                                        />
                                        <path
                                          opacity="0.24"
                                          d="M10.7486 5.74883C11.2514 6.93169 10.1371 8.5374 8.25714 9.33169C6.37714 10.126 4.45143 9.8174 3.94857 8.64026C3.44571 7.46312 4.56 5.85169 6.44 5.0574C8.32 4.26312 10.2457 4.56597 10.7486 5.74883Z"
                                          fill="url(#paint4_radial)"
                                        />
                                        <path
                                          opacity="0.24"
                                          d="M16.8742 4.78885C17.5885 5.57742 17.1485 7.13742 15.8971 8.26885C14.6456 9.40028 13.0513 9.68028 12.3371 8.8917C11.6228 8.10313 12.0628 6.54313 13.3142 5.41171C14.5656 4.28028 16.1599 4.00028 16.8742 4.78885Z"
                                          fill="url(#paint5_radial)"
                                        />
                                        <path
                                          opacity="0.32"
                                          d="M16.2229 5.04578C18.7372 5.90293 21.1372 9.61721 17.0801 14.2458C14.6515 17.0172 12.0001 18.4172 8.62866 17.8686C10.4515 19.3886 12.0058 20.3258 12.0058 20.3258C12.0058 20.3258 21.1487 14.8344 21.1487 8.72578C21.1429 5.96007 18.8972 3.71436 16.1315 3.71436C14.4172 3.71436 12.9029 4.57721 12.0001 5.8915C12.0001 5.8915 14.3829 4.41721 16.2229 5.04578Z"
                                          fill="url(#paint6_linear)"
                                        />
                                        <defs>
                                          <radialGradient
                                            id="paint0_radial"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(9.38479 8.34769) rotate(-29.408) scale(14.3064 11.3486)"
                                          >
                                            <stop
                                              offset="0.2479"
                                              stop-color="#FF0000"
                                            />
                                            <stop
                                              offset="0.8639"
                                              stop-color="#C20000"
                                            />
                                          </radialGradient>
                                          <radialGradient
                                            id="paint1_radial"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(9.7385 7.47018) rotate(-29.408) scale(12.3173 9.77078)"
                                          >
                                            <stop
                                              offset="0.2479"
                                              stop-color="#FF0000"
                                            />
                                            <stop
                                              offset="1"
                                              stop-color="#C20000"
                                            />
                                          </radialGradient>
                                          <radialGradient
                                            id="paint2_radial"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(9.38479 8.34769) rotate(-29.408) scale(14.3064 11.3486)"
                                          >
                                            <stop
                                              stop-color="white"
                                              stop-opacity="0.25"
                                            />
                                            <stop
                                              offset="1"
                                              stop-color="white"
                                              stop-opacity="0"
                                            />
                                          </radialGradient>
                                          <radialGradient
                                            id="paint3_radial"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(14.5277 13.2044) rotate(-26.296) scale(10.4431 5.16038)"
                                          >
                                            <stop
                                              stop-color="#BD2719"
                                              stop-opacity="0.25"
                                            />
                                            <stop
                                              offset="1"
                                              stop-color="#BD2719"
                                              stop-opacity="0"
                                            />
                                          </radialGradient>
                                          <radialGradient
                                            id="paint4_radial"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(7.34746 7.19453) rotate(-21.6908) scale(3.71252 2.30616)"
                                          >
                                            <stop stop-color="white" />
                                            <stop
                                              offset="1"
                                              stop-color="white"
                                              stop-opacity="0"
                                            />
                                          </radialGradient>
                                          <radialGradient
                                            id="paint5_radial"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(14.6004 6.84619) rotate(-40.7634) scale(3.07376 1.9095)"
                                          >
                                            <stop stop-color="white" />
                                            <stop
                                              offset="1"
                                              stop-color="white"
                                              stop-opacity="0"
                                            />
                                          </radialGradient>
                                          <linearGradient
                                            id="paint6_linear"
                                            x1="13.8868"
                                            y1="26.8498"
                                            x2="15.6583"
                                            y2="2.96408"
                                            gradientUnits="userSpaceOnUse"
                                          >
                                            <stop stop-color="#860805" />
                                            <stop
                                              offset="1"
                                              stop-color="#BD2719"
                                              stop-opacity="0"
                                            />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                    </>
                                  )}
                                </span>
                                <div className="flex mx-2">
                                  {item.like &&
                                    item.like.map((i, index) => {
                                      return (
                                        <img
                                          src={i}
                                          className={`${
                                            item.like.length > 1 ? "" : "-ml-2"
                                          }-ml-2 h-[18px] w-[18px] rounded-full left-2 z-[${index}]`}
                                        />
                                      );
                                    })}
                                </div>
                              </div>
                              <div class="flex mr-2 text-gray-700 text-sm mr-8">
                                <svg
                                  fill="#000000"
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 56 56"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M 28.0103 46.4556 C 44.5664 46.4556 56 33.0754 56 28.8954 C 56 24.6949 44.5459 11.3351 28.0103 11.3351 C 11.6795 11.3351 0 24.6949 0 28.8954 C 0 33.0754 11.6590 46.4556 28.0103 46.4556 Z M 28.0103 43.2181 C 14.5277 43.2181 3.5858 31.7845 3.5858 28.8954 C 3.5858 26.4570 14.5277 14.5726 28.0103 14.5726 C 41.4518 14.5726 52.4142 26.4570 52.4142 28.8954 C 52.4142 31.7845 41.4518 43.2181 28.0103 43.2181 Z M 28.0103 40.3700 C 34.3828 40.3700 39.5055 35.1449 39.5055 28.8954 C 39.5055 22.4819 34.3828 17.4208 28.0103 17.4208 C 21.5968 17.4208 16.4537 22.4819 16.4947 28.8954 C 16.5152 35.1449 21.5968 40.3700 28.0103 40.3700 Z M 28.0103 32.7066 C 25.8793 32.7066 24.1581 30.9854 24.1581 28.8954 C 24.1581 26.7849 25.8793 25.0842 28.0103 25.0842 C 30.1208 25.0842 31.8420 26.7849 31.8420 28.8954 C 31.8420 30.9854 30.1208 32.7066 28.0103 32.7066 Z" />
                                </svg>
                                <span>{item.view}</span>
                              </div>
                              <Link
                                to={`/tailieu/view/${item._id}`}
                                onClick={(e) => handlerView(item._id)}
                                class="flex mr-2 text-gray-700 text-sm mr-4"
                              >
                                <svg
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.293 14.293a1 1 0 0 1 1.414 0L12 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414ZM11.293 5.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 7.414 9.707 9.707a1 1 0 0 1-1.414-1.414l3-3Z"
                                    fill="#000"
                                  />
                                </svg>
                                <span>Xem Chi Tiết</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            <div className="my-3 w-full   flex justify-center items-center ">
              {/* <!-- Previous Button --> */}
              <div className="w-[95%] flex justify-between items-center">
                <a
                  onClick={(e) => prevPage()}
                  class="cursor-pointer inline-flex justify-start items-center 
              px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-green-300 hover:text-green-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Previous
                </a>
                <a
                  onClick={(e) => {
                    nextPage();
                  }}
                  class="cursor-pointer inline-flex justify-end items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg
               hover:bg-green-300 hover:text-green-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          <Skenleton />
        </>
      )}
    </div>
  );
}

export default CardTL;
