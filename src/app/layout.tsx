import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sensei Admin Panel",
  description: "Admin CMS for Sensei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
