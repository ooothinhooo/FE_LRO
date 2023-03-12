import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { Link } from "react-router-dom";
import {
  CardAuthor,
  CardRight,
  CardTL,
  CardDoc,
  Header,
} from "../../components/index.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { CNTT, Kte, Sinhhoc, Yte } from "../../images/index.js";

function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);


  const slideImages = [
    {
      url: CNTT,
      caption: 'Slide 1'
    },
    {
      url: Yte,
      caption: 'Slide 2'
    },
    {
      url: Sinhhoc,
      caption: 'Slide 3'
    },
  ];
  const randomizedArray = slideImages.sort(() => Math.random() - 0.5);

  console.log(randomizedArray); // [6, 2, 5, 3, 1, 4]
  function renderBanner(){
    return(
      <>
      <div className="w-full h-full">
        <img className="w-full h-full" src={ randomizedArray[0].url} />
      </div>
      </>
    )
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("1")
    }, 500 );
  })

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="w-full h-[200px]">
        <div className="flex justify-center flex-row items-center h-full">
          {renderBanner()}
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center bg-white
      "
      >
        <div className="w-full py-5 px-4  flex justify-center items-center ">
          <CardTL />
        </div>
      </div>
    </>
  );
}

export default TaiLieuPage;
