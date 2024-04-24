import Column from "../Columns/MainColumn.jsx";
import { statusList } from "../../../Data.js";
import * as m from "./Main.styled";
import Header from "../Header/Header.jsx";

export default function Main({ cardsList, isLoading, setCards, error }) {
  return (
    <div className="wrapper">
      <Header setCards={setCards} cardsList={cardsList} />
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
                          cards={cardsList.filter(
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
