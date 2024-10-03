import { useToDoContext } from "../context/TodoContext";
import TodoCard from "./TodoCard";

const TodoList = () => {

  const { todos } = useToDoContext();

  return (
      <ul className="main">
      {todos && todos.map((task, todoIndex) =>
        <TodoCard
          todoIndex={todoIndex}
        >
          <p>{task}</p>
        </TodoCard>
      )}
    </ul>
  );
}

export default TodoList;