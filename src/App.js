import "./App.css";
import { useEffect, useState, StrictMode, useContext } from "react";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import axios from "axios";
import LazyLoad from "react-lazyload";
import { ProductContext } from "./contexts/ProductContextProvider.jsx";

import {
  Home,
  BaiVietPage,
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
  EditProfile,
  SearchPage,
} from "./page/";
import ChangePassPage from "./page/ChangePassPage.jsx";

function App() {
  const { user } = useContext(ProductContext);
  // let location = useLocation();
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/register" element={<SignUp />} /> */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search/:q" element={<SearchPage />} />
            <Route path="/baiviet" element={<BaiVietPage />} />
            <Route
              path="/tailieu"
              element={
                <LazyLoad
                  placeholder={"Loading..."}
                  fallback={<div>Loading...</div>}
                >
                  <TaiLieuPage />
                </LazyLoad>
              }
            />
            {user && user?.userId ? (
              <>
                <Route path="/me/drafts/" element={<ContentManagement />} />
                <Route path="/u/:id" element={<ProFile />} />
                <Route path="/u/edit/:id" element={<EditProfile />} />
                <Route path="/u/edit/pass/:id" element={<ChangePassPage />} />
                //* BaiVietPage
                <Route path="/baiviet/create" element={<CreateBaiVietPage />} />
                <Route
                  path="/baiviet/update/:id"
                  element={<UpdateBaiVietPage />}
                />
                <Route path="/baiviet/view/:id" element={<ViewBaiVietPage />} />
                //* TaiLieu
                <Route path="/tailieu/create" element={<CreateTaiLieuPage />} />
                <Route path="/tailieu/view/:id" element={<ViewTaiLieuPage />} />
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
