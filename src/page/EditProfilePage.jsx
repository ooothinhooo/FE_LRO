import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider.jsx";
import { useParams } from "react-router-dom";
import { Header } from "../components/index.js";
import { FUNC_VIEW_PROFILE_USER } from "../service/index.js";

function EditProfilePage() {
  const { user } = useContext(ProductContext);
  const [dataUser, setDataUser] = useState([]);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    userName: "",
    email: "",
    phone: "",
    avatar: "",
    isSex: "",
  });
  const { id } = useParams();
  const [Form, setForm] = useState({
    first_name: dataUser.first_name,
    last_name: dataUser.last_name,
    userName: dataUser.username,
    email: dataUser.email,
    phone: dataUser.phone,
    avatar: dataUser.avatar,
    isSex: dataUser.isSex,
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    try {
      if (true) {
      } else {
      }
    } catch (error) {}
  };

  const handleUploadImg = () => {
    try {
    } catch (error) {}
  };

  const CallAPI = async () => {
    try {
      const result = await FUNC_VIEW_PROFILE_USER(id);
      setDataUser(result.data.data);
      console.log(dataUser);
    } catch (error) {}
  };
  useEffect(() => {
    CallAPI();
    console.table(Form);
  }, []);
  useEffect(() => {
    console.table(data);
  }, [data]);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-full h-[90vh] bg-white flex justify-center items-center">
        <div className="w-[80%] h-full ">
          <div className="w-full h-[90%] border-2 bg-blue-300 border-green-400 shadow-xl shadow-pink-300/30 rounded-3xl">
            <div class="w-full h-full grid grid-cols-3 gap-4">
              <div class="w-full h-full flex justify-center items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="">
                    <img
                      className="w-60 h-60 m-3 flex justify-center items-center rounded-full"
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbbVXz5MX6Cqf3e6IegOl3nXSCtHQ2L-RwHLzkfrbYg&s`}
                      alt=""
                    />
                    <h1 className="items-center justify-center flex text-2xl font-semibold">
                      Ngoc Vi Le
                    </h1>
                    <h2 className="items-center justify-center flex text-xl font-extralight">
                      ngocvi@gmail.com
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-span-2 w-full h-full flex justify-center items-center ">
                <div className="w-full h-full flex justify-center items-center">
                  <div>
                    <div class="grid max-w-3xl gap-2 pt-5 pb-1 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400">
                      <div class="grid">
                        <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                          <input
                            type="text"
                            name="first_name"
                            onChange={handleChange}
                            id="first-name"
                            class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                            placeholder="First name"
                          />
                          <label
                            html="first-name"
                            class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                          >
                            First name
                          </label>
                        </div>
                      </div>
                      <div class="grid">
                        <div class="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                          <input
                            type="text"
                            name="last_name"
                            onChange={handleChange}
                            id="last-name"
                            class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                            placeholder="Last name"
                          />
                          <label
                            html="last-name"
                            class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                          >
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="grid max-w-3xl gap-2 pt-5 pb-1 px-8 sm:grid-cols-2 bg-white rounded-md ">
                      <div class="grid">
                        <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                          <input
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            id="phone"
                            class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                            placeholder="Phone"
                          />
                          <label
                            html="first-name"
                            class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                          >
                            Phone
                          </label>
                        </div>
                      </div>
                      <div class="grid">
                        <div class="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                          <select
                            id="countries"
                            onChange={handleChange}
                            name="isSex"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected>Choose a Sex</option>
                            <option value="1">Man</option>
                            <option value="2">Women</option>
                            <option value="3">Orther</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="max-w-3xl gap-2 py-5 px-8 sm:grid-cols-2 bg-white  border-b-4 border-purple-400">
                      <div class="block my-2">
                        <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                          <input
                            type="text"
                            name="username"
                            id="user-name"
                            onChange={handleChange}
                            class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                            placeholder="Username"
                          />
                          <label
                            html="company"
                            class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                          >
                            User Name
                          </label>
                        </div>
                      </div>
                      <div class="block my-2">
                        <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                          <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            id="email"
                            class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                            placeholder="Email"
                          />
                          <label
                            html="email"
                            class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                          >
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div class="block">
                          <button
                            type="submit"
                            class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                          >
                            Cập Nhật Avatar
                          </button>
                        </div>
                        <div class="block">
                          <button
                            type="submit"
                            class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfilePage;
