import React, { useState } from "react";
import { Header } from "../components/index.js";
import { FaLockOpen, FaLock, FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ManagementBV, ManagementTL, ManagementBlogs } from "../components";
function ContentManagement() {
  const [isBar, setIsBar] = useState(Boolean(true));
  const [isBV, setIsBV] = useState(Boolean(true));
  const [isTL, setIsTL] = useState(Boolean(true));
  const [isBlogs, setIsBlogs] = useState(Boolean(true));

  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div>
        <Header />
      </div>
      <>
        {/* <div className="flex  ">
        <div className="  bg-white">
          <nav class="md:hidden  flex px-2 py-2.5 dark:bg-gray-900 fixed w-full z-100 top-12  left-0 border-b ">
            <div class="w-[95%] flex flex-wrap items-center justify-center mx-auto">
              <div
                class="items-center justify-between   flex w-auto order-1"
                id="navbar-sticky"
              >
                <ul class="flex  p-4 mt-4  border  rounded-lg bg-gray-50 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Tài Liệu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Bài Viết
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Blogs
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center justify-center ">
            <div className=" md:flex hidden flex-col h-screen p-3 bg-gray-800 shadow w-60">
              <div className="space-y-3">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold text-white">
                    QUẢN LÝ NỘI DUNG
                  </h2>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center py-4">
                    <button
                      type="submit"
                      className="p-2 focus:outline-none focus:ring"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                      <a
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        <span className="text-gray-100">Tài Liệu</span>
                      </a>
                    </li>
                    <li className="rounded-sm">
                      <a
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                        <span className="text-gray-100">Bài Viết</span>
                      </a>
                    </li>
                    <li className="rounded-sm">
                      <a
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <span className="text-gray-100">Blogs</span>
                      </a>
                    </li>
                    <li className="rounded-sm">
                      <a
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-100">Settings</span>
                      </a>
                    </li>
                    <li className="rounded-sm">
                      <a
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                        <span className="text-gray-100">Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:flex hidden mx-4 mt-3 top-0 left-0 h-screen w-full  z-101"></div>
          </div>
        </div>
      </div>  */}
      </>
      {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 bg-blue-500 h-full w-full ">
        
        </div>
        <div class="col-span-2 bg-blue-500 h-full w-full ">02</div>
        <div class="row-span-2 col-span-2 bg-blue-500 h-full w-full ">03</div>
      </div> */}
      <div className="flex justify-center items-center w-full ">
        <div className="flex my-2  border-md shadow-2xl shadow-cyan-500/10 md:w-[93%] w-full h-screen ">
          <div
            className={`md:w-[20%] ${
              isBar ? "hidden" : "w-full block"
            }  md:block h-screen border-xl shadow-lg shadow-pink-200/10 m-2 justify-center items-center transition-transform`}
          >
            <div className="flex p-2 my-2 mx-2 justify-start items-center">
              <FaBars
                onClick={(e) => setIsBar(!isBar)}
                className="md:hidden text-green-500"
              />
              <h2 className="mx-2 text-md text-blue-500 font-extrabold">
                QUẢN LÝ NỘI DUNG
              </h2>
            </div>

            <div className="w-full  flex justify-center items-center my-2">
              <div
                onClick={() => setOpenTab(1)}
                className={`${
                  openTab === 1 ? "bg-purple-600 text-white" : ""
                } w-[95%]  flex justify-center items-center p-2 bg-white border-md shadow-2xl shadow-pink-200/30 hover:bg-green-300 hover:shadow-pink-200/50  `}
              >
                <p className="text-lg font-medium">Tài Liệu</p>
              </div>
            </div>
            <div
              onClick={() => setOpenTab(2)}
              className="w-full  flex justify-center items-center my-2"
            >
              <div
                className={`${
                  openTab === 2 ? "bg-purple-600 text-white" : ""
                } w-[95%]  flex justify-center items-center p-2 bg-white border-md shadow-2xl shadow-pink-200/30 hover:bg-green-300 hover:shadow-pink-200/50 `}
              >
                <p className="text-lg font-medium">Bài Viết</p>
              </div>
            </div>
            <div
              onClick={() => setOpenTab(3)}
              className="w-full  flex justify-center items-center my-2"
            >
              <div
                className={`${
                  openTab === 3 ? "bg-purple-600 text-white" : ""
                } w-[95%]  flex justify-center items-center p-2 bg-white border-md shadow-2xl shadow-pink-200/30 hover:bg-green-300 hover:shadow-pink-200/50`}
              >
                <p className="text-lg font-medium">Blogs</p>
              </div>
            </div>
          </div>
          <div
            className={`${
              !isBar ? "hidden" : ""
            } md:w-[80%] w-full h-screen border-xl shadow-lg shadow-cyan-500/10 m-2 flex justify-start items-start `}
          >
            <div className="p-2 w-full">
              <div className="md:hidden flex md:text-xl text-cyan-200 items-center">
                <FaBars
                  onClick={(e) => setIsBar(!isBar)}
                  className="mx-2 md:hidden"
                />
                <h2 className="md:text-xl text-cyan-200">
                  Quản Lý Nội Dung Tải Lên
                </h2>
              </div>
              <>
                {/* <div className="w-full  inline-block relative py-1  justify-center items-center">
              
                <div class="hidden md:flex absolute inset-0 text-white justify-start items-center">
                  <svg height="91%" viewBox="0 0 50 100">
                    <path
                      d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                      fill="currentColor"
                    />
                  </svg>
                
                </div>
                <div className="bg-[#f8f9fa] justify-end  w-full md:w-[92%] p-2 md:ml-10  z-[100] ">
                  <div className="flex justify-between  ">
                    <div className="flex justify-start items-center">
                      <p className="text-2xl mx-2">
                        {!false ? (
                          <>
                            <FaLock className="text-red-400" />
                          </>
                        ) : (
                          <>
                            <FaLockOpen className="text-green-400" />
                          </>
                        )}
                      </p>
                      <p className="text-md md:text-lg text-blue-400  font-extrabold">
                        Tiêu đề bài viết
                      </p>
                    </div>
                    <div className="flex justify-end items-center ">
                      <button class="group shadow-lg shadow-cyan-300/50 relative overflow-hidden rounded bg-sky-400 bg-blue-300 hover:bg-green-400 hover:shadow-green-300/80 px-2 py-1 mx-1 font-sans uppercase  ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2">
                        <p class="text-primary  shadow-lg shadow-blue-400/10 transition-all group-active:scale-90">
                          EDIT
                        </p>
                      </button>
                      <button class="group shadow-lg shadow-cyan-300/50 relative overflow-hidden rounded bg-sky-400 bg-red-300 hover:bg-pink-400 hover:shadow-green-300/80 px-2 py-1 mx-1 font-sans uppercase  ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2">
                        <p class="text-primary  shadow-lg shadow-blue-400/10 transition-all group-active:scale-90">
                          DELETE
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex justify-start items-center mx-1">
                      <div className="mx-1">
                        <div class="inline-block relative py-1 text-xs">
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
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>ct999
                            <span>&nbsp;</span>
                          </span>
                        </div>
                      </div>
                      <div className="mx-1">
                        <div class="inline-block relative py-1 text-xs">
                          <div class="absolute inset-0 text-green-200 flex">
                            <svg height="100%" viewBox="0 0 50 100">
                              <path
                                d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                fill="currentColor"
                              />
                            </svg>
                            <div class="flex-grow h-full -ml-px bg-green-200 rounded-md rounded-l-none"></div>
                          </div>
                          <span class="relative text-green-500 uppercase font-semibold pr-px">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> Phân Tích Hoạt
                            Động
                            <span>&nbsp;</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </>
              <div className={openTab === 1 ? "block" : "hidden"}>
                <ManagementTL />
              </div>

              <div className={openTab === 2 ? "block" : "hidden"}>
                <ManagementBV />
              </div>

              <div className={openTab === 3 ? "block" : "hidden"}>
                <ManagementBlogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentManagement;
