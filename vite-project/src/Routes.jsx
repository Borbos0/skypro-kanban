import { Route, Routes } from "react-router-dom";
import { paths } from "../src/lib/const";
import PrivateRoute from "../src/components/PrivateRoute/PrivateRoute";
import MainPage from "../src/pages/MainPage";
import RegisterPage from "../src/pages/RegisterPage";
import ExitPage from "../src/pages/ExitPage";
import LoginPage from "../src/pages/LoginPage";
import CardPage from "../src/pages/CardPage";
import NewCardPage from "../src/pages/NewCardPage";
import NotFoundPage from "../src/pages/NotFoundPage";
// import EditCardPage from "../src/pages/EditPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route path={paths.EXIT} element={<ExitPage />} />
            <Route path={paths.CARD} element={<CardPage />} />
            <Route path={paths.NEWCARD} element={<NewCardPage />} />
            {/* <Route path={paths.EDIT} element={<EditCardPage />} /> */}
          </Route>
        </Route>

        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
