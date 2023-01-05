import React from "react";
import { Link } from "react-router-dom";
import { AiFillTag, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { shuffle } from "../../func/shuffle.js";
import Skenleton from "./Skenleton.jsx";

function CardRight({ data, type }) {
  function Render() {
    return (
      <>
        {data?.map((item, index) => {
          return (
            <>
              <div class=" overflow-hidden  group first-letter:relative flex flex-col justify-end  rounded-b-xl pt-6 ">
                <div
                  class=" 
            text-sm  group-hover:text-red-400 group-hover:flex hidden  text-white
            group-hover:translate-x-2 ease-in-out transform transition duration-500
            "
                >
                  {item.creater}
                </div>
                <div class=" relative flex cursor-pointer justify-between rounded-xl bg-blue-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-blue-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                  <div class="relative space-y-1 p-4 ">
                    <div class="flex text-md text-blue-900">
                      <div class="inline-block relative py-1 text-xs ">
                        <div class="absolute inset-0 text-green-300 flex">
                          <svg height="100%" viewBox="0 0 50 100">
                            <path
                              d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                              fill="currentColor"
                            />
                          </svg>
                          <div class="flex-grow h-full -ml-px bg-green-300 rounded-md rounded-l-none"></div>
                        </div>
                        <span class="relative text-green-500 uppercase font-semibold pr-px">
                          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          {item.tag}
                          <span>&nbsp;</span>
                        </span>
                      </div>
                      <h1 className="ml-1 text-sm">
                        {" "}
                        {item.nameTag.substring(0, 27) + "..."}
                      </h1>
                    </div>
                    <div className={`${type == "baiviet" ? "" : "hidden"}`}>
                      <Link to={`/baiviet/view/${item._id}`}>
                        <div class="relative h-6 text-blue-800 text-sm">
                          <span class="text-md transition duration-300 group-hover:invisible group-hover:opacity-0">
                            {item.title.substring(0, 27)}
                          </span>
                          <a
                            href=""
                            class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                          >
                            <span>Xem Ngay </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </Link>
                    </div>
                    <div className={`${type == "tailieu" ? "" : "hidden"}`}>
                      <Link to={`/tailieu/view/${item._id}`}>
                        <div class="relative h-6 text-blue-800 text-sm ">
                          <span class=" block transition duration-300 group-hover:invisible group-hover:opacity-0">
                            {item.title}
                          </span>
                          <a
                            href=""
                            class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                          >
                            <span>Xem Ngay </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <img
                    class="absolute bottom-0 z-99 right-6 w-[6rem] h-[6rem] rounded-full transition duration-300 group-hover:scale-[1.3]"
                    src={item.createrPhoto}
                    alt=""
                  />
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
  return (
    <>
      <div></div>
      {data && data != "" ? (
        Render()
      ) : (
        <>
          <Skenleton num={4} />
        </>
      )}
    </>
  );
}

export default CardRight;
