import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [kanbanTasks, setKanbanTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const [scrumTasks, setScrumTasks] = useState({});

  return (
    <TaskContext.Provider
      value={{
        kanbanTasks,
        setKanbanTasks,
        scrumTasks,
        setScrumTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
