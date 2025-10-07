'use client';

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@mui/icons-material";
import { Button } from "@/components/_ui/Button";
import { Drawer } from "@/components/_ui/Drawer";
import { MainNavLinks } from "./Links";

import { useWindowSize } from "@helpers/useWindowSize";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const windowSize = useWindowSize();

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
      <div className="nav-logo">
        <h1>Social Kit</h1>
      </div>
        <>
          {(windowSize.width && windowSize.width > 768) ? (
            <MainNavLinks
              isAuthenticated={isAuthenticated}
              handleSignOut={handleSignOut} />
          ) : null}
          {(windowSize.width && windowSize.width <= 768) ? (
            <>
              <Button
                buttonAction={toggleNav}
                id="navigation-btn"
                className="icon"
                ariaLabel="Open navigation menu"
              >
                <Menu />
              </Button>
              <Drawer
                drawerOpen={isNavOpen}
                toggleDrawer={toggleNav}
                ariaLabel="Navigation Menu"
              >
                <MainNavLinks
                  isAuthenticated={isAuthenticated}
                  handleSignOut={handleSignOut} />
              </Drawer>
            </>
          ) : null}
        </>
    </nav>
  );
}

export default Navigation;