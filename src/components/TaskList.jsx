import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks } = useSelector((store) => store.tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ul>
  );
};
export default TaskList;
