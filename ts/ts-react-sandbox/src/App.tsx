import Grettings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
	
	const onClick = (name:string) => {
		console.log(`${name} says hello`)
	}
	
	const onSubmit = (form:{name:string, desc:string}) => {
		console.log(form);
	}
	
	return (
		<>
			<Grettings name="goody" optional="bla" onClick={onClick} />
			<Counter />
			<MyForm onSubmit={onSubmit}/>
			<ReducerSample />
		</>
	);
}

export default App;
