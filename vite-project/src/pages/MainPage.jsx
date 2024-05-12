import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../lib/api";
import { useUserContext } from "../contexts/hooks/useUser";

const MainPage = () => {
  const { user } = useUserContext();
  const [cardsList, setCards] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);
  useEffect(() => {
    getTasks({ token: user.token })
      .then((data) => {
        setCards(data.tasks);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function Tasks() {
    setCards([
      ...cardsList,
      {
        id: cardsList.length + 1,
        statusName: "Без статуса",
        tag: "Research",
        description: "New task by button",
        date: "01.04.23",
      },
    ]);
  }
  return (
    <>
      <Main
        user={user}
        cardsList={cardsList}
        isLoading={isLoading}
        setCards={Tasks}
        error={error}
      />
      <Outlet />
    </>
  );
};

export default MainPage;
