import { atom } from "recoil";
import { ITodoTypes } from "./types";

export const todoListState = atom<ITodoTypes[]>({
	key: "todoListState",
	default: [],
});
