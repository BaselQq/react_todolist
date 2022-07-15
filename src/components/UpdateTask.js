import { useState } from "react";

const UpdateTask = (props) => {
    const[task, setTask] = useState('');
    
    const doneEditTask = () => {
        setTask(task)
        props.onUpdate(task);
    };

    const setNewTaskTitle = (event) => {
        event.preventDefault();
        setTask(event.target.value);
    };

    return (
        <div>
            <input type="text" value={task} onChange={setNewTaskTitle}></input>
            <button onClick={doneEditTask}>Done</button>
            <button>Cancle</button>
        </div>
    );
};

export default UpdateTask