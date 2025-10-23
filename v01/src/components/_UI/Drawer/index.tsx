import { Drawer as DrawerUI } from "@mui/material";
import { ReactNode } from "react";

interface DrawerProps {
  children: ReactNode;
}

export const Drawer = ({ children }: DrawerProps) => {
  return (
    <DrawerUI>
      {children}
    </DrawerUI>
  );
}