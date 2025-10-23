import type { Metadata } from "next";

import "@/style/global.scss";

import Provider from "@/components/_Provider";
import { Navigation } from "@/components/Navigation";
import { MainHeader } from "@/components/Navigation/MainHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Social Kit",
  description: "A social media app to Keep In Touch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Navigation />
          <main>
            <MainHeader />
            <div id="main-content">
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
