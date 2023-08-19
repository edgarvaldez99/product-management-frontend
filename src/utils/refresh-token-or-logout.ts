import { redirect } from "react-router-dom";
import AuthService from "src/services/auth.service";
import { getToken } from "./token";

export function refreshTokenOrLogout() {
  const tokenData = getToken();
  if (tokenData) {
    if (tokenData.refresh) {
      AuthService.refreshToken({
        refresh: tokenData.refresh,
      });
    }
  } else {
    AuthService.logout();
    return redirect("/login");
  }
}
