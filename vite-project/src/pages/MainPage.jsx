import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { card } from "../../Data";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [cardsList, setCards] = useState(card);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Main cardsList={cardsList} isLoading={isLoading} setCards={setCards} />
      <Outlet />
    </>
  );
};

export default MainPage;
