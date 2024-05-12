import { useContext } from "react";
import { UserContext } from "../User";

export function useUserContext() {
  return useContext(UserContext);
}
