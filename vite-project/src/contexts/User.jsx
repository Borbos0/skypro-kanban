import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/const";

function checkLS() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(checkLS());
  const navigate = useNavigate();

  function userLogin(userData) {
    localStorage.setItem("user", JSON.stringify(userData.token));
    localStorage.setItem("name", JSON.stringify(userData.name));
    setUser(userData);
    navigate(paths.MAIN);
  }
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(paths.LOGIN);
  }
  return (
    <UserContext.Provider value={{ user, userLogin, logout }}>
      {children}
    </UserContext.Provider>
  );
}
