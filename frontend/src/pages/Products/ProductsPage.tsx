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
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductCategory,
  ProductDetails,
  ProductPrice,
  AddToCartButton,
  NoProductsMessage,
  Section,
} from "./ProductsPage.styles";

export interface Product {
  id: number;
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
    // Fetch products and categories concurrently
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

  // Filter products based on search term and selected category
  const filteredProducts =
    products?.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" ||
          product.category.name === selectedCategory)
    ) || [];

  // Prepare categories for dropdown
  const allCategories = ["All", ...(categories?.map((cat) => cat.name) || [])];

  return (
    <Section>
      <Title>Our Products</Title>

      {/* Filter and Search */}
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

      {/* Product Grid */}
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductCategory>{product.category.name}</ProductCategory>
              <ProductDetails>
                <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
                <AddToCartButton>Add to Cart</AddToCartButton>
              </ProductDetails>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      {/* No Products Message */}
      {!loading && filteredProducts.length === 0 && (
        <NoProductsMessage>
          No products found. Try adjusting your search or filter.
        </NoProductsMessage>
      )}

      {/* Loading/Error State */}
      {loading && <NoProductsMessage>Loading products...</NoProductsMessage>}
      {error && <NoProductsMessage>{error}</NoProductsMessage>}
    </Section>
  );
}
