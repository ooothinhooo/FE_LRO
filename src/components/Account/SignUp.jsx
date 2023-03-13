import React, { useEffect, useState } from "react";
import { register } from "../../service/Account/Register.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../../firebase.js";
import { authentication } from "../../firebase.js";
import { login } from "../../service/Account/Login.js";
import Swal from "sweetalert2";
import removeVietnameseAndWhitespace from "../../func/remove.class.js";
import { splitName } from "../../func/sliceName.js";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.js";

function SignUp() {
  const navigation = useNavigate();
  const firebaseAuth = getAuth(app);
  const [layout, setLayout] = useState(Boolean(true));
  const [errors, setErorrs] = useState(null);
  const [avatar, setAvatar] = useState();
  const [form2, setForm2] = useState({
    form: "",
    uid: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    avatar: "",
    first_name: "",
    last_name: "",
    isSex: "",
    phone: "",
  });

  // setForm data
  const loginWithGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const username = removeVietnameseAndWhitespace(
      user?.displayName.toLocaleLowerCase()
    );
    const { firstName, lastName } = splitName(user?.displayName);

    form2.form = "google";
    form2.uid = user?.uid;
    form2.username = username;
    form2.email = user?.email;
    form2.password = username;
    form2.avatar = user?.photoURL;
    form2.first_name = firstName;
    form2.last_name = lastName;
    form2.isSex = 3;
    form2.phone = user?.uid;

    Func_Register();
  };

  const loginWithFacebook = async (e) => {
    const provider = new FacebookAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const username = removeVietnameseAndWhitespace(
      user?.displayName.toLocaleLowerCase()
    );
    const { firstName, lastName } = splitName(user?.displayName);

    // const { refreshToken, providerData } = user;
    // setForm2
    console.log(user);
    form2.form = "facebook";
    form2.uid = user?.uid;
    form2.username = username;
    form2.email = user?.email;
    form2.password = username;
    form2.avatar = user?.photoURL;
    form2.first_name = firstName;
    form2.last_name = lastName;
    form2.isSex = 3;
    form2.phone = user?.uid;
    // console.table(form2);
    Func_Register();
  };

  const Func_Login = async () => {
    // console.log("Login run");
    const resultLogin = await login(form2);
    // console.log(resultLogin);
    if (resultLogin.status == 200) {
      if (resultLogin.data.status === 200) {
        toast(resultLogin.data.message);
        // toast("Vui Lòng Chờ");
        // console.log(result);
        localStorage.setItem("user", JSON.stringify(resultLogin.data.data));
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        return;
      }
      if (resultLogin.data.status === 201) {
        // setErorrs(resultLogin.data.data);
        toast(resultLogin.data.data);
        // console.log()
        return;
      }

      if (resultLogin.data.status === 202) {
        toast(resultLogin.data.message);
        return;
      }
    }
    // console.warn(errors);
  };
  const Func_Register = async () => {
    const result = await register(form2);
    console.log(result);
    if (result.status == 200) {
      if (result.data.status === 200) {
        console.log(result.data);
        // localStorage.setItem("user", JSON.stringify(result.data.data));
        // toast("Register Successfully");
        let timerInterval;
        Swal.fire({
          title: "Register Successfully",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        setTimeout(() => {
          Func_Login();
        }, 1000);
        return;
      }
      if (result.data.status === 201) {
        // setErorrs(result.data.data);
        console.log("201", result.data.data);
        toast(result.data.data);
        return;
      }
      if (result.data.status === 202) {
        Func_Login();
        return;
      }
    }
  };

  // setForm data
  const handleChange = (e) => {
    setForm2({ ...form2, [e.target.name]: e.target.value });
  };

  // submit btn register
  const handleSubmit = async (e) => {
    // const result = await re(form);
    form2.form = "LRO";
    form2.avatar = avatar;
    // form2.uid = user?.uid;
    if (form2.password === form2.passwordConfirmation) {
      const result = await register(form2);
      if (result.status == 200) {
        if (result.data.status === 200) {
          toast("Register Successfully");

          setTimeout(() => {
            navigation("/login");
          }, 2000);
          return;
        }
        if (result.data.status === 201) {
          setErorrs(result.data.data);
          toast(result.data.data);
          return;
        }

        if (result.data.status === 202) {
          toast(result.data.message);
          return;
        }
      }
    } else {
      toast("Mật Khẩu Không Khớp");
    }
  };

  useEffect(() => {
    console.table(form2);
  }, [form2]);

  const uploadImage = (e) => {
    e.preventDefault();
    try {
      const imageFile = e.target.files[0];
      // console.log(imageFile);
      const fileName = new Date().getTime() + imageFile.name;

      const storageRef = ref(
        storage,
        `avt/${fileName.split("").join("").toUpperCase()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAvatar(downloadURL);
            toast("Thêm ảnh đại diện thành công");

            console.log(downloadURL);
          });
        }
      );
    } catch (error) {}
  };

  return (
    <>
      <ToastContainer />
      <div class="relative min-h-screen flex items-center justify-center bg-center bg-blue-300 py-12 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
        {/* <div class="absolute  bg-black opacity-60 inset-0 z-0"></div> */}
        {layout ? (
          <>
            <div
              class={`max-w-3xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10`}
            >
              <div class="grid  gap-8 grid-cols-1">
                <div class="flex flex-col ">
                  <div class="flex flex-col sm:flex-row items-center">
                    <h2 class="font-semibold text-lg mr-auto">
                      Đăng Ký Tài Khoản
                    </h2>
                    {/* <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div> */}
                    <h2
                      onClick={(e) => setLayout(!layout)}
                      className="bg-green-400 text-white py-1 px-2 rounded-md cursor-pointer"
                    >
                      Tiếp tục
                    </h2>
                  </div>
                  <div class="mt-5">
                    <div class="form">
                      <div class="md:space-y-2 mb-3">
                        <label class="text-xs font-semibold text-gray-600 py-2">
                          Chọn Ảnh Đại Diện
                        </label>
                        <div class="flex items-center ">
                          <div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                            <img
                              class="w-12 h-12 mr-4 object-cover"
                              src={
                                avatar
                                  ? avatar
                                  : "http://0.gravatar.com/avatar/c55152277c080827c89d0e57dca207f0?s=320&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D320"
                              }
                              alt="Avatar"
                            />
                          </div>
                          <label class="cursor-pointer ">
                            <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                              Browse
                            </span>
                            <input
                              id="file-upload"
                              type="file"
                              name="upload-image"
                              accept="image/*"
                              onChange={uploadImage}
                              class="hidden"
                            />
                          </label>
                        </div>
                      </div>
                      <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                        <div class="mb-3 space-y-2 w-full text-xs">
                          <label class="font-semibold text-gray-600 py-2">
                            Họ <abbr title="required">*</abbr>
                          </label>
                          <input
                            placeholder="VD: Trần"
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required="required"
                            type="text"
                            name="first_name"
                            onChange={handleChange}
                            id="first_name"
                          />
                          <p class="text-red text-xs hidden">
                            Please fill out this field.
                          </p>
                        </div>
                        <div class="mb-3 space-y-2 w-full text-xs">
                          <label class="font-semibold text-gray-600 py-2">
                            Tên <abbr title="required">*</abbr>
                          </label>
                          <input
                            placeholder="Vd: Văn Thịnh"
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required="required"
                            type="text"
                            name="last_name"
                            id="last_name"
                            onChange={handleChange}
                          />
                          <p class="text-red text-xs hidden">
                            Please fill out this field.
                          </p>
                        </div>
                      </div>
                      {/*  */}

                      {/*  */}
                      <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                        <div class="w-full flex flex-col mb-3">
                          <label class="font-semibold text-gray-600 py-2">
                            Số điện thoại
                          </label>
                          <input
                            placeholder=""
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="number"
                            name="phone"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="w-full flex flex-col mb-3">
                          <label class="font-semibold text-gray-600 py-2">
                            Giới Tính<abbr title="required">*</abbr>
                          </label>
                          <select
                            class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                            required="required"
                            name="isSex"
                            onChange={handleChange}
                            id="integration_city_id"
                          >
                            <option value="">Chọn </option>
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                            <option value="3">Khác</option>
                          </select>
                          <p
                            class="text-sm text-red-500 hidden mt-3"
                            id="error"
                          >
                            Please fill out this field.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div class="btn-wrapper text-center">
                  <button
                    onClick={loginWithFacebook}
                    class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      className="w-5 h-5 mr-1 text-blue-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" />
                    </svg>
                    Facebook
                  </button>
                  <button
                    onClick={loginWithGoogle}
                    class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      class="w-5 mr-1"
                      src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                    />
                    Google{" "}
                  </button>
                </div>
                <div class="border-b-1 border-blueGray-300"> </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              class={` max-w-3xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10`}
            >
              <div class="flex flex-col sm:flex-row items-center">
                <h2 class="font-semibold text-lg mr-auto">Đăng Ký Tài Khoản</h2>
                {/* <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div> */}
                <h2
                  onClick={(e) => setLayout(!layout)}
                  className="bg-green-400 text-white py-1 px-2 rounded-md cursor-pointer"
                >
                  Quay lại
                </h2>
              </div>
              <div class="mb-3 space-y-2 w-full text-xs">
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2">
                    UserName
                  </label>
                  <input
                    placeholder=""
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="mb-3 space-y-2 w-full text-xs">
                <label class=" font-semibold text-gray-600 py-2">Email</label>
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                  <div class="flex">
                    <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2">
                    Mật Khẩu
                  </label>
                  <input
                    placeholder=""
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div class="w-full flex flex-col mb-3">
                  <label class="font-semibold text-gray-600 py-2">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    placeholder=""
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="password"
                    name="passwordConfirmation"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                {/* <button
                onClick={set}
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                  Xoá
                </button> */}
                <button
                  onClick={handleSubmit}
                  class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                >
                  Đăng Ký
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SignUp;
