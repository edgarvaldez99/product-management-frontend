 
import { PropsWithChildren, createContext, useState } from "react";
import { User } from "src/interfaces/user";
import AuthService from "src/services/auth.service";
import { getAuthenticatedUser } from "src/utils/authenticated-user";

interface AuthUserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthUserContext = createContext<AuthUserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthUserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(getAuthenticatedUser());

  const logout = () => {
    setUser(null);
    AuthService.logout();
  };
  const login = (user: User) => setUser(user);

  return (
    <AuthUserContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthUserContext.Provider>
  );
}
