import { ProductStatus } from "src/enums/product-status.enum";
import * as Yup from "yup";

const categorySchema = Yup.object().shape({
  id: Yup.number().required("La categoría es requerida"),
  name: Yup.string(),
});

const imageSchema = Yup.object().shape({
  id: Yup.number(),
  photo: Yup.string().required("La foto es requerida"),
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  status: Yup.mixed().oneOf([ProductStatus.ACTIVE, ProductStatus.INACTIVE]),
  categories: Yup.array(categorySchema),
  images: Yup.array(imageSchema),
});

export const initialValues = {
  name: "",
  status: ProductStatus.INACTIVE,
  categories: [],
  images: [],
};

export default validationSchema;
