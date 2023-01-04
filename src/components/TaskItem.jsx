function TaskItem({task}) {
  return (
    <li className="task">
      <div className="task-group">
        <input type="checkbox" 
          // checked={task.checked}
          name={task.name}
          // onChange={} 
          id={task.id} 
        />

        <label htmlFor={task.id}>{task.name}</label>


      </div>
        
    </li>
  )
}
export default TaskItem