import {
  FooterColumn,
  FooterLink,
  Newsletter,
  NewsletterButton,
  NewsletterInput,
  Footer,
} from "./Footer.styles";

export default function FooterComponnet() {
  return (
    <Footer>
      <FooterColumn>
        <h4>Quick Links</h4>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
      </FooterColumn>
      <FooterColumn>
        <h4>Follow Us</h4>
        <FooterLink href="#">Facebook</FooterLink>
        <FooterLink href="#">Twitter</FooterLink>
        <FooterLink href="#">Instagram</FooterLink>
      </FooterColumn>
      <Newsletter>
        <NewsletterInput type="email" placeholder="Enter your email" />
        <NewsletterButton>Subscribe</NewsletterButton>
      </Newsletter>
    </Footer>
  );
}
