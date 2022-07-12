import TaskForm from "./TaskForm";

const AddTask = () => {
const saveTaskHandler = (enteredTask) => {
    const tasksData = {
        ...enteredTask,
        id: Math.random().toString()
    };
    console.log(tasksData);
}

return (
    <div>
        <TaskForm onAddTask={saveTaskHandler}/>
    </div>
);
}
export default AddTask;