import { useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useToDoContext } from "./context/TodoContext";

function App() {

  const { setTodos } = useToDoContext();

  useEffect(() => {
    if (!localStorage)
      return;

    const localStorageTodos = localStorage.getItem('todos');

    if (!localStorageTodos)
      return;

    setTodos(JSON.parse(localStorageTodos));
  }, []);

  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  )
}

export default App
