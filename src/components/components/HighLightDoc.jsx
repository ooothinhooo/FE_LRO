import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { FiEye } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { FaDownload, FaRegCommentDots } from "react-icons/fa";
import {
  FUNC_HIGHT_LIGHT_DOC,
  FUNC_INTERACT_DOC,
  FUNC_PAGE_DOCS,
} from "../../service/FuncDoc/index.js";
import Skenleton from "./Skenleton.jsx";
import { Link } from "react-router-dom";
function HighLightDoc() {
  const { user } = useContext(ProductContext);
  const [page, setPage] = useState(Number(1));
  const [DocsData, setDocsData] = useState([]);
  const [like, setLike] = useState({
    _id: "",
    photoURL: "",
  });
  const auth = user?.token;
  const photoURL = user?.avatar;
  const handlerLike = async (id) => {
    like._id = id;
    like.photoURL = photoURL;
    console.log(id);
    console.log(like);
    try {
      const result = await FUNC_INTERACT_DOC(auth, like);
      console.log(result);
      if (result.data.status === 200) {
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

  const getPagination = async () => {
    try {
      const data = await FUNC_HIGHT_LIGHT_DOC(page);
      setDocsData(data.data);
      // console.log(data.data.data);
    } catch (error) {}
  };

  const nextPage = () => {
    console.log("NEXT PAGE = " + page);
    const pg = page >= Math.ceil(DocsData.length / 12) ? page + 1 : 1;
    setPage(pg);
    // getPagination();
  };
  const prevPage = () => {
    console.log("PREV PAGE = " + page);

    const pg = page === 1 ? 1 : page - 1;
    setPage(pg);
    // getPagination();
  };

  useEffect(() => {
    getPagination();
  }, [page]);

  const handlerView = async (id) => {};

  // console.log(DocsData);
  return (
    <>
      <div className="w-full  justify-center items-center ">
        <div class=" my-1 p-4">
          {DocsData && DocsData != "" ? (
            <>
              <>
                <>
                  <div className="">
                    <div className=" w-full flex justify-center items-center">
                      <div className="w-[88%] py-5 px-4 bg-gray-100 flex justify-center items-center ">
                        <div class="grid grid-cols-4 gap-6">
                          {DocsData &&
                            DocsData?.map((item, index) => {
                              return (
                                <div key={index}>
                                  <div
                                    key={item?._id}
                                    class="w-[266px] h-[333px] flex items-center justify-center bg-gray-100 rounded-md  hover:bg-blue-400 ease-in-out duration-100 "
                                  >
                                    <div class="w-[99%] h-[99%]  bg-gray-200  p-4 rounded-lg    shadow-md shadow-blue-300/30">
                                      <div className="flex justify-start items-end my-1 z-20 ">
                                        <img
                                          src={item?.creatorsPhoto}
                                          alt="avatar"
                                          className="w-6 h-6 rounded-full mr-2 "
                                        />
                                        <Link to={`/u/${item?.userId}`}>
                                          <h1 className="text-[15px] text-blue-900  hover:text-blue-400  cursor-pointer">
                                            {item?.creatorsName}
                                          </h1>
                                        </Link>
                                      </div>
                                      <iframe
                                        class="w-full  rounded shadow cursor-grabbing overflow-hidden  "
                                        src={item?.docs_URL}
                                        title="W3Schools Free Online Web Tutorials"
                                        frameborder="0"
                                      ></iframe>
                                      <Link to={`/tailieu/view/${item?._id}`}>
                                        <h3 class="text-gray-900 hover:text-blue-500 cursor-pointer font-serif m-1 py-1 ">
                                          {item?.title?.substring(0, 27) +
                                            "..."}
                                        </h3>
                                      </Link>
                                      <p class="text-gray-800 font-light mt-1 text-xs">
                                        {/* {item?.content.substring(0, 60) + "..."} */}
                                      </p>
                                      <p className="text-xs text-blue-800 w-full h-8 ">
                                        {item?.tag?.slice(0, 3).map((i) => {
                                          return (
                                            <>
                                              <span className="mx-1 p-1 bg-pink-200 rounded-md font-thin">
                                                {i}
                                              </span>
                                            </>
                                          );
                                        })}
                                      </p>
                                      <div className="w-full h-[2px] bg-black"></div>
                                      <div>
                                        {/* button */}
                                        <div class="flex justify-between">
                                          <span className="text-md flex justify-center items-center ">
                                            <span>{item?.view}</span>
                                            <FiEye className="text-md mx-1" />
                                          </span>

                                          <span className="text-md flex justify-center items-center ">
                                            <div
                                              onClick={(e) => {
                                                handlerLike(item?._id);
                                              }}
                                              class="flex  text-gray-700 text-md  z-50  cursor-pointer"
                                            >
                                              <span>{item?.like?.length}</span>
                                              <span className="mx-1">
                                                {!item?.like?.includes(
                                                  photoURL
                                                ) ? (
                                                  <>
                                                    <svg
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      class="w-5 h-5 mr-1"
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
                                                      //   width="18px"
                                                      //   height="18px"
                                                      class="w-5 h-5 mr-1"
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
                                            </div>
                                            <span>
                                              {" "}
                                              <FaDownload className="text-lg mx-1" />
                                            </span>
                                            <span>
                                              <FaRegCommentDots className="text-lg mx-1" />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </>

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
              <Skenleton num={8} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HighLightDoc;
