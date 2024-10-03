import { useToDoContext } from "../context/ToDoContext";

const TodoInput = () => {
  const { handleAdd, inputValue, setInputValue } = useToDoContext();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleAdd(inputValue);
    setInputValue('');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd(inputValue);
      setInputValue('');
    }
  }

  return (
    <header>
      <input
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo..." />
      <button
        onClick={handleOnClick}
      >Add</button>
    </header>
  );
}

export default TodoInput;