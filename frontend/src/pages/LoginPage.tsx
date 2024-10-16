// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
} from "./LoginPage.styles";

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
