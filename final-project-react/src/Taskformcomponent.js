import React, { useState } from "react";
const Taskformcomponent = ({ updateTaskData }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    if (task != "") {
      e.preventDefault();
      let taskObject = {
        name: task,
        status: "active",
        id: Date.now()
      };
      updateTaskData(taskObject);
      setTask("");
    }
  };

  return (
    <div>
      <div className="add-items d-flex">
        <input
          type="text"
          value={task}
          className="form-control todo-list-input"
          onChange={(e) => setTask(e.target.value)}
          placeholder="task"
        />
        <button
          type="submit"
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
          onClick={handleSubmit}
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
};

export default Taskformcomponent;
