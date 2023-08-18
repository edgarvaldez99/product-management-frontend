import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Form from "src/components/form/Form";
import PasswordField from "src/components/form/PasswordField";
import SubmitButton from "src/components/form/SubmitButton";
import UsernameField from "src/components/form/UsernameField";
import { LoginRequest } from "src/interfaces/auth";
import { GenericFormProps } from "src/interfaces/form";

export default function LoginForm({
  formik,
  loading,
}: GenericFormProps<LoginRequest>) {
  return (
    <Form formik={formik}>
      <UsernameField
        required
        autoFocus
        formik={formik}
        style={{ width: "100%" }}
      />
      <PasswordField required formik={formik} style={{ width: "100%" }} />
      <SubmitButton loading={loading}>Iniciar Sesión</SubmitButton>
      <Link to="/signup">
        <Button variant="contained" fullWidth>Crear Cuenta</Button>
      </Link>
    </Form>
  );
}
