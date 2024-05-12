import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/hooks/useUser";

function PrivateRoute() {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
