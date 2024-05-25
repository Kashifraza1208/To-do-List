import {
  ALL_TASK_FAIL,
  ALL_TASK_REQUEST,
  ALL_TASK_SUCCESS,
  CLEAR_ERRORS,
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  SINGLE_TASK_FAIL,
  SINGLE_TASK_REQUEST,
  SINGLE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "../constants/taskConstants";

import axios from "axios";

export const getAllTask = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TASK_REQUEST });

    const { data } = await axios.get(`/api/v1/tasks`);
    console.log(data);

    dispatch({ type: ALL_TASK_SUCCESS, payload: data.todos });
  } catch (error) {
    dispatch({ type: ALL_TASK_FAIL, payload: error.response.data.message });
  }
};

export const getSingleTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_TASK_REQUEST });

    const { data } = await axios.get(`/api/v1/tasks/${id}`);
    console.log(data);

    dispatch({ type: SINGLE_TASK_SUCCESS, payload: data.todo });
  } catch (error) {
    dispatch({ type: SINGLE_TASK_FAIL, payload: error.response.data.message });
  }
};

export const addTask =
  (title, description, duedate, status) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_TASK_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `/api/v1/tasks`,
        { title, description, duedate, status },
        config
      );

      dispatch({ type: CREATE_TASK_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_TASK_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TASK_REQUEST });

    const { data } = await axios.delete(`/api/v1/tasks/${id}`);

    dispatch({ type: DELETE_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_TASK_FAIL, payload: error.response.data.message });
  }
};

export const updateTask =
  (title, description, duedate, status, id) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_TASK_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/tasks/${id}`,
        { title, description, duedate, status },
        config
      );

      console.log(data);

      dispatch({ type: UPDATE_TASK_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_TASK_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
