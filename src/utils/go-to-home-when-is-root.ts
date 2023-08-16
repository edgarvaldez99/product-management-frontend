import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { BASE_URL } from "src/env";

export async function goToHomeWhenIsRoot({ request }: LoaderFunctionArgs) {
  if (request.url === `${BASE_URL}/`) {
    return redirect("/home");
  }
  return null;
}
