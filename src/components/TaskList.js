import Task from "./Task";

const TaskList = (props) => {
  return (
    <ul>
        {props.tasks.map((enteredTask) => (
          <Task
            test={console.log(props.tasks)}
            key={enteredTask.id}
            title={enteredTask.title}
          />
        ))}
    </ul>
  );
};

export default TaskList;
