import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import {
  PageContainer,
  LoginBox,
  Title,
  Subtitle,
  InputGroup,
  Input,
  Icon,
  Footer,
} from "./LoginPage.styles";
import { Button } from "../../components/Button/Button";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Attempting login with:", {
        email,
        password,
        confirmPassword,
      });
      const user = await login(email, password, confirmPassword);

      if (user && user.token) {
        console.log("Login successful, received token:", user.token);
        localStorage.setItem("token", user.token);
        navigate("/home");
      } else {
        console.error("Login failed, no token received:", user);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <PageContainer>
      <LoginBox>
        <Title>Welcome Back</Title>
        <Subtitle>Log in to your account</Subtitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Icon>
              <FaUser />
            </Icon>
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Icon>
              <FaLock />
            </Icon>
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Icon>
              <FaLock />
            </Icon>
          </InputGroup>
          <Button variant="wide" type="submit">
            Login
          </Button>
        </form>
        <Footer>
          Don't have an account? <a href="/register">Sign up</a>
        </Footer>
      </LoginBox>
    </PageContainer>
  );
}
