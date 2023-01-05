import "./App.css";
import { useEffect, useState, StrictMode, useContext } from "react";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import axios from "axios";
import LazyLoad from "react-lazyload";
import { ProductContext } from "./contexts/ProductContextProvider.jsx";
import DocsForm from "../src/components/Test/DocForm/index.jsx";
import Docs from "../src/components/Test/Docs/index.jsx";
import { GET_ALL_DOC } from "./service/apiConstant.js";
import {
  Home,
  BaiVietPage,
  BlogsPage,
  TaiLieuPage,
  ThaoLuanPage,
  LoginPage,
  RegisterPage,
  ViewTaiLieuPage,
  CreateTaiLieuPage,
  CreateBaiVietPage,
  UpdateBaiVietPage,
  ViewBaiVietPage,
  ContentManagement,
  ProFile,
  CreateBlog,
  UpdateBlog,
  ViewBlog,
} from "./page/";

function App() {
  const { user } = useContext(ProductContext);
  // let location = useLocation();
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <>
      {/* <div className="container">
        <DocsForm />
        <div className="songs_container">
          {songs.map((song) => (
            <Docs song={song} key={song._id} />
          ))}
        </div>
      </div> */}
      {/* <Login /> */}
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {user && user?.userId ? (
              <>
                <Route path="/me/drafts/" element={<ContentManagement />} />
                <Route path="/u/:id" element={<ProFile />} />
                //* BaiVietPage
                <Route
                  path="/baiviet"
                  element={
                    <LazyLoad
                      placeholder={"Loading..."}
                      fallback={<div>Loading...</div>}
                    >
                      <BaiVietPage />
                    </LazyLoad>
                  }
                />
                <Route path="/baiviet/create" element={<CreateBaiVietPage />} />
                <Route
                  path="/baiviet/update/:id"
                  element={<UpdateBaiVietPage />}
                />
                <Route path="/baiviet/view/:id" element={<ViewBaiVietPage />} />
                //* TaiLieu
                <Route path="/tailieu" element={<TaiLieuPage />} />
                <Route path="/tailieu/create" element={<CreateTaiLieuPage />} />
                <Route path="/tailieu/view/:id" element={<ViewTaiLieuPage />} />
                //*BlogsPage
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/create" element={<CreateBlog />} />
                <Route path="/blogs/update/:id" element={<UpdateBlog />} />
                <Route path="/blogs/view/:id" element={<ViewBlog />} />
                //* ThaoLuanPage
                <Route path="/thaoluan" element={<ThaoLuanPage />} />
              </>
            ) : (
              <>{/* <Route path="/register" element={<Register />} /> */}</>
            )}
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
