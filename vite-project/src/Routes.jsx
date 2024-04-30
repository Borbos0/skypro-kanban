import { Route, Routes, useNavigate } from "react-router-dom";
import { paths } from "../src/lib/const";
import PrivateRoute from "../src/components/PrivateRoute/PrivateRoute";
import MainPage from "../src/pages/MainPage";
import RegisterPage from "../src/pages/RegisterPage";
import ExitPage from "../src/pages/ExitPage";
import LoginPage from "../src/pages/LoginPage";
import CardPage from "../src/pages/CardPage";
import NotFoundPage from "../src/pages/NotFoundPage";
import { useState } from "react";
function checkLS() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.log(error);
    return null;
  }
}
const AppRoutes = () => {
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
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={paths.MAIN} element={<MainPage user={user} />}>
            <Route path={paths.EXIT} element={<ExitPage logout={logout} />} />
            <Route path={paths.CARD} element={<CardPage />} />
          </Route>
        </Route>

        <Route
          path={paths.REGISTER}
          element={<RegisterPage userLogin={userLogin} />}
        />
        <Route
          path={paths.LOGIN}
          element={<LoginPage userLogin={userLogin} />}
        />
        <Route path={paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
