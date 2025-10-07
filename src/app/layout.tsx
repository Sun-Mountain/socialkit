import type { Metadata } from "next";

import Navigation from "@/components/Navigation/Main";
import Footer from "@/components/Footer";

import "@styles/global.scss";

export const metadata: Metadata = {
  title: "Social Kit App",
  description: "A social media kit application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
