import { atom, selector } from "recoil";
import { ITodoTypes } from "./types";

export const todoListState = atom<ITodoTypes[]>({
	key: "todoListState",
	default: [],
});

export const todoListFilterState = atom({
	key: "todoListFilterState",
	default: "Show All",
});

export const filteredTodoListState = selector({
	key: "filteredTodoListState",
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case "Show Completed":
				return list.filter(item => item.isCompleted);
			case "Show UnCompleted":
				return list.filter(item => !item.isCompleted);
			default:
				return list;
		}
	},
});
