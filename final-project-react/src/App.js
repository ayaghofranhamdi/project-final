import "./App.css";
import TaskListcomponent from "./TaskListcomponent";
import Taskformcomponent from "./Taskformcomponent.js";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const updateTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id) => {
    const changedTask = tasks.find((task) => task.id === id);
    const objWithIdIndex = tasks.findIndex((obj) => obj.id === id);
    if (changedTask.status == "completed") {
      tasks[objWithIdIndex].status = "active";
    } else {
      tasks[objWithIdIndex].status = "completed";
    }
    setTasks([...tasks]);
  };

  return (
    <div className="App">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Todo list</h4>
                  <Taskformcomponent
                    updateTaskData={updateTasks}
                  ></Taskformcomponent>
                  <TaskListcomponent
                    tasks={tasks}
                    updateTask={updateTask}
                  ></TaskListcomponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
