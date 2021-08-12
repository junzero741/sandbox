import { RecoilRoot } from "recoil";
import Grettings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import SampleProvider from "./SampleContext";
import LocalStorage from "./LocalStorage";
import MapSet from "./MapSet";
import TodoList from "./TodoList";
import Mark from "./Mark";

function App() {
	const onClick = (name: string) => {
		console.log(`${name} says hello`);
	};

	const onSubmit = (form: { name: string; desc: string }) => {
		console.log(form);
	};

	return (
		<>
			{/* <RecoilRoot> */}
			{/* <SampleProvider> */}
			{/* <Grettings name="goody" optional="bla" onClick={onClick} />
				<Counter />
				<MyForm onSubmit={onSubmit} />
				<ReducerSample />
				<LocalStorage />
				<MapSet /> */}
			{/* <TodoList /> */}
			{/* <Mark /> */}
			{/* </SampleProvider> */}
			{/* </RecoilRoot> */}
		</>
	);
}

export default App;
