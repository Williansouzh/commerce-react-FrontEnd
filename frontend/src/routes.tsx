import { useRoutes, Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export const MainRoutes = () => {
  return useRoutes([{ path: "/login", element: <LoginPage /> }]);
  return useRoutes([{ path: "/register", element: <RegisterPage /> }]);
};
