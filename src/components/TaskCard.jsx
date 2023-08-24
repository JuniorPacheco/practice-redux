import { useDispatch } from "react-redux";
import { deleteTask } from "../store/slices/task.slice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{task.description}</p>
      <button onClick={() => dispatch(deleteTask(task.id))}>Eliminar</button>
    </li>
  );
};
export default TaskCard;
