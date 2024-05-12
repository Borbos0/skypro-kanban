import Column from "../Columns/MainColumn.jsx";
import { statusList } from "../../../Data.js";
import * as m from "./Main.styled";
import Header from "../Header/Header.jsx";
import { useTaskContext } from "../../contexts/hooks/useTask.jsx";

export default function Main({ isLoading, error }) {
  const { task } = useTaskContext();

  return (
    <div className="wrapper">
      <Header />
      <m.Main>
        <div className="container">
          <m.MainBlock>
            <m.MainContent>
              {error ? (
                "Серверная ошибка"
              ) : (
                <>
                  {isLoading ? (
                    "Данные загружаются"
                  ) : (
                    <>
                      {statusList.map((status, index) => (
                        <Column
                          key={index}
                          status={status}
                          cards={task.filter(
                            (theme) => theme.status === status
                          )}
                        />
                      ))}
                    </>
                  )}
                </>
              )}
            </m.MainContent>
          </m.MainBlock>
        </div>
      </m.Main>
    </div>
  );
}
