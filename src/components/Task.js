import React, { useState } from "react";

const Task = (props) => {
  const [isExisted, setExisted] = useState(true);

const deleteTask = () => {
  setExisted(false);
};

  return (
    <div>
      {isExisted && <h2>{props.title}</h2>}
      <div>
      {isExisted && <button onClick={deleteTask}>Delete</button>}
      </div>
    </div>
  );
};

export default Task;
