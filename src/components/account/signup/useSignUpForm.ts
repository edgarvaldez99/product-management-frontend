import { useFormik } from "formik";
import { SignUpRequest } from "src/interfaces/auth";
import userFormSchema, { signUpInitialValues } from "./signUp.schema";

export default function useSignUpForm(
  onSubmit: (values: SignUpRequest) => void,
) {
  const formik = useFormik<SignUpRequest>({
    initialValues: signUpInitialValues,
    onSubmit,
    validationSchema: userFormSchema,
  });
  return formik;
}
