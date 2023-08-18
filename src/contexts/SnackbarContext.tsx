import Snackbar from "@mui/material/Snackbar";
import { PropsWithChildren, createContext, useState } from "react";

interface SnackbarContextType {
  setOpenSnackbar: (message?: string, type?: string) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
  setOpenSnackbar: () => {},
});

export function SnackbarProvider({ children }: PropsWithChildren) {
  const [snackbar, setSnackbar] = useState({
    message: "",
    type: "success",
  });
  const isOpen = snackbar.message !== "";

  const setOpenSnackbar = (message = "", type = "success") => {
    setSnackbar({ message, type });
  };

  return (
    <SnackbarContext.Provider value={{ setOpenSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isOpen}
        onClose={() => setOpenSnackbar()}
        message={snackbar.message}
        key="topcenter"
        autoHideDuration={6000}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: snackbar.type === "error" ? "#f44336" : "#4caf50",
          },
        }}
      />
    </SnackbarContext.Provider>
  );
}
