import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CreateTask from './Components/CreateTask';
import Tasks from './Components/Tasks';

function App() {
  const [task, setTask] = useState([]);

  const getTasks = () =>{
    axios.get('http://localhost:8000/tasks')
    .then(({data}) => {setTask(data)})
    .catch((e) => console.log(e))
  }

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8000/tasks/${id}`)
    .then(() => {getTasks()})
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    getTasks();
  }, [])
  return (
    <>
      <CreateTask getTasks={getTasks}/>
      <h1>Задачи</h1>
    <Tasks tasks={task} deleteTask={deleteTask}/>
    </>
  )
}

export default App
