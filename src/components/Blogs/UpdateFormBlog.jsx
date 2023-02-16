import React, { useEffect } from "react";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { FaLockOpen, FaLock } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { find_one_blog } from "../../service/Blogs/FindOneBlog.js";
import { add_blog } from "../../service/Blogs/Add_Blog.js";

function UpdateFormBlog() {
  const { user } = useContext(ProductContext);
  const auth = user?.token;

  let { id } = useParams();
  console.log(id);
  const [selected, setSelected] = useState([]);
  //   const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  //   const [viewprivate, setPrivate] = useState(false);

  const [dataArr, setDataArr] = useState([]);

  const [value, setValue] = React.useState("");
  const [otitle, setoTitle] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [viewprivate, setPrivate] = useState(false);

  const [form, setForm] = useState({
    post_id: id,
    userId: "",
    title: otitle,
    desc: value,
    nameTag: "",
    tag: tag,
    isPrivate: Boolean(viewprivate),
    creater: "",
    createrPhoto: "",
  });
  const GetPost = async () => {
    try {
      const result = await find_one_blog(id);
      setDataArr(result.data.data);
      var re = result.data.data;
      // console.log(result);
      setoTitle(re.title);
      setTag(re.tag);
      setValue(re.desc);
      setPrivate(Boolean(re.isPrivate));
      setForm({
        post_id: id,
        userId: re.userId,
        title: otitle,
        desc: value,

        tag: tag,
        isPrivate: Boolean(viewprivate),
        creater: re.creater,
        createrPhoto: re.createrPhoto,
      });
    } catch (error) {}
  };
  // GetPost();
  useEffect(() => {
    setForm({
      post_id: id,
      userId: dataArr?.userId,
      title: otitle,
      desc: value,

      tag: tag,
      isPrivate: Boolean(viewprivate),
      creater: dataArr?.creater,
      createrPhoto: dataArr?.createrPhoto,
    });
  }, [otitle, value, tag, dataArr]);
  useEffect(() => {
    GetPost();
  }, []);
  // console.table(dataArr);
  // console.table(form);

  //   const handleSubmit = async () => {
  //     const result = await update_post(auth, form);
  //     console.log(result);
  //     if (result.status == 200) {
  //       if (result.data.status === 200) {
  //         toast(result.data.message);
  //         setTimeout(() => {

  //           setTag("");
  //           setValue("");
  //           setoTitle("");
  //         }, 1000);
  //         return;
  //       }
  //       if (result.data.status === 201) {
  //         toast(result.data.data);
  //         return;
  //       }
  //       if (result.data.status === 202) {
  //         toast(result.data.message);
  //         return;
  //       }
  //     }
  //   };

  return (
    <>
      <ToastContainer />

      <div className="w-ful h-auto flex justify-center  items-center my-4 ">
        <div className="w-[96%] h-32  justify-center items-center ">
          <div className="mb-1 pt-0">
            <input
              type="text"
              placeholder="Tiêu đề"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow-md outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div className="w-full flex mt-2 justify-center items-center">
            <div class="w-full ">
              <div class="flex bg-white p-1 justify-center items-center w-full space-x-2 sm:space-x- rounded border border-gray-500 dark:bg-gray-700 dark:border-gray-300">
                <div className=" px-1 mx-1 h-6 w-6 flex justify-center items-center">
                  <span
                    onClick={(e) => setPrivate(!viewprivate)}
                    className="text-4xl "
                    id="isprivate"
                  >
                    {viewprivate ? (
                      <>
                        <FaLock className="text-red-700" />
                      </>
                    ) : (
                      <span>
                        <FaLockOpen className="text-blue-600" />
                      </span>
                    )}
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 opacity-50 dark:text-gray-100 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <div className={` w-full border-0`}>
                  <div className={` w-full border-0`}>
                    <TagsInput
                      value={selected}
                      onChange={setSelected}
                      name="tag"
                      id="tag"
                      placeHolder="Gắn thẻ bài viết của bạn. Tối đa 5 thẻ. Ít nhất 1 thẻ!"
                      classNames={` w-full border-0`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto ml-4">
              <div class="w-full h-auto flex space-x-2 justify-center">
                <button
                  //   onClick={handleSubmit}
                  type="button"
                  class="w-full inline-block px-6 py-4 bg-blue-400  text-white font-medium text-xs leading-tight uppercase rounded shadow-lg shadow-blue-200/50 hover:shadow-green-200/60 hover:bg-green-300 hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Đăng Bài
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            {" "}
            <MDEditor
              className="h-full bg-primary"
              height={800}
              value={value}
              // onChange={(e) => setValue(e.target.value)}
              onChange={setValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateFormBlog;
