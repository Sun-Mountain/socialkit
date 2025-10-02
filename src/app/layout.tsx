import type { Metadata } from "next";
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
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
