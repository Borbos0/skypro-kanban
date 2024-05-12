import "./App.css";
import { GlobalStyle } from "./styles/global.styled.js";
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
