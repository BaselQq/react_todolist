import { useState } from "react";

const TaskForm = (props) => {
    const [enteredTask, setEnteredTask] = useState("");

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const tasksData = {
            title: enteredTask
        };
        
        props.onAddTask(tasksData);
        setEnteredTask('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" value={enteredTask} onChange={taskChangeHandler}/>
            <button type="submit">Add</button>
            </form>
        </div>
    )
};

export default TaskForm;