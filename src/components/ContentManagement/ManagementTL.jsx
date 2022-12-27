import { FaLockOpen, FaLock, FaRegEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { GET_ALL_DOC, GET_DOC } from "../../service/apiConstant.js";
import { delete_doc } from "../../service/TaiLieu/DeleteDoc.js";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { get_doc } from "../../service/TaiLieu/GetDoc.js";
function ManagementTL() {
  const { user } = useContext(ProductContext);
  const auth = user.token;
  const [docs, setdocs] = useState([]);

  const getAllDocs = async () => {
    try {
      const { data } = await get_doc(auth);

      setdocs(data.data.docs);
    } catch (error) {
      console.log(error);
    }
  };

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteDocs(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  const DeleteDocs = async (id) => {
    try {
      const result = await delete_doc(auth, id);
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
  console.log(docs);
  return (
    <div>
      <ToastContainer />

      <h2 className="md:text-3xl text-xl text-red-500 my-2 mb-10">
        Tài Liệu Đã Tải Lên
      </h2>
      <div className="mt-10 w-full ">
        {docs?.map((item) => {
          return (
            <>
              <div className="w-full  inline-block relative py-1  justify-center items-center">
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
                        {item.isPrivate ? (
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
                            {item.tag}
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
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            {item.nameTag}

                            <span>&nbsp;</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ManagementTL;
