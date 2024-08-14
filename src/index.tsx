import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/reset.css";
import "./style/hover.css";
import "./index.css"; // Tailwind CSS를 포함한 CSS 파일

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
