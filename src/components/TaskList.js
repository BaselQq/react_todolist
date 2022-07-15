import Task from "./Task";

const TaskList = (props) => {
  return (
    <ul>
        {props.tasks.map((enteredTask) => (
          <Task
            key={enteredTask.id}
            title={enteredTask.title}
          />
        ))}
    </ul>
  );
};

export default TaskList;
