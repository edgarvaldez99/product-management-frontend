import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/layout/Layout";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import { goToLoginIfNotAuthorized } from "src/utils/go-to-login-if-not-authorized";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: goToLoginIfNotAuthorized,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routes;
