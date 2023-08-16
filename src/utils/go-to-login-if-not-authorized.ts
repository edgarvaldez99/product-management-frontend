import { LoaderFunctionArgs } from "react-router-dom";
import { goToHomeWhenIsRoot } from "./go-to-home-when-is-root";

export async function goToLoginIfNotAuthorized(args: LoaderFunctionArgs) {
  const { request } = args;
  if (request.url === "/login") {
    return null;
  }
  return goToHomeWhenIsRoot(args);
}
