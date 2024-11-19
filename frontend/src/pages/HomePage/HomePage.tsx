import React from "react";
import styled from "styled-components";
import { ShoppingCart, Search, ChevronLeft, ChevronRight } from "lucide-react";
import FooterComponnet from "../../components/Footer/Footer";

// Styled Components
const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
`;

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

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Newsletter = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const NewsletterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Main Component
export default function Homepage() {
  return (
    <div>
      <Header>
        <Logo>E-Shop</Logo>
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Nav>
        <SearchBar placeholder="Search..." />
        <CartIcon>
          <ShoppingCart />
          <CartCount>3</CartCount>
        </CartIcon>
      </Header>

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
