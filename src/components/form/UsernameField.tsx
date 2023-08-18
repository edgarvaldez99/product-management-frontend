import Field from "./Field";
import { FieldProps } from "./form.interface";

type UsernameFieldProps<T> = Omit<FieldProps<T>, "name"> & { name?: string };

export default function UsernameField<T>({
  name = "username",
  ...props
}: UsernameFieldProps<T>) {
  return <Field label="Username" name={name} autoComplete="username" {...props} />;
}
