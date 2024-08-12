import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import "./Styles/all.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./Components/Navbar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div>
        <Header/>

        <div className={"content-container"}>
         <App/>
        </div>
        
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
