import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.js";
import check from "../../images/check.png";
// import styles from "./fileinput.css";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";

const ChangeAvtUser = ({ name, label, value, type, avatar, ...rest }) => {
  const { user } = useContext(ProductContext);
  const uid = user?.userId;
  // console.log(uid);
  const inputRef = useRef();
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);
  const [checkFile, setCheckFile] = useState(false);
  const handleUpload = () => {
    console.log(value);
    setProgressShow(true);
    const fileName = new Date().getTime() + value.name;
    const storageRef = ref(
      storage,
      type === "docs" ? `/docs/${uid}/${fileName}` : `/images/${fileName}`
    );
    const uploadTask = uploadBytesResumable(storageRef, value);
    if (true) {
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
            avatar(name, url);
          });
        }
      );
      setProgressShow(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Vui Lòng Chọn File PDF",
        text: "Something went wrong!",
      });
      setProgressShow(false);
      value = "";
    }
  };
  function validatePDF(file) {
    const fileExtension = file.name.toLowerCase().split(".").pop();
    if (fileExtension == "pdf") {
      console.log("true");
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Vui Lòng Chọn File PDF",
        text: "Something went wrong!",
      });
      return false;
    }
  }

  return (
    <div className={`flex w-full h-full `}>
      <button
        type="button"
        onClick={() => inputRef.current.click()}
        className={`hidden text-white bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        {label}
      </button>
      <div
        className={` text-gray-200 border-sky-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        <input
          type="file"
          name="upload"
          // accept="application/pdf,application/vnd.ms-excel"
          // accept=".jpg,.png,application/pdf"
          ref={inputRef}
          onChange={(e) => avatar(name, e.currentTarget.files[0])}
          vlaue={value}
          // className={`bg-red-400`}
          className={`text-black hidden border-sky-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
          {...rest}
        />
      </div>

      {/* {type === "docs" && value && (
          // <audio
          //   src={typeof value === "string" ? value : URL.createObjectURL(value)}
          //   controls
          // />
        )} */}
      {value !== null &&
      // checkFile &&
      !progressShow &&
      typeof value !== "string" ? (
        <button
          onClick={handleUpload}
          className={`text-white w-full bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
        >
          Upload
        </button>
      ) : (
        <></>
      )}
      {progressShow && progress < 100 && (
        <div
          className={`container border-none bg-blue-300 rounded-full text-red-500`}
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

export default ChangeAvtUser;
