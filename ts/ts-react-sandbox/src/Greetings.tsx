interface GreetingsProps {
	name: string;
	mark: string;
	optional?: string;
	onClick: (name: string) => void;
}

const Grettings = ({ name, mark, optional, onClick }: GreetingsProps) => {
	const handleClick = () => onClick(name);
	return (
		<>
			<div>
				hello, {name} {mark}
				{optional && <p>{optional}</p>}
			</div>
			<button onClick={handleClick}>Click Me</button>
		</>
	);
};

Grettings.defaultProps = {
	mark: "!",
};

export default Grettings;
