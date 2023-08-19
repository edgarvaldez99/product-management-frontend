import { Category } from "src/interfaces/category";
import { SignalRequest } from "src/interfaces/request";
import axios from "./axios";

const endpoint = "/categories";

function getAllList({ signal }: SignalRequest): Promise<Category[]> {
  return axios.get<undefined, Category[]>(`${endpoint}/`, {
    data: {},
    signal,
  });
}

const CategoryService = {
  getAllList,
};

export default CategoryService;
