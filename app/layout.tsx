import type { Metadata } from "next";
import "./globals.css";



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
    <html lang="en">
      <body className="bg-[#F1F1F1]">{children}</body>
    </html>
  );
}
