import React from "react";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { GrLike } from "react-icons/gr";

import { auth, db } from "../../firebase.js";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
export default function LikeArticle({ id, likes, colDB }) {
  const { user } = useContext(ProductContext);

  const newArr = likes.sort(() => Math.random() - 0.5);
  const arrLikes = newArr.slice(0, 5);
  const likesRef = doc(db, colDB, id);
  // console.log(likes);
  const handleLike = () => {
    if (likes?.includes(user.avatar)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.avatar),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.avatar),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div
      onClick={handleLike}
      style={{
        cursor: "pointer",
        color: likes?.includes(user.avatar) ? "red" : null,
      }}
      className="text-2xl text-white flex items-center justify-center "
    >
      {!likes?.includes(user.avatar) ? (
        <>
          <AiOutlineLike className="" />
        </>
      ) : (
        <>
          <AiTwotoneLike className="text-red-500 mr-2" />
        </>
      )}
      {/* <AiOutlineLike /> */}
      <span className="mx-2 flex ml-2">
        {arrLikes &&
          arrLikes.map((item, index) => (
            <>
              <img
                key={index}
                src={item}
                className={`-ml-[10px] h-6 w-6 rounded-full left-2 z-[${index}]`}
              />
            </>
          ))}
      </span>
    </div>
  );
}
