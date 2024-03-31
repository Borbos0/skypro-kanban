import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { card } from "./components/Data/Data.js";

function App() {
  const [cardsList, setCards] = useState(card);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div class="wrapper">
        <Header setCard={setCards} cardList={cardsList} />
        <Main cardList={cardsList} isLoading={isLoading} />
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
