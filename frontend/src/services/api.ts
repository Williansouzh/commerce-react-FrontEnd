import axios from "axios";
import { AuthProvider } from "../contexts/AuthContext";
import { Product } from "../pages/Products/ProductsPage";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export interface CartProduct {
  productId: string;
  name: string;
  quantity: number;
  price: string;
}

export interface CartItem {
  id: string;
  userId: string;
  items: CartProduct[];
  totalPrice: string;
}
interface Category {
  id: string;
  name: string;
}
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
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    console.log("Request Headers: ", config.headers);
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
    if (response.data && Array.isArray(response.data.categories)) {
      return response.data.categories;
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    console.error("Error fetching categories", error);
    console.log("localstorage token: ", localStorage.getItem("token"));
    throw error;
  }
};

export const createCategory = async (): Promise<[Category]> => {
  const response = await api.post("/admin/category");
  return response.data;
};
export const getAllProducts = async (): Promise<[Product]> => {
  const response = await api.get("/products");
  return response.data;
};
export const getCart = async (): Promise<CartItem> => {
  const response = await api.get("/cart");
  return response.data;
};
export const addToCart = async (productId: string) => {
  const response = await api.post(`/cart/${productId}`, {
    productId,
  });
  console.log(productId);
  return response.data;
};
export const removeFromCart = async (productId: string) => {
  const response = await api.post(`/cart/${productId}`);
  return response.data;
};
