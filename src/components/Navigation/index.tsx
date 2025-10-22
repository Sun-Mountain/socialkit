'use client';

import { useSession } from "next-auth/react";
import { isMobile, isTablet } from "@/helpers";
import { FooterLinks } from "@/content/Footer";
import { MainNavLinks } from "@/content/Links/MainNav";

export const Navigation = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const mobile = isMobile();
  const tablet = isTablet();

  if (!mobile) {
    return (
      <nav>
        <MainNavLinks isAuthenticated={isAuthenticated} />
        {tablet && <FooterLinks location="navigation" />}
      </nav>
    )
  }
}