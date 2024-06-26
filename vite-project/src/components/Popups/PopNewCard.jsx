import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import * as C from "./PopBrowse.styled";
import { postTask } from "../../lib/api";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";
import { useTaskContext } from "../../contexts/hooks/useTask";

function PopNewCard() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const [showError, setShowError] = useState(null);
  const [selected, setSelected] = useState("");
  const { user } = useUserContext();
  const { createNewTask } = useTaskContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected, token: user.token };
    if (
      !newTask.topic ||
      !newTask.description ||
      !newTask.title ||
      !newTask.date
    ) {
      setShowError("Неккоректные данные");
    } else {
      postTask(taskData)
        .then((responseData) => {
          createNewTask(responseData.tasks);
          navigate(paths.MAIN);
          setShowError("");
        })
        .catch((error) => {
          setShowError(error.message);
          navigate(paths.NEWCARD);
        });
    }
  };

  return (
    <C.PopNewCard id="popNewCard">
      <C.PopNewCardContainer>
        <C.PopNewCardBlock>
          <C.PopNewCardContent>
            <C.PopNewCardTtl>Создание задачи</C.PopNewCardTtl>
            <C.PopNewCardClose>
              <Link to={paths.MAIN}>&#10006;</Link>
            </C.PopNewCardClose>
            <C.PopNewCardWrap>
              <C.PopNewCardForm id="formNewCard" action="#">
                <C.FormNewBlock>
                  <C.Subttl>Название задачи</C.Subttl>
                  <C.FormNewInput
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </C.FormNewBlock>
                <C.FormNewBlock>
                  <C.Subttl>Описание задачи</C.Subttl>
                  <C.FormNewArea
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></C.FormNewArea>
                </C.FormNewBlock>
              </C.PopNewCardForm>
              <Calendar selected={selected} setSelected={setSelected} />
            </C.PopNewCardWrap>
            <C.NewCardCategoris>
              <p>Категория</p>
              <C.CategoriesThemeOrangeInput
                type="radio"
                id="radio1"
                name="topic"
                value="Web Design"
                onChange={(e) =>
                  setNewTask({ ...newTask, topic: e.target.value })
                }
              />
              <C.CategoriesThemeOrangeLabel htmlFor="radio1">
                Web Design
              </C.CategoriesThemeOrangeLabel>

              <C.CategoriesThemeGreenInput
                type="radio"
                id="radio2"
                name="topic"
                value="Research"
                onChange={(e) =>
                  setNewTask({ ...newTask, topic: e.target.value })
                }
              />
              <C.CategoriesThemeGreenLabel htmlFor="radio2">
                Research
              </C.CategoriesThemeGreenLabel>

              <C.CategoriesThemePurpleInput
                type="radio"
                id="radio3"
                name="topic"
                value="Copywriting"
                onChange={(e) =>
                  setNewTask({ ...newTask, topic: e.target.value })
                }
              />
              <C.CategoriesThemePurpleLabel htmlFor="radio3">
                Copywriting
              </C.CategoriesThemePurpleLabel>
            </C.NewCardCategoris>
            {showError && <p style={{ color: "red" }}>Заполните все поля!</p>}
            <C.FormNewCreate onClick={handleSubmit} id="btnCreate">
              Создать задачу
            </C.FormNewCreate>
          </C.PopNewCardContent>
        </C.PopNewCardBlock>
      </C.PopNewCardContainer>
    </C.PopNewCard>
  );
}

export default PopNewCard;
