import { arrayRemove } from "firebase/firestore";
import React, { useRef, useEffect } from "react";
import CardDoc from "../components/components/CardDoc.jsx";
import CardPost from "../components/components/CardPost.jsx";
import { Footer, Header, Login } from "../components/index.js";

function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <Header />

      <div className=" w-full h-[200px] bg-[#08629D] justify-center items-center">
        <div className=" w-full h-[95%] justify-center items-center">
          <p className="p-3 text-5xl text-white font-body uppercase flex justify-center items-center ">
            LEARNING RESOURCE ONLINE
          </p>
          <p className="p-3 text-2xl text-white font-body   justify-center items-center ">
            <p className="flex justify-center items-center align-middle">
              {" "}
              Nơi tìm kiếm, chia sẽ các tài liệu học tập được đánh giá cao nhất
              từ các{" "}
            </p>
            <p className="flex justify-center items-center ">
              sinh viên tham gia các khóa học giống như bạn
            </p>
          </p>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center bg-white">
        <div className="w-[80%] py-5 px-4 bg-blue-gray-100 flex justify-center items-center -mt-[50px] ">
          <div class="grid grid-cols-5 gap-4"></div>
        </div>
      </div>
      <CardDoc />
      <CardPost />

      <div className="w-full bg-white flex justify-center items-center p-3">
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
          href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
      <Footer />
    </div>
  );
}

export default Home;
