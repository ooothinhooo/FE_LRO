import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { add_doc } from "../../service/TaiLieu/AddDoc.js";
import { FileInput } from "../../components";
import dataCourse from "../../data/course.js";

function DocForm() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const [isP, setisP] = useState(false);
  const [isHP, setisHP] = useState(false);
  const [tagName, setTagName] = useState("");
  // console.log(isHP);
  const [data, setData] = useState({
    title: "",
    tag: "",
    dataURL: "",
    nameTag: "",
    desc: "",
    userId: user?.userId,
    creater: user?.username,
    createrId: user?.userId,
    createrPhoto: user?.photoURL,
    isPrivate: "",
  });
  // console.table(data);

  const courses = dataCourse.filter(function (item) {
    return item?.key?.toUpperCase() === data?.tag?.toUpperCase();
  });

  // console.log(data.nameTag);

  const set = () => {
    if (courses.length >= 0) {
      data.nameTag = courses[0]?.name;
    } else {
      data.nameTag = tagName;
    }
  };
  useEffect(() => {
    set();
    // console.log("use");
    data.nameTag = courses[0]?.name;
  }, [data.tag, data.nameTag]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    data.isPrivate = isP;
    if (isHP) {
      data.tag = "CTU";
      data.nameTag = "Tài Liệu Khác";
    }

    console.table(data);
    e.preventDefault();
    const resultLogin = await add_doc(token, data);
    console.log(resultLogin);
    if (resultLogin.status == 200) {
      if (resultLogin.data.status === 200) {
        toast(resultLogin.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return;
      }
      if (resultLogin.data.status === 201) {
        toast(resultLogin.data.data);
        return;
      }
      if (resultLogin.data.status === 202) {
        toast(resultLogin.data.message);
        return;
      }
    }
  };

  return (
    <div>
      <ToastContainer />

      <div className="my-6 py-6  h-auto ">
        <div role="alert" className="justify-center flex items-center mb-6">
          <div class="border-t border-b border-red-500 text-red-700 px-4 py-3">
            <p class="font-bold">Thông Báo</p>
            <p class="text-sm">
              MỌI NGƯỜI VUI LÒNG ĐĂNG TẢI CÁC TÀI LIỆU Ở ĐỊNH DẠNG PDF NHÉ
            </p>{" "}
            <p class="text-sm">
              Các định dạng khác vẫn được những sẽ xem trước không được
            </p>
          </div>
        </div>

        <div>
          <div class="max-w-2xl mx-auto">
            <div className="">
              <div className="mb-4 justify-center">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    // value={isP}
                    onChange={(e) => setisP(!isP)}
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  {!isP ? (
                    <>
                      <span class="ml-3 text-sm font-medium text-gray-100 dark:text-gray-300">
                        Chế độ đăng công khai
                      </span>
                    </>
                  ) : (
                    <>
                      <span class="ml-3 text-sm font-medium text-gray-100 dark:text-gray-300">
                        Chế độ đăng riêng tư
                      </span>
                    </>
                  )}
                </label>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    // value={isP}
                    onChange={(e) => setisHP(!isHP)}
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  {!isHP ? (
                    <>
                      <span class="ml-3 text-sm font-medium text-gray-100 dark:text-gray-300">
                        Chế độ đăng Theo Môn Học
                      </span>
                    </>
                  ) : (
                    <>
                      <span class="ml-3 text-sm font-medium text-gray-100 dark:text-gray-300">
                        Chế độ đăng Không Theo Môn Học
                      </span>
                    </>
                  )}
                </label>
              </div>

              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="title"
                  onChange={handleChange}
                  value={data.title}
                />
                <label
                  for="floating_email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nhập Tiêu Đề
                </label>
              </div>

              {!isHP ? (
                <>
                  <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 mb-1 mt-2 w-full group">
                      <input
                        type="text"
                        class="block uppercase py-3 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        name="tag"
                        onChange={handleChange}
                        value={data.tag}
                      />
                      <label
                        for="floating_first_name"
                        class="absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Mã Môn Học
                      </label>
                    </div>
                    <div class="relative z-0 mb-1 mt-2 w-full group">
                      <input
                        type="text"
                        name="nameTag"
                        onChange={handleChange}
                        onChange={(e) => setTagName(e.target.value)}
                        value={data.nameTag}
                        // value={tagName}
                        class="block py-3 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        // class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_last_name"
                        class="absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Tên Môn Học
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              {/* <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 mb-1 mt-2 w-full group">
                  <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      onChange={(e) => setisP(false)}
                      name="bordered-checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-checkbox-1"
                      class="py-4 ml-2 w-full text-sm font-medium text-gray-100 dark:text-gray-300"
                    >
                      Đăng Công Khai
                    </label>
                  </div>
                </div>
                <div class="relative z-0 mb-1 mt-2 w-full group">
                  <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input
                      checked
                      id="bordered-checkbox-2"
                      type="checkbox"
                      // value={isP}
                      onChange={(e) => setisP(true)}
                      name="bordered-checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-checkbox-2"
                      class="py-4 ml-2 w-full text-sm font-medium text-gray-100 dark:text-gray-300"
                    >
                      Đăng Riêng Tư
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <div className="justify-center items-center">
                <div class="max-w-2xl mx-auto">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    for="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div> */}
              <div class="relative z-0 mb-6 w-full group">
                <div
                  class="mt-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
             border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <FileInput
                    className={`w-full`}
                    name="dataURL"
                    label="Choose PDF"
                    handleInputState={handleInputState}
                    type="docs"
                    value={data.dataURL}
                  />
                </div>
              </div>

              <div
                className={`${
                  (data &&
                    data.title != "" &&
                    data.tag != "" &&
                    data.nameTag != "" &&
                    data?.dataURL?.size == undefined &&
                    data.dataURL != "") ||
                  isHP
                    ? ""
                    : "hidden"
                } container border-none relative w-full justify-center items-center`}
              >
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class=" justify-center items-center w-[90%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Đăng Tải Tài Liệu
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="justify-center items-center">
      <div class="max-w-2xl mx-auto">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          for="file_input"
        >
          Upload file
        </label>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
    </div> */}
      </div>
    </div>
  );
}

export default DocForm;
