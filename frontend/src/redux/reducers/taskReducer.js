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
  DELETE_TASK_RESET,
  DELETE_TASK_SUCCESS,
  SINGLE_TASK_FAIL,
  SINGLE_TASK_REQUEST,
  SINGLE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_RESET,
  UPDATE_TASK_SUCCESS,
} from "../constants/taskConstants";

export const createTaskReducer = (state = { task: {} }, action) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
      return {
        loading: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: action.payload.success,
        task: action.payload,
      };

    case CREATE_TASK_FAIL:
      return {
        loading: false,
        task: null,
        isAdded: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_TASK_FAIL:
    case DELETE_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_TASK_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_TASK_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const alltaskReducer = (state = { allTask: [] }, action) => {
  switch (action.type) {
    case ALL_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        allTask: action.payload,
      };

    case ALL_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const singletaskReducer = (state = { singleTask: {} }, action) => {
  switch (action.type) {
    case SINGLE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        singleTask: action.payload,
      };

    case SINGLE_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
