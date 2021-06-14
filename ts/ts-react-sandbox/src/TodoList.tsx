import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
const TodoList = () => {
	const todoList = useRecoilValue(todoListState);

	const todos = todoList.map(todo => <TodoItem key={todo.id} item={todo} />);

	return (
		<>
			<TodoItemCreator />
			{todos}
		</>
	);
};

export default TodoList;
