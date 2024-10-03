import { useToDoContext } from "../context/TodoContext";

const TodoCard = (props: any): any => {
  const { children, todoIndex } = props;
  const { handleDelete, handleEdit } = useToDoContext();

  return (
    <li className="todoItem" key={todoIndex}>
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => handleEdit(todoIndex)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() =>
            handleDelete(todoIndex)
          }>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;