"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, Filter, ChevronDown, SearchIcon } from "lucide-react";
import { getAllProducts, getCategories } from "../../services/api";
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
  NoProductsMessage,
  Section,
} from "./ProductsPage.styles";
import ProductCard from "../../components/ProductsCard/ProductCard";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
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
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(`Error fetching data: ${err}`);
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    products?.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" ||
          product.category.name === selectedCategory)
    ) || [];

  const allCategories = ["All", ...(categories?.map((cat) => cat.name) || [])];

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
          <ProductCard product={product} />
        ))}
      </ProductGrid>
      {!loading && filteredProducts.length === 0 && (
        <NoProductsMessage>
          No products found. Try adjusting your search or filter.
        </NoProductsMessage>
      )}
      {loading && <NoProductsMessage>Loading products...</NoProductsMessage>}
      {error && <NoProductsMessage>{error}</NoProductsMessage>}
    </Section>
  );
}
