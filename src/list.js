import { useSelector } from "react-redux";
import todo from "./store/slices/todo";

function List() {
  const todos = useSelector((state) => state.todo);
  return (
    <dl>
      {todos.map((item, index) => {
        return <dt key={index}>{item}</dt>;
      })}
    </dl>
  );
}

export default List;
