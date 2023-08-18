import { TextFieldProps } from "@mui/material/TextField";
import { FormikProps } from "formik";

export type FieldProps<T> = TextFieldProps & {
  name: string;
  formik: FormikProps<T>;
};
