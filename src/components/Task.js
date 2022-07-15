import React from "react";

const Task = (props) => {
  console.log(props.title);
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Task;
