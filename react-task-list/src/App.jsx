import './App.css'
import tasks from './tasks'

function App() {

  const taskInProgress = tasks.filter((task) => (task.state !== 'completed'))
  console.log(taskInProgress)
  const taskCompleted = tasks.filter((task) => (task.state === 'completed'))
  // console.log(taskCompleted)


  return (
    <main>
      <ul>
        {taskInProgress.map((task) =>
          <li key={task.id}>{task.title}</li>
        )}
      </ul>
      <ul>
        {taskCompleted.map((task) =>
          <li key={task.id}>{task.title}</li>
        )}
      </ul>

    </main>
  )



}

export default App
