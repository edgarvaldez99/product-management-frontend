import { useContext } from "react";
import { AuthUserContext } from "src/contexts/AuthUserContext";
import { ModalContext } from "src/contexts/ModalContext";
import { SnackbarContext } from "src/contexts/SnackbarContext";

export const useAuthUserContext = () => useContext(AuthUserContext);

export const useModal = () => useContext(ModalContext);

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
}
