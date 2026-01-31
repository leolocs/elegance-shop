import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

/**
 * Ponto de entrada da aplicação React.
 * 
 * ReactDOM.createRoot() cria a raiz da aplicação.
 * O StrictMode ajuda a identificar problemas durante o desenvolvimento.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
