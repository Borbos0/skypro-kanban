import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../lib/api";
import { useUserContext } from "../contexts/hooks/useUser";
import { useTaskContext } from "../contexts/hooks/useTask";

const MainPage = () => {
  const { user } = useUserContext();
  const { setTask } = useTaskContext();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);
  useEffect(() => {
    getTasks({ token: user.token })
      .then((data) => {
        setTask(data.tasks);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setTask]);

  return (
    <>
      <Main isLoading={isLoading} error={error} />
      <Outlet />
    </>
  );
};

export default MainPage;
