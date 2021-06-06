import Grettings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import SampleProvider from "./SampleContext";

function App() {
	const onClick = (name: string) => {
		console.log(`${name} says hello`);
	};

	const onSubmit = (form: { name: string; desc: string }) => {
		console.log(form);
	};

	return (
		<SampleProvider>
			<Grettings name="goody" optional="bla" onClick={onClick} />
			<Counter />
			<MyForm onSubmit={onSubmit} />
			<ReducerSample />
		</SampleProvider>
	);
}

export default App;
