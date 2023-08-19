import { useAuthUserContext } from "./contexts";

export default function useIsUserLoggedIn() {
  const { user } = useAuthUserContext();
  return !!user;
}
