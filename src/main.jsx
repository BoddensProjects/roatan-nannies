import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LocalRouter } from "./router.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalRouter>
      <App />
    </LocalRouter>
  </React.StrictMode>,
);
