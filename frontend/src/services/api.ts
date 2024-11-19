import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
interface Category {
  id: string;
  name: string;
}
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("x-access-token");
    if (token) {
      config.headers["x-access-token"] = token; // Attach the token to the request headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
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
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get("/admin/category");
    console.log("RESPONSE =================== ", response.data.categories);
    if (response.data && Array.isArray(response.data.categories)) {
      return response.data.categories;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

export const createCategory = async (): Promise<[Category]> => {
  const response = await api.post("/admin/category");
  return response.data;
};
