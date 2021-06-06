import { useState, useReducer } from "react";

interface Action {
	type: "INCREASE" | "DECREASE";
}

const countReducer = (state: number, action: Action): number => {
	switch (action.type) {
		case "INCREASE":
			return state + 1;
		case "DECREASE":
			return state - 1;
		default:
			throw new Error("unhandled action");
	}
};

const Counter = () => {
	const [count, countDispatch] = useReducer(countReducer, 0);
	const onIncrease = () => countDispatch({ type: "INCREASE" });
	const onDecrease = () => countDispatch({ type: "DECREASE" });

	return (
		<>
			<h1>{count}</h1>
			<div>
				<button onClick={onIncrease}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		</>
	);
};

export default Counter;
