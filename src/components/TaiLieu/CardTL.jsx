import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCardList, BsFillGrid3X3GapFill } from "react-icons/bs";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { CategoryArr } from "../../data/CategoryDoc.js";
import CardDoc from "./CardDoc.jsx";

function CardTL() {
  const [category, setCategory] = useState("");
  const [layout, setLayout] = useState(false);

  function renderCategory(value) {
    const category = CategoryArr.find((item) => item.value === value);
    const categoryName = category ? category.name : "Tất cả Danh Mục";
    return categoryName;
  }
  useEffect(() => {}, [layout]);
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] mt-6">
          <div className="flex items-end justify-end z-1">
            <div className="flex rounded-md">
              {layout ? (
                <span
                  className=" p-1 bg-green-300 rounded-md cursor-pointer z-5"
                  onClick={(e) => setLayout(!layout)}
                >
                  <BsFillGrid3X3GapFill className="mx-1 text-xl" />
                </span>
              ) : (
                <span
                  className=" p-1 bg-green-300 rounded-md cursor-pointer z-5"
                  onClick={(e) => setLayout(!layout)}
                >
                  <BsCardList className="mx-1 text-xl" />
                </span>
              )}
            </div>
          </div>
          <div className="w-full  bg-pink-100">
            <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
              {/* <select
                class="bg-transparent uppercase font-bold text-sm p-4 mr-4"
                name=""
                id=""
              >
                <option>all categories</option>
                {CategoryArr?.map((i) => {
                  return (
                    <option onClick={(e) => setCategory(i.value)}>
                      {i.name}
                    </option>
                  );
                })}
              </select> */}
            </div>
            {/* <h5 class="text-lg font-semibold p-2">
              Danh Mục Được Chọn
              <button
                class={`
                              border-2 border-transparent bg-blue-500 p-2 mx-2 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500`}
              >
                {renderCategory(category)}
              </button>
            </h5> */}
          </div>
          <div className="w-full   justify-center items-center  overflow-x-scroll">
            <div class="flex justify-center w-max mx-auto p-2 rounded border-2 border-gray-200">
              <button
                onClick={(e) => setCategory("")}
                class={` border-2 border-transparent bg-blue-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500`}
              >
                Tất cả
              </button>
              {CategoryArr?.map((i) => {
                return (
                  <button
                    onClick={(e) => setCategory(i.value)}
                    class={`${
                      category == i.value
                        ? "bg-white text-green-500  border-2 border-green-500 bg-transparent "
                        : ""
                    } border-2 border-transparent bg-blue-500 ml-3 py-1 px-2 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500`}
                  >
                    {i.name}
                  </button>
                );
              })}
            </div>
          </div>
          <CardDoc category={category} layout={layout} />
        </div>
      </div>
    </div>
  );
}

export default CardTL;
