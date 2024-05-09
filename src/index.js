/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";

// Estilo global para aplicar o background preto e letras brancas

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
    <GlobalStyles />
  </>
);
