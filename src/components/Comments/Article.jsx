import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase.js";
import LikeArticle from "./LikeArticle";
import Comment from "./Comment";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
export default function Article({ colDB }) {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const { user } = useContext(ProductContext);

  useEffect(() => {
    const docRef = doc(db, colDB, id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  return (
    <div className=" border bg-blue-100">
      {article && (
        <div className="">
          <div className="">
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ width: "100%", padding: 10 }}
            />
          </div>
          <div className="">
            <h5>Author: {article.createdBy}</h5>
            <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{article.description}</h4>

            <div className="">
              {user && <LikeArticle id={id} likes={article.likes} />}
              <div className="pe-2">
                <p>{article.likes.length}</p>
              </div>
            </div>
            {/* comment  */}
            <Comment id={article.id} />
          </div>
        </div>
      )}
    </div>
  );
}
