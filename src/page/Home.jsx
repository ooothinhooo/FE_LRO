import { arrayRemove } from "firebase/firestore";
import React, { useRef, useEffect } from "react";
import CardDoc from "../components/components/CardDoc.jsx";
import CardPost from "../components/components/CardPost.jsx";
import { Footer, Header, HighLightDoc, Login } from "../components/index.js";

function Home() {
  return (
    <div>
      <Header />

      <div className=" w-full h-[200px] bg-[#08629D] justify-center items-center">
        <div className=" w-full h-[95%] justify-center items-center">
          <p className="p-3 text-5xl text-white font-body uppercase flex justify-center items-center ">
            LEARNING RESOURCE ONLINE
          </p>
          <p className="p-3 text-2xl text-white font-body   justify-center items-center ">
            <p className="flex justify-center items-center align-middle">
              {" "}
              Nơi tìm kiếm, chia sẽ các tài liệu học tập được đánh giá cao nhất
              từ các{" "}
            </p>
            <p className="flex justify-center items-center ">
              sinh viên tham gia các khóa học giống như bạn
            </p>
          </p>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center bg-white">
        <div className="w-[90%] py-5 px-4 bg-gray-100 flex justify-center items-center -mt-[50px] ">
          {/* <CardDoc /> */}
          <HighLightDoc />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
