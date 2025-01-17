import React, { useContext, useState } from 'react';
import '../styles/TodoPage.css';
import { TaskContext } from "./TaskContext";

const TodoPage = () => {
  const { kanbanTasks, setKanbanTasks } = useContext(TaskContext);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setKanbanTasks((prevKanban) => ({
      ...prevKanban,
      todo: [...prevKanban.todo, { id: Date.now(), text: newTodo }],
    }));
    setNewTodo('');
  };

  const moveTask = (taskId, from, to) => {
    setKanbanTasks((prevKanban) => {
      const taskToMove = prevKanban[from].find((task) => task.id === taskId);
      const updatedFrom = prevKanban[from].filter((task) => task.id !== taskId);
      const updatedTo = [...prevKanban[to], taskToMove];
      return { ...prevKanban, [from]: updatedFrom, [to]: updatedTo };
    });
  };

  return (
    <div className="page-container">
      <h1>Your Kanban To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="kanban-container">
        {Object.keys(kanbanTasks).map((status) => (
            <div key={status} className="kanban-column">
              <h2>{status.toUpperCase()}</h2>
              <ul>
                {kanbanTasks[status].map((task) => (
                    <li key={task.id}>
                      <span>{task.text}</span> {/* Use task.text to display the task content */}
                      {status !== 'todo' && (
                          <button onClick={() => moveTask(task.id, status, 'todo')}>To-Do</button>
                      )}
                      {status !== 'inProgress' && (
                          <button onClick={() => moveTask(task.id, status, 'inProgress')}>
                            In Progress
                          </button>
                      )}
                      {status !== 'done' && (
                          <button onClick={() => moveTask(task.id, status, 'done')}>Done</button>
                      )}
                    </li>
                ))}
              </ul>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
