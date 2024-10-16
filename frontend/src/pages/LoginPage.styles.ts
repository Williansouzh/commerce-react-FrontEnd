import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const LoginForm = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;
