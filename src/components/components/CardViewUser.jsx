import React, { useState } from "react";

import { BoxViewBV, BoxViewTL, Skenleton } from "../index.js";

function CardViewUser({ data }) {
  const [isMenu, setIsMenu] = useState(1);

  return (
    <>
      {data && data != "" ? (
        <div class="p-16">
          <div class="p-8 bg-white shadow mt-24">
            {" "}
            <div class="grid grid-cols-1 md:grid-cols-3">
              {" "}
              <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                {" "}
                <div>
                  {" "}
                  <p class="font-bold text-gray-700 text-xl">
                    {data?.docs?.length}
                  </p>{" "}
                  <p class="text-gray-400">Tài Liệu</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p class="font-bold text-gray-700 text-xl">
                    {data?.posts?.length}
                  </p>{" "}
                  <p class="text-gray-400">Bài Viết</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p class="font-bold text-gray-700 text-xl">
                    {data?.blog?.length}
                  </p>{" "}
                  <p class="text-gray-400">Blogs</p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="relative">
                {" "}
                <div class="w-48 h-48  mx-auto rounded-full absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src={data.photoURL} alt="" />
                </div>{" "}
              </div>{" "}
              <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  Connect
                </button>{" "}
                <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  Message
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div class="mt-20 text-center border-b pb-12">
              {" "}
              <h1 class="text-4xl font-medium text-gray-700">
                {data.username}
              </h1>{" "}
              <p class="font-light text-gray-600 mt-3">{data.email}</p>{" "}
              {/* <p class="mt-8 text-gray-500">
                Solution Manager - Creative Tim Officer
              </p>{" "} */}
              {/* <p class="mt-2 text-gray-500">University of Computer Science</p>{" "} */}
            </div>{" "}
            <div class="mt-12 flex flex-col justify-center">
              <div>
                {" "}
                <div class="grid grid-cols-3 gap-5">
                  {" "}
                  <button
                    onClick={() => setIsMenu(1)}
                    class={`${
                      isMenu == 1
                        ? "bg-indigo-500 text-white"
                        : "bg-white text-indigo-500  "
                    } p-4 rounded shadow-md flex items-center justify-center`}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />{" "}
                    </svg>{" "}
                    Tài Liệu
                  </button>{" "}
                  <button
                    onClick={() => setIsMenu(2)}
                    class={`${
                      isMenu == 2
                        ? "bg-indigo-500 text-white"
                        : "bg-white text-indigo-500  "
                    } p-4 rounded shadow-md flex items-center justify-center`}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />{" "}
                    </svg>{" "}
                    Bài Viết
                  </button>{" "}
                  <button
                    onClick={() => setIsMenu(3)}
                    class={`${
                      isMenu == 3
                        ? "bg-indigo-500 text-white"
                        : "bg-white text-indigo-500  "
                    } p-4 rounded shadow-md flex items-center justify-center`}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />{" "}
                    </svg>{" "}
                    Blogs
                  </button>{" "}
                </div>{" "}
                <div
                  class={`${
                    isMenu == 1 ? "block" : "hidden"
                  } bg-green-200 shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}
                >
                  <BoxViewTL data={data?.docs} />
                </div>{" "}
                <div
                  class={`${
                    isMenu == 2 ? "block" : "hidden"
                  } bg-green-200 shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}
                >
                  <BoxViewBV data={data?.posts} />
                </div>{" "}
                <div
                  class={`${
                    isMenu == 3 ? "block" : "hidden"
                  } bg-blue-300 shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6`}
                >
                  Chưa Hoàn Thiện
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Skenleton num={1} />
        </>
      )}
    </>
  );
}

export default CardViewUser;
