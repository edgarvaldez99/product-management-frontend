import { ProductStatus } from "src/enums/product-status.enum";
import { Category } from "./category";
import { Image } from "./image";

export interface ProductFormData {
  name: string;
  status: ProductStatus;
  categories: Category[];
  images: Image[];
}

export interface Product extends ProductFormData {
  id: number;
}
