import AddTask from './components/AddTask';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const addTasksInApp = (enteredTask) => {
    console.log(enteredTask);
  }

  return (
    <div className="App">
      <AddTask onAddedTasks={addTasksInApp}/>
      <TaskList/>
    </div>
  );
}

export default App;
