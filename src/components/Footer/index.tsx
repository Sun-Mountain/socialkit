'use client';

import Link from "next/link";
import { isMobile } from "@/helpers";

export const Footer = () => {
  if (isMobile()) {
    return null;
  }

  return (
    <footer>
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
    </footer>
  );
}