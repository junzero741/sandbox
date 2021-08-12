import { useSampleState, useSampleDispatch } from "./SampleContext";

const ReducerSample = () => {
	const state = useSampleState();
	const stateDispatch = useSampleDispatch();

	const setCount = () => stateDispatch({ type: "SET_COUNT", count: state.count + 5 });
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
				<code> mode :</code> {state.isGood ? "true" : "false"}
			</p>
			<div>
				<button onClick={setCount}>plusCount</button>
				<button onClick={setColor}>setColor</button>
				<button onClick={toggleGood}>toggleMode</button>
			</div>
		</div>
	);
};

export default ReducerSample;
