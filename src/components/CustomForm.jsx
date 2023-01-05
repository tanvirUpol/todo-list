import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const CustomForm = ({addTask}) => {

    const [task,setTask] = useState("")

    // functions
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        addTask({
          name: task,
          checked: false,
          id: Date.now()
        })
        setTask("")
    }

    
  return (
    <form 
    className="todo"
    onSubmit={handleFormSubmit}
        >

        <div className="wrapper">
            <input 
            type="text" 
            id="task"
            className="input"
            value={task}
            onInput={(e)=>setTask(e.target.value)}
            required
            autoFocus
            placeholder="Enter a Task"
            />
            
            <button 
                className="btn"
                aria-label="Add Task"
                type="submit"
                ><PlusIcon width={30} height={30}/>
                </button>
        </div> 

    </form>
  )
}
export default CustomForm