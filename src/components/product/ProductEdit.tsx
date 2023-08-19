import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import FormLayout from "src/components/form/FormLayout";
import { PRODUCT_QUERY_KEY } from "src/constants";
import { useModal } from "src/hooks/contexts";
import { Product, ProductFormData } from "src/interfaces/product";
import ProductService from "src/services/product.service";
import ProductForm from "./ProductForm/ProductForm";
import useProductForm from "./ProductForm/useProductForm";

type ProductEditProps = {
  id: number;
};

export default function ProductEdit({
  id,
}: ProductEditProps) {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const mutation = useMutation<Product, unknown, ProductFormData>({
    mutationFn: (formData) => ProductService.update(id, formData),
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries([PRODUCT_QUERY_KEY]);
    },
  });

  const { data: product } = useQuery<Product>({
    queryKey: [PRODUCT_QUERY_KEY, id],
    queryFn: () => ProductService.getById(id),
  });

  const formik = useProductForm({
    initialValues: product,
    onSubmit: mutation.mutate,
  });
  return (
    <FormLayout title="Editar Producto">
      <ProductForm formik={formik}></ProductForm>
    </FormLayout>
  );
}
