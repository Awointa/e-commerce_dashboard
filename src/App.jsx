import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto_auto]">
			<Sidebar />
		</div>
	);
}

export default App;
