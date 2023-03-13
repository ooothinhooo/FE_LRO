import React from "react";
import { Header, Register, SignUp } from "../components/index.js";

function RegisterPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {/* <Register /> */}
        <SignUp />
      </div>
    </>
  );
}

export default RegisterPage;
