import { useReducer } from "react";

type Action = { type: "SET_COUNT"; count: number } | { type: "SET_TEXT"; text: string } | { type: "SET_COLOR"; color: string } | { type: "TOGGLE_GOOD" };

interface StateI {
	count: number;
	text: string;
	color: string;
	isGood: boolean;
}

const stateReducer = (state: StateI, action: Action) => {
	switch (action.type) {
		case "SET_COUNT":
			return {
				...state,
				count: action.count,
			};
		case "SET_TEXT":
			return {
				...state,
				text: action.text,
			};
		case "SET_COLOR":
			return {
				...state,
				color: action.color,
			};
		case "TOGGLE_GOOD":
			return {
				...state,
				isGood: !state.isGood,
			};
		default:
			throw new Error("unhandled action");
	}
};

const ReducerSample = () => {
	const [state, stateDispatch] = useReducer(stateReducer, {
		count: 0,
		text: "hello",
		color: "red",
		isGood: true,
	});

	const setCount = () => stateDispatch({ type: "SET_COUNT", count: 5 });
	const setText = () => stateDispatch({ type: "SET_TEXT", text: "bye" });
	const setColor = () => stateDispatch({ type: "SET_COLOR", color: "orange" });
	const toggleGood = () => stateDispatch({ type: "TOGGLE_GOOD" });

	return (
		<div>
			<p>
				<code>count: </code> {state.count}
			</p>
			<p>
				<code>text: </code> {state.text}
			</p>
			<p>
				<code>color: </code> {state.color}
			</p>
			<p>
				<code>isGood: </code> {state.isGood ? "true" : "false"}
			</p>
			<div>
				<button onClick={setCount}>SET_COUNT</button>
				<button onClick={setText}>SET_TEXT</button>
				<button onClick={setColor}>SET_COLOR</button>
				<button onClick={toggleGood}>TOGGLE_GOOD</button>
			</div>
		</div>
	);
};

export default ReducerSample;
