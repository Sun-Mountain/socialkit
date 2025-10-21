'use client';

import { FooterLinks } from "@/content/Footer";
import { isTablet } from "@/helpers";

export const Footer = () => {
  if (isTablet()) {
    return null;
  }

  return (
    <footer>
      <FooterLinks location="footer" />
    </footer>
  );
}