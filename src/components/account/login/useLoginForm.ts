import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginRequest } from "src/interfaces/auth";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("El username es requerido"),
  password: Yup.string()
    .min(4, "La contraseña debe tener al menos 4 caracteres")
    .max(20, "La contraseña debe tener menos de 20 caracteres")
    .required("La contraseña es requerida"),
});

export default function useLoginForm(
  onSubmit: (values: LoginRequest) => void,
) {
  const formik = useFormik<LoginRequest>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ username, password }) => {
      onSubmit({ username, password });
    },
    validationSchema: LoginSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  return formik;
}
