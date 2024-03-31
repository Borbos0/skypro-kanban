import Column from "../Columns/MainColumn.jsx";
import { statusList } from "../Data/Data.js";

export default function Main({ cardList, isLoading }) {
  return (
    <main class="main">
      <div class="container">
        <div class="main__block">
          <div class="main__content">
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
          </div>
        </div>
      </div>
    </main>
  );
}
