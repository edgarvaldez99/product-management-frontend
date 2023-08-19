import { User } from "src/interfaces/user";

export function getUserLabel(user: User) {
  const fullName = `${user.firstName} ${user.lastName}`;
  return fullName.length < 10 ? fullName : user.username;
}
