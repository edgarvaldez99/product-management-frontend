import { createBrowserRouter } from "react-router-dom";
import Layout from "src/components/layout/Layout";
import Login from "src/pages/Login";
import ProductList from "src/pages/ProductList";
import SignUp from "src/pages/SignUp";
import UserList from "src/pages/UserList";
import { goToLoginIfNotAuthorized } from "src/utils/go-to-login-if-not-authorized";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: goToLoginIfNotAuthorized,
    children: [
      {
        path: "product",
        element: <ProductList />,
      },
      {
        path: "user",
        element: <UserList />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default routes;
