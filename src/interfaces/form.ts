import { FormikProps } from "formik";

export interface GenericFormProps<T> {
  formik: FormikProps<T>;
  loading?: boolean;
}

export interface GenericBankFormProps<T> {
  formik: FormikProps<T>;
  loading?: boolean;
  isCreate?: boolean;
}
