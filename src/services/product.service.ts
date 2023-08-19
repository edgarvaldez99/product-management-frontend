import { Product, ProductFormData } from "src/interfaces/product";
import { ListRequest } from "src/interfaces/request";
import axios from "./axios";

const endpoint = "/products";

function getList({ params, signal }: ListRequest): Promise<Product[]> {
  return axios.get<undefined, Product[]>(`${endpoint}/`, {
    data: {},
    params,
    signal,
  });
}

function getUnregisteredList({
  params,
  signal,
}: ListRequest): Promise<Product[]> {
  return axios.get<undefined, Product[]>(`${endpoint}/unregistered/`, {
    data: {},
    params,
    signal,
  });
}

function getById(id: number): Promise<Product> {
  return axios.get<undefined, Product>(`${endpoint}/${id}/`, { data: {} });
}

function create(formData: ProductFormData): Promise<Product> {
  return axios.post<ProductFormData, Product>(`${endpoint}/`, formData);
}

function update(id: number, formData: ProductFormData): Promise<Product> {
  return axios.put<ProductFormData, Product>(`${endpoint}/${id}/`, formData);
}

function eliminar(id: number): Promise<Product> {
  return axios.delete<undefined, Product>(`${endpoint}/${id}/`);
}

const ProductService = {
  getList,
  getUnregisteredList,
  getById,
  update,
  create,
  delete: eliminar,
};

export default ProductService;
