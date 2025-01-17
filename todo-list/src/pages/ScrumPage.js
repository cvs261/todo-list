import React, { useContext, useState } from "react";
import "../styles/ScrumPage.css";
import { TaskContext } from "./TaskContext";

const ScrumPage = () => {
  const { scrumTasks, setScrumTasks } = useContext(TaskContext);
  const [newSprint, setNewSprint] = useState("");
  const [newTask, setNewTask] = useState("");
  const [selectedSprint, setSelectedSprint] = useState("");

  const addSprint = () => {
    if (newSprint.trim() === "") return;
    setScrumTasks((prev) => ({ ...prev, [newSprint]: [] }));
    setNewSprint("");
  };

  const addTaskToSprint = () => {
    if (newTask.trim() === "" || !selectedSprint) return;
    setScrumTasks((prev) => ({
      ...prev,
      [selectedSprint]: [...prev[selectedSprint], newTask],
    }));
    setNewTask("");
  };

  return (
    <div className="page-container">
      <h1>Your Scrum Board</h1>

      <div className="input-container">
        <input
          type="text"
          value={newSprint}
          onChange={(e) => setNewSprint(e.target.value)}
          placeholder="Add a new sprint"
        />
        <button onClick={addSprint}>Add Sprint</button>
      </div>

      {Object.keys(scrumTasks).length > 0 && (
        <div className="input-container">
          <select
            value={selectedSprint}
            onChange={(e) => setSelectedSprint(e.target.value)}
          >
            <option value="">Select Sprint</option>
            {Object.keys(scrumTasks).map((sprint, index) => (
              <option key={index} value={sprint}>
                {sprint}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a task to the sprint"
          />
          <button onClick={addTaskToSprint}>Add Task</button>
        </div>
      )}

      <div className="scrum-container">
        {Object.keys(scrumTasks).map((sprint, index) => (
          <div key={index} className="scrum-column">
            <h2>{sprint}</h2>
            <ul>
              {scrumTasks[sprint]?.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrumPage;
