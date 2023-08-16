import { TOKEN_KEY } from "src/constants";
import { TokenData } from "src/interfaces/token";

export function getToken(): TokenData | null {
  const tokenData = JSON.parse(localStorage.getItem(TOKEN_KEY) ?? "{}");
  return tokenData ?? null;
}

export function setToken(tokenData: TokenData): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenData));
}
