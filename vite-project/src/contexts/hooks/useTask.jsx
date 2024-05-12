import { useContext } from "react";
import { TaskContext } from "../Task";

export function useTaskContext() {
  return useContext(TaskContext);
}
