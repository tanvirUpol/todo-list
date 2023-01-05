import { useState } from 'react'

// components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'


function App() {
  const [tasks,setTasks] = useState([ ])
  const [editedTask,setEditedTask]=useState(null)
  const [isEditing,setIsEditing] = useState(false)
  const [previousFocusEl,setPreviousFocusEl] = useState(null)


  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task=>task.id !== id))
  } 


  const addTask = (task) =>{
    setTasks(prevState  => [...prevState,task])
    // setTasks(tasks.reverse())`
  }

  const checkTask = (id) =>{
      setTasks(prevState => prevState.map(task => (
        task.id === id ? {...task,checked: !task.checked} : task
      ))) 
  }

  const updatedTask = (task) =>{
    console.log(task);
    setTasks(prevState => prevState.map(t => (
      t.id === task.id ? {...t, name: task.name} : t
    ))) 
    closeEditMode();
  }

  const closeEditMode =()=>{
    setIsEditing(false)
    previousFocusEl.focus()
  }


  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

  return (
    <div className="app container">
      <header>
        <h1>My To-Do List</h1>
      </header>
     {
      isEditing && (
         <EditForm 
         closeEditMode ={closeEditMode}
        editedTask={editedTask} 
        updateTask={updatedTask}
      />)
     }
      <CustomForm addTask={addTask} />
      {tasks && <TaskList enterEditMode={enterEditMode} tasks={tasks} deleteTask={deleteTask} checkTask={checkTask}  ></TaskList>}
    </div>
  )
}

export default App
