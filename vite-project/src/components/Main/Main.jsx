import InWork from '../Columns/InWorkColumn.jsx';
import NeedToDo from '../Columns/NeedToDoColumn.jsx';
import NotStatus from '../Columns/NonStatusColumn.jsx';
import Test from '../Columns/TestingColumn.jsx';
import Column from '../Columns/MainColumn.jsx';
import { card } from '../Data/Data.jsx' 

export default function Main() {
    
    const testing = card.filter((c) => c.statusName === "Тестирование")
    const inWork = card.filter((c) => c.statusName === "В работе")
    console.log(inWork);
    return (
	    <main class="main">
		    <div class="container">
			    <div class="main__block">
				    <div class="main__content">
                        <Column array={testing}/>
                        <Column array={inWork}/>
                        {/* <InWork />
                        <NeedToDo />
                        <NotStatus />
                        <Test /> */}
                    </div>
                </div>
            </div>
        </main>
    );
}