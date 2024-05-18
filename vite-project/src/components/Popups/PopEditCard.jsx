import { Link, Navigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import Calendar from "../Calendar/Calendar";
import { paths } from "../../lib/const";
import { useTaskContext } from "../../contexts/hooks/useTask";
import { useUserContext } from "../../contexts/hooks/useUser";
import { deleteTask } from "../../lib/api";

function PopEditCard() {
  const { id } = useParams();
  const { task, createNewTask } = useTaskContext();
  const { user } = useUserContext();

  const deleteItem = async () => {
    await deleteTask({ id, token: user.token }).then((responseData) => {
      createNewTask(responseData.tasks);
      Navigate(paths.MAIN);
    });
  };

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи:{id}</S.PopBrowseTtl>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSubttl>Статус</S.StatusPSubttl>
              <S.StatusThemes>
                <S.CategoriesTheme>
                  <p>Без статуса</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <p className="_gray">Нужно сделать</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <p>В работе</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <p>Тестирование</p>
                </S.CategoriesTheme>
                <S.CategoriesTheme>
                  <p>Готово</p>
                </S.CategoriesTheme>
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    // defaultValue={""}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />
            </S.PopBrowseWrap>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowseEditBtnBor>
                  Редактировать задачу
                </S.BtnBrowseEditBtnBor>
                <S.BtnBrowseEditBtnBor onClick={deleteItem}>
                  Удалить задачу
                </S.BtnBrowseEditBtnBor>
              </S.BtnGroup>

              <Link to={paths.MAIN}>
                <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
              </Link>
            </S.PopBrowseBtnBrowse>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#" onClick={deleteItem}>
                    Удалить задачу
                  </a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
export default PopEditCard;
