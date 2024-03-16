import InWork from '../Columns/InWorkColumn.jsx';
import NeedToDo from '../Columns/NeedToDoColumn.jsx';
import NotStatus from '../Columns/NonStatusColumn.jsx';
import Test from '../Columns/TestingColumn.jsx';
import Ready from '../Columns/ReadyColumn.jsx';

export default function Main() {
    return (
	    <main class="main">
		    <div class="container">
			    <div class="main__block">
				    <div class="main__content">
                        <NotStatus />
                        <NeedToDo />
                        <InWork />
                        <Test />
                        <Ready />
                    </div>
                </div>
            </div>
        </main>
    );
}