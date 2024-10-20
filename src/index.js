import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FatStr from "./fat";

// Adding Fat Code will increase size by 7MB - (You can check network tab and see: 'main.[hash].js' size)
// This is to test that tree-shaking of if() statements works
// Comment out any if statement and check the network tabs after doing a build with either environment
if (process.env.REACT_APP_ENV === "development") {
  const isDevStrTest = "This is a test string in development";
  alert(isDevStrTest + FatStr);
}
if (process.env.REACT_APP_ENV === "production") {
  const isDevStrTest = "This is a test string in production";
  alert(isDevStrTest + FatStr);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
