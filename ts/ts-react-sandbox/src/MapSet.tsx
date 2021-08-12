import { useState } from "react";

const MapSet = () => {
	const [m, setM] = useState(new Map());
	m.set("t", 3);
	console.log(m);
	return <div></div>;
};
export default MapSet;
