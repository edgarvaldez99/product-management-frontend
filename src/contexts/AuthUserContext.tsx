import { PropsWithChildren, createContext, useState } from "react";
import { User } from "src/interfaces/user";

interface AuthUserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const AuthUserContext = createContext<AuthUserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export function AuthUserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  function logout() {
    setUser(null);
  }

  return (
    <AuthUserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthUserContext.Provider>
  );
}
