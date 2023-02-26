import React, { useEffect, useState } from "react";
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
import { ManagementBV, ManagementTL } from "../components";
function ContentManagement() {
  const [isBar, setIsBar] = useState(Boolean(true));
  const [isBV, setIsBV] = useState(Boolean(true));
  const [isTL, setIsTL] = useState(Boolean(true));
  const [isBlogs, setIsBlogs] = useState(Boolean(true));

  const [openTab, setOpenTab] = useState(1);

  function render() {
    if (openTab == 1) {
      return <ManagementTL />;
    } else if (openTab == 2) {
      return <ManagementBV />;
    }
  }
  // useEffect(()=>{
  //   render()
  // },[openTab])
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="h-[150vh] flex justify-center items-center w-full bg-white">
        <div className="md:w-[90%] w-full  h-full p-4 bg-blue-50 rounded-md  border-md shadow-2xl  shadow-cyan-500/10  ">
          <div className="w-full h-10 flex justify-center items-center">
            <div className="w-[90%] h-full">
              <div class="">
                <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                  <li class="w-full">
                    <a
                      onClick={(e) => setOpenTab(1)}
                      class={`${
                        openTab == 1 ? "bg-blue-300" : "bg-white"
                      } inline-block w-full p-4 text-gray-900  rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white`}
                      aria-current="page"
                    >
                      Tài Liệu Của Bạn
                    </a>
                  </li>

                  <li class="w-full">
                    <a
                      onClick={(e) => setOpenTab(2)}
                      href="#"
                      class={`${
                        openTab == 2 ? "bg-blue-300" : "bg-white"
                      } inline-block w-full p-4 text-gray-900  hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none`}

                      // class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Bài Viết Của Bạn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full h-screen">
                <div className="w-full ">{render()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentManagement;
