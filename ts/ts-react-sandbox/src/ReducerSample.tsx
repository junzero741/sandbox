import React, {useReducer} from 'react';

type Color = "red" | "orange" | "yellow";
type Action = {type:"SET_COUNT"; count:number} | {type: "SET_COLOR"; color: string} | {type: "TOGGLE_GOOD"};

interface StateI {
	count: number;
	color: Color;
	isGood: boolean;
}

const stateReducer = (state:StateI, action: Action) => {
	switch (action.type) {
		case "SET_COUNT" :
			return {
				...state,
				count: action.count,
			};
		case "SET_COLOR" :
			return {
				...state,
				color: action.color,
			};
		case "TOGGLE_GOOD" :
			return {
				...state,
				isGood: !state.isGood
			};
		default : 
			throw new Error("unhandled action");
	}
};

const ReducerSample = () => {
	const [state, stateDispatch] = useReducer(stateReducer, {
		count: 0,
		color: "red",
		isGood: true,
	});

	const setCount = () => stateDispatch({ type: "SET_COUNT", count: 5 });
	const setColor = () => stateDispatch({ type: "SET_COLOR", color: "orange" });
	const toggleGood = () => stateDispatch({ type: "TOGGLE_GOOD" });


	return (
		<div>
		<p>
		<code> count :</code> {state.count}
		</p>
		<p>
		<code> color :</code> {state.color}
		</p>
		<p>
		<code> mode :</code> {state.mode ? "true" : "false"}
		</p>
		<div>
			<button onClick={setCount}>plusCount</button>
			<button onClick={setColor}>setColor</button>
			<button onClick={toggleGood}>toggleMode</button>
			</div>
		</div>
	)
};

export default ReducerSample;