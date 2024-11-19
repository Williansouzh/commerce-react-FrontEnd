import { styled } from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background-image: url("https://img.pikbest.com/origin/10/13/52/01tpIkbEsTczm.jpg!w700wp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroButton = styled.button`
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
