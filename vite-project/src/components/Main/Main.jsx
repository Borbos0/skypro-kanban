import Column from '../Columns/MainColumn.jsx';
// import { card } from '../Data/Data.jsx' 

export default function Main() {
    
    // const testing = card.filter((c) => c.statusName === "Тестирование")
    // const inWork = card.filter((c) => c.statusName === "В работе")
    return (
	    <main class="main">
		    <div class="container">
			    <div class="main__block">
				    <div class="main__content">
                        <Column statusName = {"Без статуса"} tag = {"Research"} description = {"Название задачи"} date = {"30.10.23"} />
                        <Column statusName = {"Нужно сделать"} tag = {"Research"} description = {"Название задачи"} date = {"30.10.23"} />
                        <Column statusName = {"В работе"} tag = {"Research"} description = {"Название задачи"} date = {"30.10.23"} />
                        <Column statusName = {"Тестирование"} tag = {"Research"} description = {"Название задачи"} date = {"30.10.23"} />
                        <Column statusName = {"Готово"} tag = {"Research"} description = {"Название задачи"} date = {"30.10.23"} />
                    </div>
                </div>
            </div>
        </main>
    );
}