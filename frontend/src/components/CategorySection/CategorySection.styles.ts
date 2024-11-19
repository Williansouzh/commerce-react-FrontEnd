import { styled } from "styled-components";

export const CategorySection = styled.section`
  padding: 2rem;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const CategoryCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CategoryTitle = styled.h3`
  padding: 1rem;
  text-align: center;
`;
