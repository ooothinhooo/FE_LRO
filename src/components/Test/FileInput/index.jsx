import { useRef, useState } from "react";
import { useContext } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase.js";
import check from "../../../images/check.png";
// import styles from "./fileinput.css";
import { ProductContext } from "../../../contexts/ProductContextProvider.jsx";

const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
  const { user } = useContext(ProductContext);
  const uid = user?.userId;
  // console.log(uid);
  const inputRef = useRef();
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  const handleUpload = () => {
    setProgressShow(true);
    const fileName = new Date().getTime() + value.name;
    const storageRef = ref(
      storage,
      type === "docs" ? `/docs/${uid}/${fileName}` : `/images/${fileName}`
    );
    const uploadTask = uploadBytesResumable(storageRef, value);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploaded = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploaded);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          handleInputState(name, url);
        });
      }
    );
  };

  return (
    <div className={`flex w-full h-full `}>
      <button
        type="button"
        onClick={() => inputRef.current.click()}
        className={` text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        {label}
      </button>
      <div
        className={`text-gray-200 border-sky-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
          vlaue={value}
          // className={`bg-red-400`}
          className={`text-white  border-sky-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
          {...rest}
        />
      </div>

      {/* {type === "docs" && value && (
        // <audio
        //   src={typeof value === "string" ? value : URL.createObjectURL(value)}
        //   controls
        // />
      )} */}
      {value !== null && !progressShow && typeof value !== "string" && (
        <button
          onClick={handleUpload}
          className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
        >
          Upload
        </button>
      )}
      {progressShow && progress < 100 && (
        <div
          className={`container border-none bg-blue-300 rounded-full text-white`}
        >
          <p>{progress}%</p>
        </div>
      )}
      {progress === 100 && (
        <div className={`flex w-16 h-16 justify-end items-end`}>
          <img src={check} alt="check circle" />
        </div>
      )}
    </div>
  );
};

export default FileInput;
