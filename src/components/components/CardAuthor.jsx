import React from "react";
import { Link } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";

import { Crown, Top_rated, Trophy } from "../../images/index.js";
import Skenleton from "./Skenleton.jsx";
function CardAuthor({ data }) {
  function Render() {
    return (
      <>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div class="w-auto bg-white border-2  border-gray-200 rounded-xl hover:bg-gray-50 my-1">
                  <div class="grid grid-cols-6 p-3 gap-y-2">
                    {/* <!-- Profile Picture --> */}
                    <div>
                      <img
                        src={item?.photoURL}
                        class="max-w-16 max-h-16 rounded-full"
                      />
                    </div>

                    {/* <!-- Description --> */}
                    <div class="col-span-5 md:col-span-4 ml-4">
                      <p class="text-gray-600 font-bold hover:text-blue-400 cursor-pointer">
                        <Link to={`/u/${item._id}`}>{item?.username}</Link>
                      </p>
                      <p class="text-gray-400 text-sm cursor-pointer">
                        {item?.email}
                      </p>
                      <p class="text-gray-800 flex text-md my-1 justify-start items-center">
                        <span className="flex justify-center items-center mx-2">
                          <GrDocumentPdf />{" "}
                          <span className="mx-1">{item?.docs.length}</span>
                        </span>
                        <span className="flex justify-center items-center mx-2">
                          <BsPencilFill />{" "}
                          <span className="mx-1">{item?.posts.length}</span>
                        </span>
                        {/* <span>
                  <GrDocumentPdf />
                  </span>    */}
                      </p>

                      {/* <p class="text-gray-400"> Beginner speakers </p> */}
                    </div>

                    {/* <!-- Price --> */}
                    <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                      <p class="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
                        <>
                          {index + 1 == 1 ? <img src={Trophy} alt="" /> : <></>}
                          {index + 1 == 2 ? (
                            <img src={Top_rated} alt="" />
                          ) : (
                            <></>
                          )}
                          {index + 1 == 3 ? <img src={Crown} alt="" /> : <></>}
                        </>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    );
  }
  return (
    <div>
      {data && data != null ? (
        Render()
      ) : (
        <>
          <Skenleton num={2} />
          {/* <Skenleton /> */}
        </>
      )}
    </div>
  );
}

export default CardAuthor;
