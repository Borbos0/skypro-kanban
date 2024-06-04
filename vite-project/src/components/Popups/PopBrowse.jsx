import { Link, useNavigate, useParams } from "react-router-dom";
import { paths } from "../../lib/const";
import * as B from "./PopBrowse.styled";
import { useTaskContext } from "../../contexts/hooks/useTask";
import Calendar from "../Calendar/Calendar";
import { useUserContext } from "../../contexts/hooks/useUser";
import { deleteTask, editTask } from "../../lib/api";
import { useEffect, useState } from "react";
import { statusList } from "../../../Data";

const PopBrowse = () => {
  const params = useParams();
  const { id } = useParams();

  const { task, createNewTask } = useTaskContext();
  const { user } = useUserContext();

  const [isEdit, setIsEdit] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [selected, setSelected] = useState();
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (task.length) {
      const taskItemCurrent = task.find(
        (responseData) => responseData._id === id
      );
      setEditingTask(taskItemCurrent);
      setSelected(taskItemCurrent.date);
    }
  }, [task]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   createNewTask({
  //     ...task,
  //     [name]: value,
  //   });
  // };

  const deleteItem = async () => {
    await deleteTask({ id, token: user.token })
      .then((responseData) => {
        createNewTask(responseData.tasks);
        navigate(paths.MAIN);
      })
      .catch((error) => {
        setShowError(error.message);
        navigate(paths.NEWCARD);
      });
  };

  const openEditMode = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const editItem = async () => {
    const editingTaskData = {
      ...editingTask,
      date: selected,
      id,
      token: user,
    };
    await editTask(editingTaskData)
      .then((response) => {
        createNewTask(response.tasks);
        navigate(paths.MAIN);
      })
      .catch((error) => {
        setShowError(error.message);
      });
  };

  const currentTask = task.find((element) => params.id === element._id);
  return (
    <B.PopBrowse>
      <B.PopBrowseContainer>
        <B.PopBrowseBlock>
          <B.PopBrowseContent>
            <B.PopBrowseTopBlock>
              <B.PopBrowseTtl>
                Название задачи {currentTask.title}
              </B.PopBrowseTtl>
              {currentTask.topic === "Web Design" && (
                <>
                  <B.CategoriesThemeOrangeInput
                    type="radio"
                    id="radio1"
                    checked
                    readOnly
                    name="topic"
                    value="Web Design"
                  />
                  <B.CategoriesThemeOrangeLabel htmlFor="radio1">
                    Web Design
                  </B.CategoriesThemeOrangeLabel>
                </>
              )}
              {currentTask.topic === "Research" && (
                <>
                  <B.CategoriesThemeGreenInput
                    type="radio"
                    checked
                    readOnly
                    id="radio2"
                    name="topic"
                    value="Research"
                  />
                  <B.CategoriesThemeGreenLabel htmlFor="radio2">
                    Research
                  </B.CategoriesThemeGreenLabel>
                </>
              )}
              {currentTask.topic === "Copywriting" && (
                <>
                  <B.CategoriesThemePurpleInput
                    type="radio"
                    id="radio3"
                    checked
                    readOnly
                    name="topic"
                    value="Copywriting"
                  />
                  <B.CategoriesThemePurpleLabel htmlFor="radio3">
                    Copywriting
                  </B.CategoriesThemePurpleLabel>
                </>
              )}
            </B.PopBrowseTopBlock>
            <B.PopBrowseStatus>
              <B.StatusPSubttl>Статус</B.StatusPSubttl>
              <B.Test>
                {isEdit ? (
                  statusList.map((status) => (
                    <B.StatusThemes key={status}>
                      <B.CategoriesTheme>
                        {status}
                        <B.PopBrowseStatusThemeInput
                          type="radio"
                          name="status"
                          value={status}
                          onChange={(e) =>
                            setEditingTask({
                              ...editingTask,
                              status: e.target.value,
                            })
                          }
                        ></B.PopBrowseStatusThemeInput>
                      </B.CategoriesTheme>
                    </B.StatusThemes>
                  ))
                ) : (
                  <B.StatusThemes>
                    <B.CategoriesTheme>
                      <p>{editingTask?.status}</p>
                    </B.CategoriesTheme>
                  </B.StatusThemes>
                )}
              </B.Test>
            </B.PopBrowseStatus>
            {isEdit ? (
              <B.PopBrowseWrap>
                <B.PopBrowseForm>
                  <div className="form-browse__block">
                    <label className="subttl">Описание задачи</label>
                    <B.FormBrowseArea
                      name="text"
                      id="textArea01"
                      placeholder="Введите описание задачи..."
                      defaultValue={currentTask.description}
                      onChange={(e) =>
                        setEditingTask({
                          ...editingTask,
                          description: e.target.value,
                        })
                      }
                    ></B.FormBrowseArea>
                  </div>
                </B.PopBrowseForm>
                <Calendar />
              </B.PopBrowseWrap>
            ) : (
              <B.PopBrowseWrap>
                <B.PopBrowseForm>
                  <div className="form-browse__block">
                    <label className="subttl">Описание задачи</label>
                    <B.FormBrowseArea
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                      defaultValue={currentTask.description}
                    ></B.FormBrowseArea>
                  </div>
                </B.PopBrowseForm>
                <Calendar />
              </B.PopBrowseWrap>
            )}
            {showError && <p style={{ color: "red" }}>{showError}</p>}
            {isEdit ? (
              <B.PopBrowseBtnBrowse>
                <B.BtnGroup>
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={editItem}
                  >
                    <a href="#">Сохранить</a>
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    <a href="#" onClick={openEditMode}>
                      Отменить
                    </a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#" onClick={deleteItem}>
                      Удалить задачу
                    </a>
                  </button>
                </B.BtnGroup>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to={paths.MAIN}>Закрыть</Link>
                </button>
              </B.PopBrowseBtnBrowse>
            ) : (
              <>
                <B.PopBrowseBtnBrowse>
                  <B.BtnGroup>
                    <button className="btn-browse__edit _btn-bor _hover03">
                      <a href="#" onClick={openEditMode}>
                        Редактировать задачу
                      </a>
                    </button>
                    <button className="btn-browse__delete _btn-bor _hover03">
                      <a href="#" onClick={deleteItem}>
                        Удалить задачу
                      </a>
                    </button>
                  </B.BtnGroup>
                  <button className="btn-browse__close _btn-bg _hover01">
                    <Link to={paths.MAIN}>Закрыть</Link>
                  </button>
                </B.PopBrowseBtnBrowse>
              </>
            )}
          </B.PopBrowseContent>
        </B.PopBrowseBlock>
      </B.PopBrowseContainer>
    </B.PopBrowse>
  );
};

export default PopBrowse;
