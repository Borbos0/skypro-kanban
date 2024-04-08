import Column from "../Columns/MainColumn.jsx";
import { statusList } from "../Data/Data.js";
import * as m from "./Main.styled";

export default function Main({ cardList, isLoading }) {
  return (
    <m.Main>
      <div class="container">
        <m.MainBlock>
          <m.MainContent>
            {isLoading ? (
              "Данные загружаются"
            ) : (
              <>
                {statusList.map((status, index) => (
                  <Column
                    key={index}
                    status={status}
                    cards={cardList.filter(
                      (theme) => theme.statusName === status
                    )}
                  />
                ))}
              </>
            )}
          </m.MainContent>
        </m.MainBlock>
      </div>
    </m.Main>
  );
}
