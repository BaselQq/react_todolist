import TaskForm from "./TaskForm";

const AddTask = (props) => {
const saveTaskHandler = (enteredTask) => {
    const tasksData = {
        ...enteredTask,
        id: Math.random().toString()
    };
    props.onAddedTasks(tasksData);
}

return (
    <div>
        <TaskForm onAddTask={saveTaskHandler}/>
    </div>
);
}
export default AddTask;