import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { db } from "../../firebase.js";
// import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from "uuid";
// import { auth } from '../../firebase.config';
import Articles from "./Articles";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";

export default function Comment({ id, colDB }) {
  // const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
  const { user } = useContext(ProductContext);

  const [comment, setComment] = useState("");
  // console.log(comment);
  if (comment.length > 3000) {
    alert("Bạn viết quá nhiều rồi ");
  }
  const [comments, setComments] = useState([]);
  // console.log(comments);
  // const [currentlyLoggedinUser] = useAuthState(auth);
  // const currentUser = currentlyLoggedinUser.providerData[0];
  // console.log(currentlyLoggedinUser.providerData[0].photoURL);
  const commentRef = doc(db, colDB, id);
  // console.log(commentRef);

  useEffect(() => {
    const docRef = doc(db, colDB, id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          uid: user.userId,
          userName: user.username,
          comment: comment,
          createdAt: new Date(),
          userPhotoURL: user.photoURL,
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="m-auto w-[100%] -mt-2">
      <div>
        {comments !== null &&
          comments.map(
            ({
              commentId,
              uid,
              comment,
              userName,
              createdAt,
              userPhotoURL,
            }) => (
              <div key={commentId}>
                <div
                  class={`text-left  flex rounded-md space-x-2 mb-1  border-l py-2 border-[#]
                          `}
                >
                  <div class="block">
                    <div class=" w-full  px-2 pb-2">
                      <div class="font-medium flex">
                        <div class="flex justify-center items-center">
                          <img
                            class="h-4 w-4 md:h-6 md:w-6 shadow-lg rounded-full mr-1"
                            src={userPhotoURL}
                          />
                          <span
                            className={`md:text-xl text-md text-blue-400 ${
                              uid === user.userId ? "" : ""
                            }`}
                          >
                            {userName}
                          </span>
                          {/* <span className="text-sm">{createdAt}</span> */}
                          <span className={`ml-4`}>
                            {uid === user.userId && (
                              <span
                                className="md:text-2xl bg-white text-lg text-pink-400"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleDeleteComment({
                                    commentId,
                                    uid,
                                    comment,
                                    userName,
                                    createdAt,
                                    userPhotoURL,
                                  })
                                }
                              >
                                <MdOutlineDeleteForever />
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                      <div
                        class={` p-2 shadow-lg rounded-lg  ${
                          uid === user.userId ? "bg-[#4D4545]" : "bg-[#283149]"
                        }`}
                      >
                        <span className="text-gray-200 text-sm md:text-md">
                          {" "}
                          {comment.substring(0, 5000)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="border p-2 mt-2 row">
                                <div className="col-11">
                                    <span
                                        className={`badge text-black ${
                                            user === currentlyLoggedinUser.uid ? 'bg-success' : 'bg-blue-400'
                                        }`}
                                    >
                                        {userName}
                                    </span>
                                    {comment}
                                </div>
                                <div className="col-1">
                                    {user === currentlyLoggedinUser.uid && (
                                        <i
                                            className="fa fa-times"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                                handleDeleteComment({ commentId, user, comment, userName, createdAt })
                                            }
                                        >
                                            X
                                        </i>
                                    )}
                                </div>
                            </div> */}
              </div>
            )
          )}
        {user && user ? (
          <input
            type="text"
            className="form-control mt-4 mb-5 w-full bg-[#283149] text-gray-200"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Add a comment"
            maxlength="3000"
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        ) : (
          <>
            <span
              type="text"
              className="form-control mt-4 mb-5 w-full bg-[#283149] text-gray-200 border"
              readonly
            >
              Vui lòng đăng nhập để Comment
            </span>
          </>
        )}
      </div>
    </div>
  );
}
