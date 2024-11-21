"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, Filter, ChevronDown, SearchIcon, Section } from "lucide-react";
import { api, getAllProducts, getCategories } from "../../services/api";
import {
  Title,
  FilterContainer,
  SearchContainer,
  Input,
  DropdownMenu,
  Button,
  DropdownContent,
  DropdownItem,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductCategory,
  ProductDetails,
  ProductPrice,
  AddToCartButton,
  NoProductsMessage,
} from "./ProductsPage.styles";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}
interface Category {
  id: string;
  name: string;
}

export default function ProductsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProducst = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (err) {
        setError("Failed to fetch categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProducst();
  }, []);

  const filteredProducts = products
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCategory === "All" || product.category === selectedCategory)
      )
    : [];

  const allCategories = [
    "All",
    ...(categories ? categories.map((category) => category.name) : []),
  ];

  return (
    <Section>
      <Title>Our Products</Title>

      <FilterContainer>
        <SearchContainer>
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon size={20} />
        </SearchContainer>

        <DropdownMenu>
          <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Filter size={16} style={{ marginRight: "0.5rem" }} />
            Filter by: {selectedCategory}
            <ChevronDown size={16} style={{ marginLeft: "0.5rem" }} />
          </Button>
          {isDropdownOpen && (
            <DropdownContent>
              {allCategories.map((category) => (
                <DropdownItem
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </DropdownItem>
              ))}
            </DropdownContent>
          )}
        </DropdownMenu>
      </FilterContainer>

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductDetails>
                <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
                <AddToCartButton>Add to Cart</AddToCartButton>
              </ProductDetails>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      {filteredProducts.length === 0 && (
        <NoProductsMessage>
          No products found. Try adjusting your search or filter.
        </NoProductsMessage>
      )}
    </Section>
  );
}
