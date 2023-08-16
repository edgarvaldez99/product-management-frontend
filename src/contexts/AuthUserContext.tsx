import { createContext, useState, ReactNode } from "react";
import { User } from "src/interfaces/user";

interface AuthUserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const AuthUserContext = createContext<AuthUserContextProps>({
  user: null,
   
  setUser: () => {},
   
  logout: () => {},
});

export default function AuthUserProvider({
  children,
}: {
  children: ReactNode;
}) {
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
