import { RouterProvider } from "react-router-dom";
import AuthUserProvider from "./contexts/AuthUserContext";
import routes from "./routes";

function App() {
  return (
    <AuthUserProvider>
      <RouterProvider router={routes} />
    </AuthUserProvider>
  );
}

export default App;
