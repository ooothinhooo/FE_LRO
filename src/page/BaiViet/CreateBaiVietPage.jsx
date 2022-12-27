import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaLockOpen, FaLock } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor";
import { toast } from "react-toastify";
import data from "../../data/course.js";

import { FormBV, Header } from "../../components";

function CreateBaiVietPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <FormBV />
      </div>
    </div>
  );
}

export default CreateBaiVietPage;
