import React from "react";
import styled from "styled-components";
import { ShoppingCart, Search, ChevronLeft, ChevronRight } from "lucide-react";
import FooterComponnet from "../../components/Footer/Footer";
import HeaderComponent from "../../components/Header/Header";
import HeroSectionComponent from "../../components/HeroSection/Herosection";
import { CategorySection } from "../../components/CategorySection/CategorySection.styles";
import CategorySectionComponent from "../../components/CategorySection/CategorySection";

export default function Homepage() {
  return (
    <div>
      <HeroSectionComponent />
      <CategorySectionComponent />
    </div>
  );
}
