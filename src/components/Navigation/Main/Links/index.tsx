import { useState } from "react";
import Link from "next/link";
import { AccountCircle, Home, Logout, Settings } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { Button } from "@/components/_ui/Button";

interface MainNavProps {
  isAuthenticated: boolean;
  isMobile: boolean;
  handleSignOut: () => void;
}

export const MainNavLinks = ({
  isAuthenticated = false,
  isMobile = false,
  handleSignOut
}: MainNavProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <ul>
      <li>
        <Link href={isAuthenticated ? "/dashboard" : "/"}>
          <Home /> {isMobile ? 'Home' : null}
        </Link>
      </li>
      {isAuthenticated ? (
        <>
          {!isMobile ? (
            <>
              <li>
                <Button
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  buttonAction={handleClick}
                >
                  <AccountCircle />
                </Button>
              </li>
              <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} href="/account">
                  <Settings fontSize="small" style={{ marginRight: '8px' }} />
                  Settings
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); handleSignOut(); }}>
                  <Logout fontSize="small" style={{ marginRight: '8px' }} />
                  Sign Out
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <li>
                <Link href="/account">
                <Settings fontSize="small" style={{ marginRight: '8px' }} />
                  Settings
                </Link>
              </li>
              <li>
                <Button buttonAction={handleSignOut}>Sign Out</Button>
              </li>
            </>
          )}
        </>
      ) : (
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
      )}
    </ul>
  )
}