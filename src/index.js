import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FatStr from "./fat";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Adding Fat Code will increase size by 7MB - (You can check network tab and see: 'main.[hash].js' size)
// This is to test that tree-shaking of if() statements works
// Comment out any if statement and check the network tabs after doing a build with either environment
if (process.env.REACT_APP_ENV === "development") {
  console.log("====> Dev Code is Fat!", FatStr);
}
if (process.env.REACT_APP_ENV === "production") {
  console.log("====> Prod Code is Fat!", FatStr);
}

async function mockIfInDevelopment() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  console.warn("Mocking enabled!");
  const { worker } = await import("./mocks/browser");
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return await worker.start();
}

mockIfInDevelopment().then(() => {
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
});
