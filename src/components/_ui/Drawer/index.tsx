import { ReactNode } from "react";
import { Drawer as UIDrawer } from "@mui/material";
import { Button } from "@/components/_ui/Button";
import { Close } from "@mui/icons-material";

interface DrawerProps {
  children: ReactNode;
  drawerOpen: boolean;
  ariaLabel: string;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  toggleDrawer?: () => void;
}

export const Drawer = ({
  children,
  ariaLabel,
  drawerOpen = false,
  anchor = 'right',
  className = '',
  toggleDrawer
}: DrawerProps) => {
  return (
    <UIDrawer open={drawerOpen} onClose={toggleDrawer} anchor={anchor}>
      <div className={`drawer-content ${className}`} aria-label={ariaLabel}>
        {toggleDrawer && (
          <div className="drawer-btn-container">
            <Button buttonAction={toggleDrawer} className="icon">
              <Close />
            </Button>
          </div>
        )}
        {children}
      </div>
    </UIDrawer>
  );
};
