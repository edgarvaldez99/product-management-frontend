import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EmailField from "src/components/form/EmailField";
import Field from "src/components/form/Field";
import Form from "src/components/form/Form";
import PasswordField from "src/components/form/PasswordField";
import SubmitButton from "src/components/form/SubmitButton";
import UsernameField from "src/components/form/UsernameField";
import { SignUpRequest } from "src/interfaces/auth";
import { GenericFormProps } from "src/interfaces/form";

export default function SignUpForm({
  formik,
  loading,
}: GenericFormProps<SignUpRequest>) {
  return (
    <Form formik={formik}>
      <UsernameField autoFocus required formik={formik} />
      <Field
        label="Nombre"
        name="firstName"
        formik={formik}
      />
      <Field
        label="Apellido"
        name="lastName"
        formik={formik}
      />
      <EmailField required formik={formik} />
      <PasswordField required formik={formik} />
      <PasswordField name="passwordConfirmation" required formik={formik} />
      <SubmitButton loading={loading}>Crear Cuenta</SubmitButton>
      <Link to="/login">
        <Button variant="contained" fullWidth>Iniciar Sesión</Button>
      </Link>
    </Form>
  );
}
