'use client';

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Login, Pets } from "@mui/icons-material";
import { Button } from "@/components/_ui/Button";
import { Drawer } from "@/components/_ui/Drawer";
import { MainNavLinks } from "./Links";

import { useWindowSize } from "@helpers/useWindowSize";
import { Main } from "next/document";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width && windowSize.width <= 768;

  const { data: session } = useSession();
  const isAuthenticated = !!session;

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav>
      nav
      {/* <div></div>
      <div id="site-logo">
        <Link href={isAuthenticated ? "/dashboard" : "/"}>
          <Pets />
        </Link>
      </div>
      <div className="nav-links-container">
        <MainNavLinks
          isAuthenticated={isAuthenticated}
          isMobile={!!isMobile}
          handleSignOut={handleSignOut}
        />
      </div> */}
    </nav>
  );
}

export default Navigation;