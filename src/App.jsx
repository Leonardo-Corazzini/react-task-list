import './App.css'
import tasks from './tasks'

function App() {
  const title = 'Task Manager'
  const taskInProgress = tasks.filter((task) => (task.state !== 'completed'))
  console.log(taskInProgress)
  const taskCompleted = tasks.filter((task) => (task.state === 'completed'))
  // console.log(taskCompleted)


  return (
    <>
      <header className='header'>
        <h1>{title}</h1>
      </header>
      <main>
        <div className='task-inprogress'>
          <ul>
            <h2>Current Task ({taskInProgress.length})</h2>
            {taskInProgress.map((task) =>
              <li key={task.id}>
                <p>{task.title} <span className={task.state}>{task.state}</span></p>
                <p>Priority: {task.priority}</p>
                <p>Est. time {task.estimatedTime}</p>

              </li>
            )}
          </ul>

        </div>
        <div className='task-completed'>
          <ul>
            <h2>Current Task ({taskCompleted.length})</h2>
            {taskCompleted.map((task) =>
              <li key={task.id}>
                <p>{task.title} <span className={task.state}>{task.state}</span></p>
                <p>Priority: {task.priority}</p>
                <p>Est. time {task.estimatedTime}</p>
              </li>
            )}
          </ul>
        </div>

      </main>

    </>

  )



}

export default App
