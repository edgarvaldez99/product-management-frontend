import Field from "./Field";
import { FieldProps } from "./form.interface";

type EmailFieldProps<T> = Omit<FieldProps<T>, "name"> & { name?: string };

export default function EmailField<T>({
  name = "email",
  ...props
}: EmailFieldProps<T>) {
  return <Field label="Email" name={name} autoComplete="email" {...props} />;
}
