import { styled } from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
  &:visited {
    color: black;
  }
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
`;
