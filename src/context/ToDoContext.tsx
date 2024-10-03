import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
} from "react";

interface Context {
  todos: Array<string>,
  inputValue: string,
  setTodos: (todos: Array<string>) => void,
  setInputValue: (input: string) => void,
  handleAdd: (todo: string) => void,
  handleDelete: (index: any) => void,
  handleEdit: (index: number) => void,
}

export const ToDoContext = createContext<Context | null>(null);

export const ToDoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState('');

  console.log('TODOS: ', todos)

  const persistData = (newTodos: any) => {
    localStorage.setItem('todos', JSON.stringify([...newTodos] ));
  }

  const handleAdd = (newTodo: string) => {
    const newTodoList: Array<string> = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  const handleDelete = (index: number) => {
    const newTodo: Array<string> = todos.filter((todo, todoIndex) => index !== todoIndex);
    persistData(newTodo);
    setTodos(newTodo);
  }

  const handleEdit = (todoIndex: number) => {
    const editedTodo = todos[todoIndex];
    setInputValue(editedTodo);
    handleDelete(todoIndex);
  }

  return (
    <ToDoContext.Provider
      value={{
        todos,
        inputValue,
        setTodos,
        setInputValue,
        handleAdd,
        handleDelete,
        handleEdit,
      }}>
      {children}
    </ToDoContext.Provider>
  );
}

export const useToDoContext = () => {
  const toDoContext = useContext(ToDoContext);

  if (!toDoContext) {
    throw new Error(
      'useToDoContext must be called from inside ToDoProvider'
    );
  }

  return toDoContext;
}



