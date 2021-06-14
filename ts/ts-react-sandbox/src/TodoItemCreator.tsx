import { useSetRecoilState } from "recoil";
import React, { useState } from "react";
import { todoListState } from "./atoms";
import { ITodoTypes } from "./types";

const TodoItemCreator = () => {
	const [inputValue, setInputValue] = useState("");
	const setTodoList = useSetRecoilState<ITodoTypes[]>(todoListState);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const addItem = () => {
		setTodoList((oldTodoList: ITodoTypes[]) => [
			...oldTodoList,
			{
				id: getId(),
				text: inputValue,
				isCompleted: false,
			},
		]);
		setInputValue("");
	};

	return (
		<div>
			<input type="text" value={inputValue} onChange={onChange} />
			<button onClick={addItem}>Add</button>
		</div>
	);
};

let id = 0;
function getId() {
	return id++;
}

export default TodoItemCreator;
