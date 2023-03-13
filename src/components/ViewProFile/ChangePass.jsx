import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GiFastBackwardButton } from "react-icons/gi";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { BoxViewBV, BoxViewTL, Skenleton } from "../index.js";
import Swal from "sweetalert2";
import { FUNC_CHANGE_PASS_USER } from "../../service/index.js";

function ChangePass() {
  const { user } = useContext(ProductContext);
  let auth = user?.token;
  const [isMenu, setIsMenu] = useState(1);
  const [isPass, setIsPass] = useState();
  const [isConfirmPass, setIsConfirmPass] = useState();
  const handleChange = async (e) => {
    if (isConfirmPass === isPass) {
      const result = await FUNC_CHANGE_PASS_USER(auth, isConfirmPass);
      console.log(result);
      if (result.data.status == 200) {
        let timerInterval;
        Swal.fire({
          title: "Dữ Liệu Đang Cập Nhật",
          html: "I will close in <b></b> milliseconds.",
          timer: 1000,
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

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thay đổi mật khẩu thành công",
          showConfirmButton: false,
          timer: 1500,
        });

        window.location.href = `/u/${user?.userId}`;
        setIsPass("");
        setIsConfirmPass("");
      }
    } else {
      console.log(isConfirmPass);
      console.log(isPass);
    }
  };

  useEffect(() => {
    console.log(isConfirmPass);
    console.log(isPass);
  }, [isPass, isConfirmPass]);
  return (
    <>
      <div className="z-1">
        <div
          className={`w-full  bg-white/90  relative  flex justify-center items-center `}
        >
          <div className="w-[90%] h-[60%] ">
            <section class=" dark:bg-gray-900">
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full p-6 bg-white rounded-lg shadow dark:border  sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                  <h2 class="mb-1 w-full text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    THAY ĐỔI MẬT KHẨU
                  </h2>
                  <div class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mật Khẩu Mới
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        // placeholder="••••••••"
                        value={isPass}
                        onChange={(e) => setIsPass(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="confirm-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nhập Lại Mật Khẩu
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        // placeholder="••••••••"
                        value={isConfirmPass}
                        onChange={(e) => setIsConfirmPass(e.target.value)}
                        id="confirm-password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>

                    <button
                      // type="submit"
                      onClick={(e) => handleChange(e)}
                      class="w-full bg-green-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Xác Nhận Thay Đổi
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePass;
