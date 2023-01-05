import { useState } from "react"
import { PencilIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

function TaskItem({task,deleteTask,checkTask,enterEditMode}) {

  const [isChecked,setIsChecked] = useState(task.checked)

  const handleCheckBox = (e) =>{
    setIsChecked(!isChecked)
    checkTask(task.id)
  }
  
  const handleDelete = (e) =>{
    deleteTask(task.id)
  }

  

  return (
    <li className="task">
      <div className="task-group">
        <input type="checkbox" 
          checked={isChecked}
          name={task.name}
          onChange={handleCheckBox} 
          id={task.id} 
        />

        <label htmlFor={task.id}>{task.name}</label>

      </div>
      <div className="task-group up-del-btn">
        <button 
          className="btn-update"
          onClick={()=> enterEditMode(task)}
          >
            <PencilIcon width={25} height={25} className="icon" ></PencilIcon>
        </button>
        <button onClick={handleDelete} className="btn-delete"><TrashIcon width={25} height={25} className="icon" ></TrashIcon></button>
      </div>
        
    </li>
  )
}
export default TaskItem