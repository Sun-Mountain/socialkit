'use client';

import Link from "next/link";
import { betweenMobileAndTablet } from "@/helpers";

interface FooterLinksProps {
  location: 'footer' | 'navigation' | 'main';
}

export const FooterLinks = ({ location }: FooterLinksProps) => {
  if (location === 'main' && !betweenMobileAndTablet()) {
    return null;
  }

  return (
    <div className={"footer-links" + ' ' + location}>
      <ul>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/tos">Terms of Service</Link>
        </li>
      </ul>
    </div>
  )
}