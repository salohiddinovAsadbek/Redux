import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/slices/todo";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Form;
