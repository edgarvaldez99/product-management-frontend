import { useMutation, useQueryClient } from "@tanstack/react-query";
import FormLayout from "src/components/form/FormLayout";
import { PRODUCT_QUERY_KEY } from "src/constants";
import { useModal } from "src/hooks/contexts";
import { Product, ProductFormData } from "src/interfaces/product";
import ArchivService from "src/services/product.service";
import ProductForm from "./ProductForm/ProductForm";
import useProductForm from "./ProductForm/useProductForm";

export default function ProductCreate() {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const mutation = useMutation<Product, unknown, ProductFormData>({
    mutationFn: (formData) => ArchivService.create(formData),
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries([PRODUCT_QUERY_KEY]);
    },
  });
  const formik = useProductForm({
    onSubmit: mutation.mutate,
  });

  return (
    <FormLayout title="Crear Producto">
      <ProductForm formik={formik}></ProductForm>
    </FormLayout>
  );
}
