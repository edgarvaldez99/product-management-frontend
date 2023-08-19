import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  message: string;
  closeText?: string;
  successText?: string;
  onClose?: () => void;
  onSuccess?: () => void;
};

export default function ConfirmDialog({
  open,
  title,
  message,
  closeText = "Cancelar",
  successText = "Aceptar",
  onClose,
  onSuccess,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{closeText}</Button>
        <Button onClick={onSuccess} autoFocus>
          {successText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
