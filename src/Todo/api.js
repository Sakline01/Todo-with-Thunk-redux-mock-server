import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess
} from "../redux/action/todoaction";

export const getTodos = () => (dispatch) => {
  const requestAction = getTodosRequest();
  dispatch(requestAction);
  return fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((res) => {
      const successAction = getTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = getTodosFailure();
      dispatch(failureAction);
    });
};

export const addTodos = (text) => (dispatch) => {
  const requestAction = addTodosRequest();
  dispatch(requestAction);
  return fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: text,
      status: false
    })
  })
    .then((res) => res.json())
    .then((res) => {
      const successAction = addTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = addTodosFailure();
      dispatch(failureAction);
    });
};
