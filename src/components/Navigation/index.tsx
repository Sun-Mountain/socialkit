'use client';

import { useSession } from "next-auth/react";
import { isMobile } from "@/helpers";
import { FooterLinks } from "@/content/Footer";
import { MainNavLinks } from "@/content/Links/MainNav";

export const Navigation = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const mobile = isMobile();

  if (!isMobile()) {
    return (
      <nav>
        <MainNavLinks isAuthenticated={isAuthenticated} />
        {mobile && <FooterLinks location="navigation" />}
      </nav>
    )
  }
}