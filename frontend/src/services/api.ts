import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
export const register = async (
  email: string,
  password: string,
  confirmPassword: string,
  name: string
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/register", {
    name,
    email,
    password,
    confirmPassword,
  });
  return response.data;
};
export const login = async (
  email: string,
  password: string,
  confirmPassword: string
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", {
    email,
    password,
    confirmPassword,
  });
  return response.data;
};
