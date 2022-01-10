import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/action/todoaction";
import { getTodos } from "./api";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  let colour = {
    color: status ? "green" : "red"
  };
  return (
    <div
      style={{
        height: "auto",
        width: "30%",
        minWidth: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1rem",
        gap: "2rem",
        border: "blue solid 2px"
      }}
    >
      <div>{title}</div>
      <div style={colour}>{`${status}`}</div>
      <button
        style={{ color: "white", background: "red" }}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
      <button style={{ background: "#ddf139" }} onClick={() => onToggle(id)}>
        Toggle Status
      </button>
    </div>
  );
}

function TodoList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  console.log(todos);
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "center"
      }}
    >
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
