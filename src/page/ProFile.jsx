import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardViewUser, Header } from "../components/index.js";
import { view_user } from "../service/api.getUser.js";
import { VIEW_USER } from "../service/apiConstant.js";

function ProFile() {
  let { id } = useParams();

  const [data, setData] = useState([]);

  const getUser = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/user/", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { _id: id },
      });
      console.log(result);
      setData(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="">
        <CardViewUser data={data} />
      </div>
    </>
  );
}

export default ProFile;
