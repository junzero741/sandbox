import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [data, setData] = useState("");

	const clickHandler = () => {
		setData("newdata");
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={clickHandler}>showdata</button>
				<p>{data}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
					<span>welcome</span>
				</a>
			</header>
		</div>
	);
}

export default App;
