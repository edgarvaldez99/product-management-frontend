/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from "@mui/material/TextField";
import { FieldProps } from "./form.interface";

export default function Field<T>({ formik, name, ...props }: FieldProps<T>) {
  const value = (formik.values as any)[name] ?? undefined;
  const error = (formik.errors as any)[name];
  return (
    <TextField
      id={name}
      fullWidth
      name={name}
      error={!!error}
      margin="normal"
      value={value}
      onChange={formik.handleChange}
      helperText={error}
      {...props}
    />
  );
}
