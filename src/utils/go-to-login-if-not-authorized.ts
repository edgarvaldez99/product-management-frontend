import { refreshTokenOrLogout } from "./refresh-token-or-logout";
import { redirect } from "react-router-dom";
import { BASE_URL } from "src/env";

export async function goToLoginIfNotAuthorized({
  request,
}: {
  request: Request;
}) {
  if (request.url === "/login") {
    return null;
  }
  if (request.url === `${BASE_URL}/`) {
    return redirect("/product");
  }
  refreshTokenOrLogout();
  return null;
}
