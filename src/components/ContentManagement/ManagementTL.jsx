import { FaLockOpen, FaLock, FaRegEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";

import {
  FUNC_DELETE_DOC,
  FUNC_DOC_LIST_FOR_USER,
  FUNC_SET_IS_PRIVATE_DOC,
} from "../../service/FuncDoc/index.js";
import { deleteCollection } from "../../func/delete.Cmt.js";
function ManagementTL() {
  const { user } = useContext(ProductContext);
  const auth = user.token;
  const uid = user.userId;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState("");
  const [infoCreators, setInfoCreators] = useState("");
  const [result, setResult] = useState([]);
  const getAllDocs = async () => {
    try {
      const { data } = await FUNC_DOC_LIST_FOR_USER(auth, page);
      setCount(data.data.count);
      setInfoCreators(data.data.infoCreators);
      setResult(data.data.result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const nextPage = () => {
    const pg = page < Math.ceil(result.length / 10) ? page + 1 : 1;
    setPage(pg);
    // getPagination();
  };
  const prevPage = () => {
    const pg = page === 1 ? 1 : page - 1;
    setPage(pg);
    // getPagination();
  };

  useEffect(() => {
    getAllDocs();
  }, [page]);

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: `${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCollection("CMT/tailieu/", id);

        // DeleteDocs(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  const DeleteDocs = async (id) => {
    try {
      const result = await FUNC_DELETE_DOC(auth, id);
      console.log(result);
      if (result.data.status == 200) {
        getAllDocs();
        toast("Delete Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllDocs();
  }, []);
  const handleIsPrivate = async (id) => {
    try {
      const result = await FUNC_SET_IS_PRIVATE_DOC(auth, id);
      console.log(result);
      if (result.data.status == 200) {
        // getAllPost();
        getAllDocs();
        // toast("Delete Successfully");
      }
    } catch (error) {}
  };

  return (
    <div className="w-full h-full">
      <ToastContainer />

      <h2 className="md:text-3xl text-xl text-red-500 my-2 mb-10">
        Tổng số <span>Tài Liệu</span> Đã Tải Lên: {count}
      </h2>
      <div className="mt-10 w-full ">
        {result?.map((item) => {
          return (
            <>
              <div className="w-full inline-block relative py-1  justify-center items-center">
                <div class="hidden  md:flex absolute inset-0 text-white justify-start items-center">
                  <svg className="text-white" height="91%" viewBox="0 0 50 100">
                    <path
                      className="text-gray-200"
                      d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="bg-white shadow-lg  border-2 border-rose-500 justify-end  w-full md:w-[92%] p-2 md:ml-10  z-[100] ">
                  <div className="flex justify-between  ">
                    <div className="flex justify-start items-center z-50">
                      <p
                        onClick={() => handleIsPrivate(item._id)}
                        className="text-2xl mx-2 cursor-pointer hover:text-red-900 z-60"
                      >
                        {item.isPrivate ? (
                          <span className="cursor-pointer">
                            <FaLock className="text-red-400" />
                          </span>
                        ) : (
                          <span className="cursor-pointer">
                            <FaLockOpen className="text-green-400" />
                          </span>
                        )}
                      </p>
                      <p className="text-md md:text-lg text-blue-400  font-extrabold">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex justify-end items-center ">
                      <button class="group shadow-lg shadow-cyan-300/50 relative overflow-hidden rounded bg-sky-400 bg-blue-300 hover:bg-green-400 hover:shadow-green-300/80 px-2 py-1 mx-1 font-sans uppercase  ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2">
                        <p class="text-primary flex text-md justify-center  items-center shadow-lg shadow-blue-400/10 transition-all group-active:scale-90">
                          <FaRegEye /> {item.view}
                        </p>
                      </button>
                      <button class="group shadow-lg shadow-cyan-300/50 relative overflow-hidden rounded bg-sky-400 bg-blue-300 hover:bg-green-400 hover:shadow-green-300/80 px-2 py-1 mx-1 font-sans uppercase  ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2">
                        <p class="text-primary flex text-md justify-center  items-center shadow-lg shadow-blue-400/10 transition-all group-active:scale-90">
                          <AiFillLike /> {item.like.length}
                        </p>
                      </button>
                      <button
                        onClick={(e) => handleDelete(item._id)}
                        class="group shadow-lg shadow-cyan-300/50 relative overflow-hidden rounded bg-sky-400 bg-red-300 hover:bg-pink-400 hover:shadow-green-300/80 px-2 py-1 mx-1 font-sans uppercase  ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2"
                      >
                        <p class="text-primary  shadow-lg shadow-blue-400/10 transition-all group-active:scale-90">
                          DELETE
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex justify-start items-center mx-1">
                      {/* <div className="mx-1">
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
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            {item.tag}
                            <span>&nbsp;</span>
                          </span>
                        </div>
                      </div> */}
                      {item?.tag?.map((i) => {
                        return (
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
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                {i}
                                <span>&nbsp;</span>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div
          className={`${
            result.length < 10 ? "hidden" : "block"
          } my-3 w-full   flex justify-center items-center `}
        >
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
      </div>
    </div>
  );
}

export default ManagementTL;
