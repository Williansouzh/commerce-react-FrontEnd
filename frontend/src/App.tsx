// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import HomePage from "./pages/HomePage/HomePage";
import ProductsSection from "./pages/Products/ProductsPage";
import LayoutPage from "./components/Layoult/Layout";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <LayoutPage>
                  <HomePage />
                </LayoutPage>
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <LayoutPage>
                  <ProductsSection />
                </LayoutPage>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
