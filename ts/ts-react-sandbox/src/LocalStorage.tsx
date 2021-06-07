import { useState, useEffect } from "react";

const LocalStorage = () => {
	const [value, setValue] = useState(5);

	localStorage.Test = value;
	localStorage["Test"] = value;
	localStorage.Test === 0
		? localStorage.removeItem("Test")
		: (localStorage.Test = 10);

	return <>로컬스토리지에 값 저장됌.</>;
};

export default LocalStorage;
