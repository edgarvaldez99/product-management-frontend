import { FormikProps, useFormik } from "formik";
import { useEffect, useRef } from "react";
import { ProductFormData } from "src/interfaces/product";
import validationSchema, { initialValues } from "./formik.validation-schema";

type useProductFormProps = {
  initialValues?: ProductFormData;
  onSubmit: (values: ProductFormData) => void;
};

export default function useProductForm({
  initialValues: values,
  onSubmit,
}: useProductFormProps) {
  const formik = useFormik<ProductFormData>({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const formikRef = useRef<FormikProps<ProductFormData>>(formik);
  useEffect(() => {
    if (formikRef.current && values) {
      formikRef.current.setValues({
        name: values.name,
        status: values.status,
        categories: values.categories,
        images: values.images,
      });
    }
  }, [values]);
  return formik;
}
