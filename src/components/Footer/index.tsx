'use client';

import { FooterLinks } from "@/content/Footer";
import { isMobile, isTablet } from "@/helpers";

export const Footer = () => {
  if (isTablet()) {
    return null;
  }

  return (
    <footer>
      <FooterLinks />
    </footer>
  );
}