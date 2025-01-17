import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import ScrumPage from "./pages/ScrumPage";
import HomePage from "./pages/HomePage";
import { TaskProvider } from "./pages/TaskContext";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <TaskProvider>
      <div className="app-container">
        <nav>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/todos"
            className={location.pathname === "/todos" ? "active" : ""}
          >
            Kanban
          </Link>
          <Link
            to="/scrum"
            className={location.pathname === "/scrum" ? "active" : ""}
          >
            Scrum
          </Link>
        </nav>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/scrum" element={<ScrumPage />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2025 To-Do List App. All rights reserved.</p>
        </footer>
      </div>
    </TaskProvider>
  );
}

export default App;
