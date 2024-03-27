import React from "react";

const Taskcomponent = ({ task, chooseMessage }) => {
  return (
    <div>
      <div className="form-check">
        {" "}
        <label
          className={
            task.status == "completed"
              ? "form-check-label task-style-completed"
              : "form-check-label"
          }
        >
          {" "}
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => chooseMessage(task.id)}
          />
          {task.name}
          <i className="input-helper"></i>
        </label>{" "}
      </div>{" "}
    </div>
  );
};

export default Taskcomponent;
