import React from "react";
import { AiFillTag, AiOutlineLike, AiFillLike } from "react-icons/ai";

function Like({ id, like, photoURL }) {
  console.log(id, like, photoURL);

  const likeFunc = () => {
    for (let i = 0; i < like.length; i++) {
      if (i === photoURL) return <span className="bg-red-500">Like</span>;
    }
    return <span>Chưa Like</span>;
  };

  return (
    <div>
      <button
        // onClick={(e) => handleLike(item?._id)}
        class={`${
          like.length > 1 ? "mr-4" : "mr-1"
        } flex -ml-2 text-md justify-center items-center  bg-blue-400 px-2 rounded-full text-gray-500 dark:text-gray-400  font-light `}
      >
        {like.length}
      </button>
      {!like?.includes(photoURL) ? (
        <>
          <AiOutlineLike className="" />
        </>
      ) : (
        <>
          <AiFillLike className="text-red-500 mr-2" />
        </>
      )}
      <div className="flex">
        {like &&
          like.map((i, index) => {
            return (
              <img
                src={i}
                className={`${
                  like.length > 1 ? "-ml-2" : ""
                } h-6 w-6 rounded-full left-2 z-[${index}]`}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Like;
