"use client";

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
} from "./RegisterPage.styles";
import { Button } from "../../components/Button/Button";
import { register } from "../../services/api";

// Main component
export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password, confirmPassword, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageContainer>
      <LoginBox>
        <Title>Welcome</Title>
        <Subtitle>Fill the form to create an account.</Subtitle>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Icon>
              <FaUser />
            </Icon>
          </InputGroup>
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
          <Button variant="wide" onClick={() => console.log("Clicked!")}>
            Login
          </Button>
        </form>
        <Footer>
          Already has a account? <a href="/login">Sign in</a>
        </Footer>
      </LoginBox>
    </PageContainer>
  );
}
