import { MainFooterLinks } from "./Links";

const Footer = () => {
  return (
    <footer>
      <MainFooterLinks />
      <p>&copy; {new Date().getFullYear()} SocialKit. All rights reserved.</p>
    </footer>
  );
}

export default Footer;