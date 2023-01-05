import TaskItem from "./TaskItem"

function TaskList({tasks,deleteTask,checkTask,enterEditMode}) {
  return (
    
    <ul className="tasks">
        {tasks.map(task =>(
            <TaskItem
                key={task.id}
                task={task}
                deleteTask = {deleteTask}
                checkTask = {checkTask}
                enterEditMode={enterEditMode}
            />
        ))}
        
    </ul>
    
   
    
  )
}
export default TaskList