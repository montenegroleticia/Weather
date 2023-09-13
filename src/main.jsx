import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Reset from "./style/ResetStyle.jsx";
import GlobalStyle from "./style/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
