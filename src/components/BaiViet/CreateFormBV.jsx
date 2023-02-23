import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaLockOpen, FaLock } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import data from "../../data/course.js";
import { add_post } from "../../service/BaiViet/AddPost.js";
import { TagsInput } from "react-tag-input-component";

import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { FUNC_CREATE_ART } from "../../service/FuncArt/index.js";
function FormBV() {
  const { user } = useContext(ProductContext);
  const auth = user?.token;
  const [value, setValue] = React.useState("");
  const [otitle, setoTitle] = React.useState("");
  const [selected, setSelected] = useState([]);
  const [isP, setisP] = useState(false);
  const [form, setForm] = useState({
    title: otitle,
    content: value,
    tag: selected,
    isPrivate: Boolean(isP),
    creatorsName: user.first_name + " " + user.last_name,
    creatorsId: user.userId,
    creatorsPhoto: user.avatar,
  });

  useEffect(() => {
    setForm({
      title: otitle,
      content: value,
      tag: selected,
      isPrivate: Boolean(isP),
      creatorsName: user.first_name + " " + user.last_name,
      creatorsId: user.userId,
      creatorsPhoto: user.avatar,
    });
  }, [otitle, value, isP, selected]);

  console.table(form);
  const handleSubmit = async () => {
    const result = await FUNC_CREATE_ART(auth, form);
    console.log(result);
    if (result.status == 200) {
      if (result.data.status === 200) {
        toast(result.data.message);
        setTimeout(() => {
            
          setSelected([]);
          setValue("");
          setoTitle("");
          window.location = "/baiviet";

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
      <div className="bg-white w-full flex justify-center items-center">
        <ToastContainer />

        <div className="h-full w-[95%] bg-gray-200 p-5 flex justify-center items-center">
          <div className="w-full justify-center items-center">
            <div className="w-full h-full">
              <div class="grid grid-cols-3 gap-4 my-2">
                <div class="col-span-2 w-full h-10  ">
                  <input
                    type="text"
                    className="h-10 w-full bg-white border text-lg text-blue-400"
                    placeholder="Tiêu Đề Bài Viết"
                    value={otitle}
                    onChange={(e) => setoTitle(e.target.value)}
                  />
                </div>
                <div class="w-full  ">
                  <div className=" h-full  w-full">
                    <div className="flex gap-1 h-full    rounded-md justify-center items-center">
                      <div
                        className={`${
                          isP ? "bg-gray-300" : "bg-green-400"
                        } cursor-pointer w-full h-full flex justify-center border-md  border-blue-400  items-center px-4 py-2  text-purple-700  border-none rounded-md duration-100 ease-in-out focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                      >
                        <span>Xoá</span>
                      </div>
                      <button
                        // onClick={handlePublish}
                        onClick={handleSubmit}
                        className="md:w-full h-10 rounded-lg justify-center items-center 
                                    flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                                 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                  dark:focus:ring-blue-800"
                      >
                        Đăng Tải Bài Viết
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full h-[56px]  ">
                  <div className=" h-full  w-full">
                    <div className="flex gap-1 h-full  bg-white  rounded-md justify-center items-center">
                      <div
                        onClick={(e) => setisP(!isP)}
                        className={`${
                          isP ? "bg-gray-300" : "bg-green-400"
                        } cursor-pointer w-full h-full flex justify-center border-md  border-blue-400  items-center px-4 py-2  text-purple-700  border-none rounded-md duration-100 ease-in-out focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                      >
                        <span>Công khai</span>
                      </div>
                      <div
                        onClick={(e) => setisP(!isP)}
                        className={`${
                          !isP ? "bg-gray-300" : "bg-green-400"
                        } cursor-pointer flex justify-center  border-md border-blue-400  items-center w-full h-full  px-4 py-2  text-purple-700  border-none rounded-md duration-100 ease-in-out focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                      >
                        <span>Riêng tư</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-2 w-full h-full bg-green-400">
                  <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="tag"
                    id="tag"
                    placeHolder="Gắn thẻ bài viết của bạn. Tối đa 5 thẻ. Ít nhất 1 thẻ!"
                    classNames={` w-full border-0 h-auto`}
                  />
                </div>
              </div>
            </div>

            <div>
              {" "}
              <div data-color-mode="light">
                <MDEditor
                  className="h-full bg-white"
                  height={800}
                  value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  onChange={setValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormBV;
