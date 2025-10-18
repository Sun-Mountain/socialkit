'use client';

import { isMobile, isTablet } from "@/helpers";
import { FooterLinks } from "@/content/Footer";

export const Navigation = () => {
  const tablet = isTablet();
  console.log('tablet:', tablet);


  if (!isMobile()) {
    return (
      <nav>
        <div>
          nav
        </div>
        {tablet && (
          <>
            <FooterLinks />
          </>
        )}
      </nav>
    )
  }
}