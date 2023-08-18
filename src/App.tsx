import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { AuthUserProvider } from "./contexts/AuthUserContext";
import { ModalProvider } from "./contexts/ModalContext";
import useQueryClientState from "./hooks/useQueryClientState";
import routes from "./routes";

function App() {
  const queryClient = useQueryClientState();
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthUserProvider>
          <RouterProvider router={routes} />
        </AuthUserProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
