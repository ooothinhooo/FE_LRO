import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../firebase.js";
import { toast } from "react-toastify";
import avatars from "../../images/LRO_logo2.png";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
export default function AddArticle({ colDB }) {
  // const [user] = useAuthState(auth);
  const { user } = useContext(ProductContext);
  const photo = user && user.avatar ? user.avatar : "";
  // console.log(user);
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    userPhotoURL: photo,
    createdAt: Timestamp.now().toDate(),
  });

  if (formData.description.length > 3000) {
    alert("Bạn đã comments nhiều chữ quá");
  }
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.description) {
      alert("Please fill all the fields");
      return;
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, colDB);
          addDoc(articleRef, {
            // title: formData.title,
            userPhotoURL: user.avatar,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.first_name + " " + user.last_name,
            userId: user.userId,
            likes: [],
            dislikes: [],
            comments: [],
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div className=" m-auto items-center justify-center w-full ">
      {!user ? (
        <>
          <div className="m-auto items-center justify-center  md:w-[90%] w-full ">
            <div className="flex items-center justify-center md:m-auto ">
              <div className="relative md:w-[80%] w-full flex items-center justify-center  ">
                <div className="hidden mr-2 md:block md:relative  md:flex md:absolute inset-y-0 left-0 items-center   pointer-events-none">
                  <img className="w-14 h-14 rounded-lg" src={avatars} />
                </div>
                <span
                  class="bg-primary border border-gray-300 text-gray-50 text-sm
                                     focus:ring-blue-500 focus:border-blue-500  w-[75%] py-3 px-1
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Vui Lòng Đăng Nhập Để Thêm Bình Luận"
                >
                  Vui Lòng Đăng Nhập Để Thêm Bình Luận
                </span>
                <button
                  onClick={handlePublish}
                  className="md:w-14 h-14 rounded-lg justify-center items-center 
                                    flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                                 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                  dark:focus:ring-blue-800"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="m-auto items-center justify-center  md:w-[90%] w-full ">
            <div class="flex items-center justify-center md:m-auto ">
              <div class="relative md:w-[80%] w-full flex items-center justify-center  ">
                <div class="hidden mr-2 md:block md:relative  md:flex md:absolute inset-y-0 left-0 items-center   pointer-events-none">
                  <img className="w-14 h-14 rounded-lg" src={photo} />
                </div>
                <textarea
                  class="bg-white border border-gray-300 text-black text-sm
                                     focus:ring-blue-500 focus:border-blue-500  w-[75%] 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="description"
                  // className="form-control"
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                  placeholder="Type Your Comment"
                  maxlength="3000"
                  required
                ></textarea>
                <button
                  onClick={handlePublish}
                  class="md:w-14 h-14 rounded-lg justify-center items-center 
                                    flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                                 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                  dark:focus:ring-blue-800"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
