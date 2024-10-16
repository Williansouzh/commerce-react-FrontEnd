import React, { createContext, useState, useContext, ReactNode } from "react";
import { login as apiLogin } from "../services/api";

interface AuthContextType {
  user: { id: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  const login = async (email: string, password: string) => {
    const data = await apiLogin(email, password);
    setUser({ id: data.user.id, email: data.user.email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
