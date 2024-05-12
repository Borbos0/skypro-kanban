import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [task, setTask] = useState([]);

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}
