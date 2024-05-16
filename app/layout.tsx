
import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";



export const metadata: Metadata = {
  title: "Sketch Together",
  description: "A game to play together, just you and your special someone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className="bg-[#F1F1F1]">{children}</body>
      </html>
    </Providers>
  );
}
