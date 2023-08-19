import { Autocomplete, TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";
import { ProductStatus } from "src/enums/product-status.enum";

export type FieldProps<T> = TextFieldProps & {
  name?: string;
  formik: FormikProps<T>;
};

export default function ProductStatusField<T>({
  name = "status",
  formik,
}: FieldProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value = (formik.values as any)[name] || null;
  const data = [ProductStatus.ACTIVE, ProductStatus.INACTIVE];
  return (
    <Autocomplete
      disablePortal
      options={data}
      value={value}
      getOptionLabel={(option) => option}
      isOptionEqualToValue={(option, value) => option === value}
      onChange={(_, status) => formik.setFieldValue(name, status)}
      style={{ display: "inline-flex, width: 100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Estado"
          sx={{ width: "100% !important" }}
        />
      )}
    />
  );
}
