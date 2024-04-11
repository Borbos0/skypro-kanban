import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { card } from "../Data.js";
import { GlobalStyle } from "./styles/global.styled.js";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
