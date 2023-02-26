import React, { useState, useEffect } from "react";

import { CreateFormBV, Header } from "../../components";

function CreateBaiVietPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <CreateFormBV />
      </div>
    </div>
  );
}

export default CreateBaiVietPage;
