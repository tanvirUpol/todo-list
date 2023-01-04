import TaskItem from "./TaskItem"

function TaskList({tasks}) {
  return (
    
    <ul className="tasks">
        {tasks.sort().map(task =>(
            <TaskItem
                key={task.id}
                task={task}
            />
        ))}
        
    </ul>
    
   
    
  )
}
export default TaskList