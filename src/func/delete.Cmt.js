import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase.js";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

import Swal from "sweetalert2";

export const deleteCollection2 = async ({ collectionPath }) => {
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
      const docRef = db.collection(collectionPath);
      const result = await docRef.delete();

      console.log("Document successfully deleted!");
      console.log(result);
    } catch (error) {
      toast("Error deleting article", { type: "error" });
      console.log(error);
    }
  }
};

const deleteDocuments = async (collectionPath) => {
  const batch = db.batch();
  const snapshot = await db.collection(collectionPath).get();

  if (snapshot.size === 0) {
    // Return if collection is already empty
    return;
  }

  snapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  await batch.commit();

  console.log(`Documents in ${collectionPath} successfully deleted!`);
};

export const deleteCollection = async (collectionPath, id) => {
  const res = await db.collection("CMT/tailieu").doc(id).delete();
};

// Example usage
//   deleteCollection('myCollection')
//     .catch((error) => {
//       console.error('Error deleting collection:', error);
//     });
