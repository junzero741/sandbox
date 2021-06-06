import {useReducer} from 'react';

interface Action {
	type : "INCREASE" | "DECREASE";
}

const reducer = (state:number, action: Action) => {
	switch(action.type) {
		case "INCREASE" : 
			return state = state+1;
		case "DECREASE" :
			return state = state-1;
		default :
			throw new Error('unhandled action');
	}
}

const Counter = () => {
	const [count, dispatch] = useReducer(reducer, 0);

	const onIncrease = () => dispatch({type:"INCREASE"});
	const onDecrease = () => dispatch({type:"DECREASE"});


	return (
		<>
			<h1>{count}</h1>
			<button onClick = {onIncrease}>+</button>
			<button onClick = {onDecrease}>-</button>
		</>
	)
}

export default Counter;