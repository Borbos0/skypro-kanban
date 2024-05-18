import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [task, setTask] = useState([]);

  function createNewTask(newTask) {
    setTask(newTask);
  }

  return (
    <TaskContext.Provider value={{ task, setTask, createNewTask }}>
      {children}
    </TaskContext.Provider>
  );
}
