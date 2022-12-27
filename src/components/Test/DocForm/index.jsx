import { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput/index.jsx";
import styles from "./docform.css";

const DocForm = () => {
  const [data, setData] = useState({
    title: "",
    dataURL: "",
    creater: "",
  });
  console.log(data);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/docs" + "/adddoc";
      const { data: res } = await axios.post(url, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Song Form</h1>
        <input
          type="text"
          className={styles.input}
          placeholder="Song Name"
          name="title"
          onChange={handleChange}
          value={data.title}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="creater"
          name="creater"
          onChange={handleChange}
          value={data.creater}
        />
        <FileInput
          name="dataURL"
          label="Choose PDF"
          handleInputState={handleInputState}
          type="docs"
          value={data.dataURL}
        />
        <button type="submit" className={styles.submit_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DocForm;
