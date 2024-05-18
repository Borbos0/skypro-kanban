import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import * as m from "./MainColumn.styled";
import { getTasks } from "../../lib/api.js";
import { useUserContext } from "../../contexts/hooks/useUser.jsx";
import { useTaskContext } from "../../contexts/hooks/useTask.jsx";

export default function Column({ status }) {
  const { task, setTask } = useTaskContext();
  const { user } = useUserContext();
  const cards = task.filter((theme) => theme.status === status);

  useEffect(() => {
    getTasks({ token: user.token })
      .then((data) => {
        setTask(data.tasks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user, setTask]);
  return (
    <m.MainColumn>
      <m.ColumnTitle>
        <p>{status}</p>
      </m.ColumnTitle>
      {cards.map((card) => (
        <Card
          key={card._id}
          tag={card.topic}
          description={card.description}
          date={card.date}
          id={card._id}
        />
      ))}
    </m.MainColumn>
  );
}
