import { handleActions } from "../utils";

const initialState = {
  tasks: [],
}
export const taskListReducer = handleActions(
  {},
  initialState
);