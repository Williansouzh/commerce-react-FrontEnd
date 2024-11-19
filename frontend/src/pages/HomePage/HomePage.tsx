import React from "react";
import styled from "styled-components";
import { ShoppingCart, Search, ChevronLeft, ChevronRight } from "lucide-react";
import FooterComponnet from "../../components/Footer/Footer";
import HeaderComponent from "../../components/Header/Header";

// Styled Components

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background-image: url("/placeholder.svg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CategorySection = styled.section`
  padding: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const CategoryCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CategoryTitle = styled.h3`
  padding: 1rem;
  text-align: center;
`;

// Main Component
export default function Homepage() {
  return (
    <div>
      <HeaderComponent />
      <HeroSection>
        <HeroContent>
          <HeroTitle>Summer Sale Up to 50% Off</HeroTitle>
          <HeroButton>Shop Now</HeroButton>
        </HeroContent>
      </HeroSection>

      <CategorySection>
        <h2>Product Categories</h2>
        <CategoryGrid>
          {["Electronics", "Clothing", "Home & Garden", "Sports"].map(
            (category) => (
              <CategoryCard key={category}>
                <CategoryImage src="/placeholder.svg" alt={category} />
                <CategoryTitle>{category}</CategoryTitle>
              </CategoryCard>
            )
          )}
        </CategoryGrid>
      </CategorySection>

      <FooterComponnet />
    </div>
  );
}
