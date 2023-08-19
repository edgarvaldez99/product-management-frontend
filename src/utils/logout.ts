import { TOKEN_KEY, USER_KEY } from "src/constants";

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
