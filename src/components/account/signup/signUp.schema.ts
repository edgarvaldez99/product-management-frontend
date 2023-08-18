import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().required("El username es requerido"),
  firstName: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El apellido es requerido"),
  email: Yup.string()
    .email("El email es inválido")
    .required("El email es requerido"),
  password: Yup.string()
    .min(4, "La contraseña debe tener al menos 4 caracteres")
    .max(20, "La contraseña debe tener menos de 20 caracteres")
    .required("La contraseña es requerida"),
  passwordConfirmation: Yup.string().required("La confirmación de contraseña es requerida"),
});

export const signUpInitialValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default schema;
