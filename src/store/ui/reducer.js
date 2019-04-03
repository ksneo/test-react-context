import { handleActions } from "../utils";

const initialState = {
  showLoader: false,
}

export const uiReducer = handleActions(
  {},
  initialState
);