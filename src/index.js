import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home.jsx";
import ProductSingle from "./ProductSingle/ProductSingle";
import Login from './Auth/Login';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
