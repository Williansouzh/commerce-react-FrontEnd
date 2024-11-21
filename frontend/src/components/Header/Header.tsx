import { ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Header,
  Logo,
  Nav,
  SearchBar,
  CartIcon,
  CartCount,
} from "./Header.styles";
import HeaderCart from "../Cart/Cart";
export default function HeaderComponent() {
  return (
    <Header>
      <Logo>E-Shop</Logo>
      <Nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </Nav>
      <SearchBar placeholder="Search..." />
      <HeaderCart />
    </Header>
  );
}
