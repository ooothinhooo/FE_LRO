import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect, Fragment } from "react";
import { auth, db } from "../../firebase.js";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { GiRapidshareArrow } from "react-icons/gi";
// import { useState, Fragment } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
import DeleteArticle from "./DeleteArticle";
import LikeArticle from "./LikeArticle";
import Comment from "./Comment";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import avatars from "../../images/LRO_logo2.png";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
export default function Articles({ colDB }) {
  const { user } = useContext(ProductContext);
  console.table(user);
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  useEffect(() => {
    const articleRef = collection(db, colDB);
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <div className="mb-14 m-auto items-center justify-center">
        {articles.length === 0 ? (
          <p>Hãy Là Người Đầu Tiên Bình Luận!</p>
        ) : (
          articles.map(
            ({
              id,
              title,
              userPhotoURL,
              description,
              imageUrl,
              createdAt,
              createdBy,
              userId,
              likes,
              dislikes,
              comments,
            }) => (
              <div
                className="m-auto items-center justify-center my-1 md:p-3 bg-light md:min-w-[799px] w-[99%] "
                key={id}
              >
                <div
                  class={`flex-col w-full py-2 md:mx-auto mt-1 bg-chat px-2 mr-1
                            border-gray-200 sm:px-4 sm:py-4 md:px-4 rounded-lg  md:w-2/3
                            ${
                              user && user.userId === userId
                                ? "bg-[#4D4545]"
                                : "bg-[#283149]"
                            }
                            `}
                >
                  <div class="flex flex-row md-10">
                    <img
                      class="md:w-12 md:h-12 w-10 h-10 border-2 border-gray-300 rounded-full"
                      alt="Anonymous's avatar"
                      src={userPhotoURL ? userPhotoURL : avatars}
                    />
                    <div class="flex-col mt-1">
                      <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                        <Link to={`/profile/id/${userId}/${createdBy}`}>
                          <span class="text-blue-400 hover:text-pink-600">
                            {createdBy}
                          </span>
                        </Link>
                        <span class="ml-2 text-xs font-normal text-gray-500">
                          {createdAt.toDate().toDateString()}
                        </span>
                      </div>
                      <div class="flex-1 px-2 ml-2 text-sm md:font-medium leading-loose text-gray-50">
                        {description.substring(0, 3000)}
                      </div>
                      {/* <Link to={`/${colDB}/${id}`}> */}
                      <div className="block  md:flex  w-fit py-1 px-3 md:mr-2">
                        <span className="flex shadow-lg px-1 py-[2px] rounded-lg md:mr-2">
                          <span
                            className={` text-lg text-blue-300  
                                                `}
                          >
                            {user && user ? (
                              <span>{likes?.length}</span>
                            ) : (
                              <span className=" flex justify-center items-center mr-2">
                                <AiOutlineLike className="text-2xl" />
                                <span>{likes?.length}</span>
                              </span>
                            )}
                          </span>
                          <span className=" rounded-lg">
                            {user && (
                              <LikeArticle
                                id={id}
                                likes={likes}
                                colDB={colDB}
                              />
                            )}
                          </span>
                        </span>
                        {/* <span className="flex shadow-lg px-1 py-[2px]  rounded-lg">
                                            <span
                                                className={` text-lg text-blue-300  
                                                `}
                                            >
                                                {user && user ? (
                                                    <span>{dislikes?.length}</span>
                                                ) : (
                                                    <span className=" flex justify-center items-center">
                                                        <span>{dislikes?.length}</span>
                                                        <AiOutlineLike className="text-xl" />
                                                    </span>
                                                )}
                                            </span>
                                            <span className=" rounded-lg">
                                                {user && <Dislike id={id} dislikes={dislikes} colDB={colDB} />}
                                            </span>
                                        </span> */}
                        <span className="flex shadow-lg px-1 py-[2px] rounded-lg md:mr-2">
                          {comments && comments.length > 0 && (
                            <span className="text-gray-200 text-md flex">
                              <span className="flex justify-center items-center">
                                <GiRapidshareArrow className="mr-1" />{" "}
                                <span className="mx-[3px] text-green-500">
                                  {" "}
                                  {comments?.length}{" "}
                                </span>{" "}
                                Phản hồi
                              </span>
                            </span>
                          )}
                        </span>

                        {/* </Link> */}
                        <span className="mx-2 top-0 right-0 flex ">
                          {user && user.userId === userId && (
                            <DeleteArticle
                              id={id}
                              imageUrl={userPhotoURL}
                              colDB={colDB}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Accordion
                  allowZeroExpanded
                  className="bg-primary  md:m-auto md:w-[60%] w-full"
                >
                  <AccordionItem key={id} className="  bg-primary">
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex bg-[#00454A] mt-1 p-1 rounded-md text-gray-300">
                        <span className="mr-[6px] text-[#4E9F3D]">
                          Rep Comment
                        </span>{" "}
                        <span className="md:block hidden">{createdBy}</span>
                        <span className="md:hidden">
                          {createdBy.slice(0, 20)}...
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {" "}
                      <div className={``}>
                        <Comment id={id} colDB={colDB} />
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )
          )
        )}
      </div>
      {/* <Article colDB={colDB} /> */}
    </>
  );
}
