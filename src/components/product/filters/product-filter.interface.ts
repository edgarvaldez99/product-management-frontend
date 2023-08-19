import { ProductStatus } from "src/enums/product-status.enum";
import { Category } from "src/interfaces/category";

export interface ProductFilterFormData {
  name: string;
  status: ProductStatus;
  categories?: Category[];
}

export interface ProductFilterProps {
  filters: ProductFilterFormData;
  setFilters: (event: ProductFilterRequest) => void;
}

export interface ProductFilterRequest {
  name?: string;
  status?: string;
  categories?: string;
}
