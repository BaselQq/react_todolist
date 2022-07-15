import { useState } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const [allTasks, setAllTasks] = useState(props.tasks);

  const clearAllTasks = () => {
    setAllTasks(false);
  };

  return (
    <div>
      {allTasks && <ul>
        {props.tasks.map((enteredTask) => (
          <Task key={enteredTask.id} title={enteredTask.title} />
        ))}
      </ul>}
      <button onClick={clearAllTasks}>Clear all Tasks</button>
    </div>
  );
};

export default TaskList;
