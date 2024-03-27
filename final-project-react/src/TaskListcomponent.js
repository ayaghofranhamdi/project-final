import React from "react";
import Taskcomponent from "./Taskcomponent.js";

const TaskListcomponent = ({ tasks, updateTask }) => {
  const chooseMessage = (id) => {
    updateTask(id);
  };
  return (
    <div>
      <div className="list-wrapper">
        <ul className="d-flex flex-column-reverse todo-list">
          {tasks.map((task) => (
            <li>
              <Taskcomponent
                task={task}
                chooseMessage={chooseMessage}
              ></Taskcomponent>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskListcomponent;
