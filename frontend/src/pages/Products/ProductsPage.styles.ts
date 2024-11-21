import { styled } from "styled-components";

import { Search, Filter, ChevronDown } from "lucide-react";
export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 640px) {
    width: 16rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  background-color: white;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f7fafc;
  }

  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const DropdownMenu = styled.div`
  position: relative;
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

export const DropdownItem = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  color: #4a5568;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f7fafc;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ProductCategory = styled.p`
  color: #718096;
  margin-bottom: 0.5rem;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const AddToCartButton = styled(Button)`
  background-color: #4299e1;
  color: white;

  &:hover {
    background-color: #3182ce;
  }
`;

export const NoProductsMessage = styled.p`
  text-align: center;
  color: #a0aec0;
  margin-top: 2rem;
`;
