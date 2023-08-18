import Field from "./Field";
import { FieldProps } from "./form.interface";

export default function DateField<T>({ name, ...props }: FieldProps<T>) {
  return (
    <Field
      name={name}
      {...props}
      type="date"
      InputLabelProps={{ shrink: true }}
    />
  );
}
