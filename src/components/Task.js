import React, { useState } from "react";
import UpdateTask from "./UpdateTask";

const Task = (props) => {
  const [isUpdateButtonExisted, setUpdateButtonExisted] = useState(true);
  const [isUpdateFormExisted, setUpdateFormExisted] = useState(true);
  const [isExisted, setExisted] = useState(true);
  const [title, setTitle] = useState(props.title);

  const deleteTask = () => {
    setTitle('')
    setExisted(false);
    setUpdateButtonExisted(false);
    setUpdateFormExisted(true);
  };

  const updateTask = () => {
    setUpdateButtonExisted(false);
    setUpdateFormExisted(false);
  };

  const saveUpdateTask = (task) => {
    setUpdateButtonExisted(false);
    if (task !== "") {
      setTitle(task);
      setUpdateFormExisted(true);
      setUpdateButtonExisted(true);
    }
  };


  return (
    <div>
      {isExisted && <h2>{title}</h2>}
      <div>{isExisted && <button onClick={deleteTask}>Delete</button>}</div>
      <div>
        {isUpdateButtonExisted && <button onClick={updateTask}>Update</button>}
        {!isUpdateFormExisted && <UpdateTask onUpdate={saveUpdateTask} />}
      </div>
    </div>
  );
};

export default Task;
