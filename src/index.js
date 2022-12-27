import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./contexts/StateProvider.js";
import { initialState } from "./contexts/initalState.js";
import reducer from "./contexts/reducer.js";
import ProductContextProvider from "./contexts/ProductContextProvider.jsx";
const rootElement = document.getElementById("root");
render(
  <>
    <ProductContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductContextProvider>
  </>,
  rootElement
);
