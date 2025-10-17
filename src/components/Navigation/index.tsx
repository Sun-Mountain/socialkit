'use client';

import { isMobile } from "@/helpers";

export const Navigation = () => {
  if (!isMobile()) {
    return (
      <nav>
        nav
      </nav>
    )
  }
}