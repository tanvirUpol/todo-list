import { CheckIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { useState } from 'react'

const EditForm = ({editedTask,updateTask,closeEditMode}) => {

    const [updatedTaskName,setUpdatedTaskName] = useState(editedTask.name)

    // functions
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        updateTask({...editedTask, name: updatedTaskName})
    }

    useEffect(()=>{
        const closeModal = (e) =>{
            e.key === "Escape" && closeEditMode()
        }

        window.addEventListener('keydown',closeModal)

        return () => {
            window.removeEventListener('keydown',closeModal)
        }
    },[closeEditMode])
    
  return (
    <div
        role="dialog"

        >
        <form 
                   
        onClick={(e)=>{e.target===e.currentTarget && closeEditMode()}}
        className="todo edit-form"
        onSubmit={handleFormSubmit}
        >
            
            <div className="wrapper"
     
    
            >
                
                <input 
                type="text" 
                id="editTask"
                className="input"
                value={updatedTaskName}
                onInput={(e)=>setUpdatedTaskName(e.target.value)}
                required
                autoFocus
                placeholder="Update Task"
                />
                
                <button 
                    className="btn"
                    aria-label="update Task"
                    type="submit"
                    ><CheckIcon width={30} height={30}/>
                    </button>
            </div> 

        </form>
    </div>
  )
}
export default EditForm