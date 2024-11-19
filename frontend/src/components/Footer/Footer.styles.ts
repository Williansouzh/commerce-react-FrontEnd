import { styled } from "styled-components";

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Newsletter = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
`;

export const NewsletterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
