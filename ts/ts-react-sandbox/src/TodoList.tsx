import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms";
import { filteredTodoListState } from "./atoms";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
const TodoList = () => {
	const todoList = useRecoilValue(filteredTodoListState);

	const todos = todoList.map(todo => <TodoItem key={todo.id} item={todo} />);

	return (
		<>
			<TodoItemCreator />
			{todos}
			<TodoListFilters />
		</>
	);
};

export default TodoList;
