'use client';

import { useState } from "react";
import Button from "@/components/_ui/Button";
import { Drawer } from "@/components/_ui/Drawer";
import { Menu } from "@mui/icons-material";

import { useWindowSize } from "@helpers/useWindowSize";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const windowSize = useWindowSize();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav>
      <div className="nav-logo">
        <h1>Social Kit</h1>
      </div>
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
            Boop
          </Drawer>
        </>
    </nav>
  );
}

export default Navigation;