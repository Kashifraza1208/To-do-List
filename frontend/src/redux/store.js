import { createStore, combineReducers, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  alltaskReducer,
  createTaskReducer,
  singletaskReducer,
  taskReducer,
} from "./reducers/taskReducer";

const reducer = combineReducers({
  createTask: createTaskReducer,
  updateDelete: taskReducer,
  allTask: alltaskReducer,
  singleTask: singletaskReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
