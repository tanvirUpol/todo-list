import { useState } from 'react'

// components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'


function App() {
  const [tasks,setTasks] = useState([ ])
  const addTask = (task) =>{
    setTasks(prevState  => [...prevState,task])
    // setTasks(tasks.reverse())
  }

  return (
    <div className="app container">
      <header>
        <h1>My To-Do List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks}></TaskList>}
    </div>
  )
}

export default App
