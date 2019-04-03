import {combineReducers} from 'redux';

import {uiReducer} from "./ui/reducer";
import {taskListReducer} from "./taskList/reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  taskList: taskListReducer,
});

export  { rootReducer };