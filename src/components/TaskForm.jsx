import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../store/slices/task.slice';

const TaskForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const taskDescription = e.target.taskDescription.value
    const newTask = {
      id: uuidv4(),
      description: taskDescription
    }
    dispatch(addTask(newTask))
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="taskDescription" type="text" />
      <button>Agregar tarea</button>
    </form>
  )
}
export default TaskForm