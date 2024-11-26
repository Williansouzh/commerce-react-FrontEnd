import { styled } from "styled-components";
import { Button } from "../../pages/Products/ProductsPage.styles";

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
