import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase.js";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";

export default function DeleteArticle({ id, imageUrl, colDB }) {
  // const [temp, setTemp] = useState(false);
  const handleDelete = async () => {
    if (
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      })
    ) {
      try {
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        await deleteDoc(doc(db, colDB, id));
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
        console.log(error);
      }
    }
  };

  function sw() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
      } else {
      }
    });
  }
  return (
    <div
      onClick={handleDelete}
      className="cursor-pointer flex p-1 border rounded-md"
    >
      <TiDelete className="text-white text-2xl" />
      Xoá
    </div>
  );
}
