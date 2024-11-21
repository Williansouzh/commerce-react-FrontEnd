import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { login as apiLogin } from "../services/api";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const isTokenValid = (token: string): boolean => {
    try {
      console.log("Checking token validity:", token);
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded token payload:", payload);
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  };

  useEffect(() => {
    console.log("Initial token from localStorage:", token);
    if (token && isTokenValid(token)) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Valid token found, setting user:", payload);
      setUser({ id: payload.userId, email: payload.email });
    } else {
      console.log("No valid token found, logging out...");
      logout();
    }
  }, [token]);

  const login = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    console.log("Login attempt with:", { email, password, confirmPassword });
    try {
      const data = await apiLogin(email, password, confirmPassword);
      console.log("API login response:", data);

      const token = data.token;
      console.log("Received token:", token);

      console.log(
        "Received token == localStorage token?:",
        token === localStorage.getItem("token")
      );
      localStorage.setItem("token", token);
      setToken(token);

      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded payload after login:", payload);
      setUser({ id: payload.userId, email: payload.email });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    console.log("Logging out...");
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
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
