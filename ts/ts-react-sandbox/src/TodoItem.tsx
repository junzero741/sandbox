import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";
import { replaceItemAtIndex, removeItemAtIndex } from "./utils/editItemAtIndex";

interface ITodoItem {
	item: {
		id: number;
		text: string;
		isCompleted: boolean;
	};
}

const TodoItem = ({ item }: ITodoItem) => {
	const { id, text, isCompleted } = item;
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex(listItem => listItem === item);

	const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: e.target.value,
		});
		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);
		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isCompleted: !isCompleted,
		});
		setTodoList(newList);
	};

	return (
		<div>
			<input type="text" value={text} onChange={editItemText} />
			<input
				type="checkbox"
				checked={isCompleted}
				onChange={toggleItemCompletion}
			/>
			<button onClick={deleteItem}>Delete</button>
		</div>
	);
};

export default TodoItem;
