import { useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { tasks } = useSelector((store) => store.tasks);
  console.log(tasks);
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
