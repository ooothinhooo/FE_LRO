import React from "react";
import { Header } from "../components/index.js";
import ChangePass from "../components/ViewProFile/ChangePass.jsx";

function ChangePassPage() {
  return (
    <div>
      <Header />
      <div className="z-0">
        <ChangePass />
      </div>
    </div>
  );
}

export default ChangePassPage;
