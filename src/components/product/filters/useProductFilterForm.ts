import { useFormik } from "formik";
import {
  ProductFilterFormData,
  ProductFilterProps,
  ProductFilterRequest,
} from "./product-filter.interface";

export default function useProductFilterForm({
  filters,
  setFilters,
}: ProductFilterProps) {
  const formik = useFormik<ProductFilterFormData>({
    initialValues: {
      name: filters?.name ?? "",
      status: filters?.status ?? "",
      categories: filters?.categories ?? [],
    },
    onSubmit: (formdata) => {
      const filter: ProductFilterRequest = {
        name: formdata.name,
        status: formdata.status,
      };
      if (formdata.categories && formdata.categories.map) {
        filter.categories = formdata.categories.map((c) => c.id).join(",");
      }
      setFilters(filter);
    },
  });
  return formik;
}
