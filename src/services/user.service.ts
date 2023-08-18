/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListRequest } from "src/interfaces/request";
import { User,  } from "src/interfaces/user";
import axios from "./axios";

const endpoint = "/users/";

function getUsers({ params }: ListRequest): Promise<User[]> {
  return axios.get<any, User[]>(endpoint, {
    data: {},
    params,
  });
}

const UserService = {
  getUsers,
};

export default UserService;
