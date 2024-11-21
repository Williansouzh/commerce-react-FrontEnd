import React from "react";
import { LayoutContainer, PageContent } from "./Layout.styles";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

const LayoutPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderComponent />
      <PageContent>{children}</PageContent>
      <FooterComponent />
    </LayoutContainer>
  );
};

export default LayoutPage;
