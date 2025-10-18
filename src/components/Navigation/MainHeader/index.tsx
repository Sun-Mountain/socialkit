'use client';

import { isMobile } from "@/helpers/index";
import { Button } from "@/components/_UI/Button";

import { Notifications, Menu, Pets, Search } from "@mui/icons-material";

interface MainHeaderProps {
  isAuthenticated?: boolean;
}

export const MainHeader = ({ isAuthenticated }: MainHeaderProps) => {
  const mobile = isMobile();

  return (
    <header id="main-nav-header">
      <div className="icon-container">
        {mobile && (
          <Button>
            <Menu />
          </Button>
        )}
      </div>
      <div className="site-logo-container">
        <Pets />
      </div>
      <div className="icon-container">
        {isAuthenticated && (
        <Button>
          <Notifications />
        </Button>
        )}
      </div>
    </header>
  )
}