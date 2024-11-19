import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroButton,
} from "./HeroSection.styles";

export default function HeroSectionComponent() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Summer Sale Up to 50% Off</HeroTitle>
        <HeroButton>Shop Now</HeroButton>
      </HeroContent>
    </HeroSection>
  );
}
