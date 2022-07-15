import AddTask from "./components/AddTask";
import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";

const DUMMY_TASKS = [
  {
    key: "1",
    title: "testing Purpose Task 1",
  },
  {
    key: "2",
    title: "testing Purpose Task 2",
  },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  console.log(tasks);

  const addTasksInApp = (enteredTask) => {
    setTasks((prevTaskList) => {
      return [enteredTask, ...prevTaskList];
    });
  };

  return (
    <div className="App">
      <AddTask onAddedTasks={addTasksInApp} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
