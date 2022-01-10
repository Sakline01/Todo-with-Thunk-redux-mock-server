import { appConstants } from "./todoActionTypes";

export const getTodosRequest = () => {
  return {
    type: appConstants.GET_TODO_REQUEST
  };
};

export const getTodosSuccess = (todos) => {
  return {
    type: appConstants.GET_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  };
};

export const getTodosFailure = () => {
  return {
    type: appConstants.GET_TODO_FAILURE
  };
};

export const addTodosRequest = () => {
  return {
    type: appConstants.ADD_TODO_REQUEST
  };
};

export const addTodosSuccess = (todos) => {
  return {
    type: appConstants.ADD_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  };
};

export const addTodosFailure = () => {
  return {
    type: appConstants.ADD_TODO_FAILURE
  };
};

export const removeTodo = (id) => ({
  type: appConstants.REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

export const toggleTodo = (id) => ({
  type: appConstants.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});
