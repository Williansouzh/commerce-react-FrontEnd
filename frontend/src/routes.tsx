import { useRoutes, Router } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage";

export const MainRoutes = () => {
  return useRoutes([{ path: "/login", element: <LoginPage /> }]);
};
