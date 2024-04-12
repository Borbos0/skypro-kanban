import { Route, Routes } from "react-router-dom";
import { paths } from "../src/lib/const";
import PrivateRoute from "../src/components/PrivateRoute/PrivateRoute";
import MainPage from "../src/pages/MainPage";
import RegisterPage from "../src/pages/RegisterPage";
import ExitPage from "../src/pages/ExitPage";
import LoginPage from "../src/pages/LoginPage";
import CardPage from "../src/pages/CardPage";
import NotFoundPage from "../src/pages/NotFoundPage";
import { useState } from "react";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route
              path={paths.EXIT}
              element={<ExitPage setIsAuth={setIsAuth} />}
            />
            <Route path={paths.CARD} element={<CardPage />} />
          </Route>
        </Route>

        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route
          path={paths.LOGIN}
          element={<LoginPage setIsAuth={setIsAuth} />}
        />
        <Route path={paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
