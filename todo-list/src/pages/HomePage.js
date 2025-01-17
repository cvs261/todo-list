import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import "../styles/HomePage.css";

const HomePage = () => {
  const { kanbanTasks, scrumTasks } = useContext(TaskContext);

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to the To-Do List App</h1>
      <p className="page-subtitle">Navigate to the To-Do or Scrum page to manage your tasks!</p>

      <div className="kanban-section">
        <h2>Kanban Tasks</h2>
        <div className="kanban-tasks">
          <div className="kanban-column">
            <h3>To-Do</h3>
            <ul>
              {kanbanTasks.todo.map((task) => (
                <li key={task.id} className="task-item task-todo">{task.text}</li>
              ))}
            </ul>
          </div>
          <div className="kanban-column">
            <h3>In Progress</h3>
            <ul>
              {kanbanTasks.inProgress.map((task) => (
                <li key={task.id} className="task-item task-in-progress">{task.text}</li>
              ))}
            </ul>
          </div>
          <div className="kanban-column">
            <h3>Done</h3>
            <ul>
              {kanbanTasks.done.map((task) => (
                <li key={task.id} className="task-item task-done">{task.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="scrum-section">
        <h2>Scrum Tasks</h2>
        {Object.keys(scrumTasks).length > 0 ? (
          Object.keys(scrumTasks).map((sprint, index) => (
            <div key={index} className="scrum-sprint">
              <h3>{sprint}</h3>
              <ul>
                {scrumTasks[sprint].map((task, i) => (
                  <li key={i} className="task-item">{task}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No tasks in Scrum yet.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
