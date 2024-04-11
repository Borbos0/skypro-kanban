import React from "react";
import SignIn from "../components/Auth/SignIn";

const LoginPage = ({ setIsAuth }) => {
  return <SignIn setIsAuth={setIsAuth} />;
};

export default LoginPage;
