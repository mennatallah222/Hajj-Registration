import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import "./Styles/all.min.css";
import  './Styles/style.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoogleOAuthProvider } from "@react-oauth/google";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    {
        <>
        <App/>
      </>
      
    }
  </BrowserRouter>
);

reportWebVitals();
