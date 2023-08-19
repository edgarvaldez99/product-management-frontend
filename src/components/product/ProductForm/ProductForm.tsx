import Field from "src/components/form/Field";
import Form from "src/components/form/Form";
import SubmitButton from "src/components/form/SubmitButton";
import { ProductFormData } from "src/interfaces/product";
import { GenericFormProps } from "src/interfaces/form";
import CategoryAutocompleteField from "src/components/form/CategoryAutocompleteField";
import ProductStatusField from "src/components/form/ProductStatusField";
import ProductImagesField from "src/components/form/ProductImagesField";

export default function ProductForm({
  formik,
  loading,
}: GenericFormProps<ProductFormData>) {
  return (
    <Form formik={formik}>
      <Field label="Nombre" name="name" formik={formik} />
      <ProductStatusField formik={formik} />
      <CategoryAutocompleteField name="categories" formik={formik} />
      <ProductImagesField formik={formik} />
      <SubmitButton loading={loading}>Guardar</SubmitButton>
    </Form>
  );
}
