interface GreetingsProp {
	onClick: (name:string) => void;
	name: string;
	optional: string;
	mark? : string;
}

const Greetings = ({name, optional, mark, onClick}: GreetingsProp) => {

	const handleClick= () => {
		onClick(name);
	}


	return( 
	<>
		<div>hello, {name} {mark}</div>
		{optional && <div>{optional}</div>}
		<button onClick={handleClick}>Click Me</button>
	</>
	)
}

export default Greetings;


Greetings.defaultProps = {
	mark: '!'
}