import Snackbar from "@mui/material/Snackbar";
import { PropsWithChildren, createContext, useState } from "react";

type SetOpenSnackbarProps = { message: string; isError: boolean };

interface SnackbarContextType {
  setOpenSnackbar: ({ message, isError }: SetOpenSnackbarProps) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
   
  setOpenSnackbar: () => {},
});

export function SnackbarProvider({ children }: PropsWithChildren) {
  const [snackbar, setSnackbar] = useState<SetOpenSnackbarProps>({
    message: "",
    isError: false,
  });
  const isOpen = snackbar.message !== "";

  const setOpenSnackbar = ({ message = "", isError = false } = {}) => {
    setSnackbar({ message, isError });
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
            backgroundColor: snackbar.isError ? "#f44336" : "#4caf50",
          },
        }}
      />
    </SnackbarContext.Provider>
  );
}
