import React, { useState, useEffect } from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import data from "../../data/course.js";

import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { find_one_post } from "../../service/BaiViet/FindOnePost.js";
import { useParams } from "react-router-dom";
import { update_post } from "../../service/BaiViet/UpdatePost.js";
function FormBV() {
  const { user } = useContext(ProductContext);
  const auth = user?.token;

  let { id } = useParams();

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
      const result = await find_one_post(id);
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
        nameTag: "",
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
      nameTag: courses[0]?.name,
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

  const courses = data.filter(function (item) {
    return item.key === tag?.toUpperCase();
  });

  const handleSubmit = async () => {
    const result = await update_post(auth, form);
    console.log(result);
    if (result.status == 200) {
      if (result.data.status === 200) {
        toast(result.data.message);
        setTimeout(() => {
          //   window.location.reload();
          setTag("");
          setValue("");
          setoTitle("");
        }, 1000);
        return;
      }
      if (result.data.status === 201) {
        toast(result.data.data);
        return;
      }
      if (result.data.status === 202) {
        toast(result.data.message);
        return;
      }
    }
  };

  return (
    <>
      <div>
        <ToastContainer />

        <div className="h-full w-full justify-center items-center">
          <span className="m-2 -mt-2">
            Tên Môn Học Phần:{" "}
            <span className="text-blue-500">{courses[0]?.name}</span>
          </span>
          <div className="my-2 flex justify-center items-center ">
            <span
              onClick={(e) => setPrivate(!viewprivate)}
              className="text-4xl p-1 mr-1 "
            >
              {viewprivate ? (
                <>
                  <FaLock className="text-blue-700" />
                </>
              ) : (
                <>
                  <FaLockOpen className="text-pink-700" />
                </>
              )}
            </span>
            <input
              type="text"
              className="h-10 w-full bg-primary border text-lg text-blue-400"
              placeholder="Tiêu Đề Bài Viết"
              value={otitle}
              onChange={(e) => setoTitle(e.target.value)}
            />
            <input
              type="text"
              className="h-10 w-full bg-primary border text-lg text-blue-400 uppercase"
              placeholder="Mã Học Phần"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />

            <button
              // onClick={handlePublish}
              onClick={handleSubmit}
              className="md:w-14 h-14 rounded-lg justify-center items-center 
                                    flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                                 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                  dark:focus:ring-blue-800"
            >
              Post
            </button>
          </div>
          <div>
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

export default FormBV;
