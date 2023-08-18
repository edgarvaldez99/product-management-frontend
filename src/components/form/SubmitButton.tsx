import { CircularProgress } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

// Ejemplo de herencia de componentes

interface SubmitButtonProps extends ButtonProps {
  loading?: boolean;
}

export default function SubmitButton({
  children,
  loading = false,
  ...restOfProps // resto de los props que vienen de ButtonProps
}: SubmitButtonProps) {
  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        {...restOfProps} // Mapeo de props
        type="submit"
        fullWidth
        disabled={loading}
      >
        {loading ? <CircularProgress /> : children}
      </Button>
    </>
  );
}
