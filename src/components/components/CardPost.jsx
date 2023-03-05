import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { BsFillHeartFill } from "react-icons/bs";
import { FaDownload, FaRegCommentDots } from "react-icons/fa";
import {
  FUNC_INTERACT_ART,
  FUNC_PAGE_ART,
} from "../../service/FuncArt/index.js";
import { Link } from "react-router-dom";
function CardPost() {
  const { user } = useContext(ProductContext);
  const [page, setPage] = useState(Number(1));
  const [ArtsData, setArtsData] = useState([]);
  const [like, setLike] = useState({
    _id: "",
    photoURL: "",
  });
  const auth = user?.token;
  const photoURL = user?.avatar;

  const getPagination = async () => {
    try {
      const { data } = await FUNC_PAGE_ART(page);
      setArtsData(data);
      console.log(data);
    } catch (error) {}
  };

  const handlerLike = async (id) => {
    like._id = id;
    like.photoURL = photoURL;
    console.log(id);
    console.log(like);
    try {
      const result = await FUNC_INTERACT_ART(auth, like);
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

  const nextPage = () => {
    console.log("NEXT PAGE = " + page);
    const pg = page <= Math.ceil(ArtsData.length / 12) ? page + 1 : 1;
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

  return (
    <>
      <>
        {ArtsData &&
          ArtsData.map((item, index) => {
            return (
              <>
                <div class="w-full min-h-[140px] flex items-center justify-center ">
                  <div class="w-[80%] h-full flex items-center justify-center bg-gray-100 rounded-md  hover:bg-blue-400 ease-in-out duration-100 ">
                    <div class="w-full h-full bg-gray-200  py-2 px-4 rounded-lg    shadow-md shadow-blue-300/30">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center">
                          <img
                            src={item?.creatorsPhoto}
                            alt="avatar"
                            className="w-8 h-8 rounded-full mr-2 "
                          />
                          <span className="lg:text-lg font-mono text-blue-500 hover:text-blue-300 cursor-pointer">
                            {item?.creatorsName}
                          </span>
                        </div>
                        <span className="mx-1 p-1 "> {item?.date}</span>
                      </div>
                      <div className="block">
                        <Link to={`/baiviet/view/${item?._id}`}>
                          <h1 className="lg:text-lg md:text-md font-bold text-blue-800 hover:text-blue-400 cursor-pointer">
                            {item?.title}
                          </h1>
                        </Link>
                        <p>
                          {item?.tag.map((i) => {
                            return (
                              <span className="p-1 mx-1 justify-center items-center text-xs rounded-md bg-blue-gray-100">
                                {i}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                      <div className="flex justify-between pt-1">
                        <div className="flex ">
                          <span className="mx-1 p-1  rounded-sm">
                            {" "}
                            {item?.view} view
                          </span>
                        </div>
                        <p className="text-md flex justify-center items-center ">
                          {/* <span className="text-lg flex justify-center items-center mx-1">
                <span>120</span>
                <BsFillHeartFill className="text-xl mx-1 text-red-600" />
              </span> */}
                          <div
                            onClick={(e) => {
                              handlerLike(item?._id);
                            }}
                            class="flex  text-gray-700 text-sm  z-50  cursor-pointer"
                          >
                            <span className="text-xl">{item?.like.length}</span>
                            <span className="mx-1">
                              {!item?.like?.includes(photoURL) ? (
                                <>
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class=" mr-1"
                                    stroke="currentColor"
                                    width="30px"
                                    height="30px"
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
                                    width="30px"
                                    height="30px"
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
                                        <stop offset="1" stop-color="#C20000" />
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
                            <FaRegCommentDots className="text-xl mx-1" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
  );
}

export default CardPost;
