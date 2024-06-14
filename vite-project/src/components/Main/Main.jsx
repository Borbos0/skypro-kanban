import Column from "../Columns/MainColumn.jsx";
import { statusList } from "../../../Data.js";
import * as m from "./Main.styled";
import { Container } from "../Header/Header.styled";
import Header from "../Header/Header.jsx";

export default function Main({ isLoading, error }) {
  return (
    <m.Wrapper>
      <Header />
      <m.Main>
        <Container>
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
                        <Column key={index} status={status} />
                      ))}
                    </>
                  )}
                </>
              )}
            </m.MainContent>
          </m.MainBlock>
        </Container>
      </m.Main>
    </m.Wrapper>
  );
}
