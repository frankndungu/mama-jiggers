import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

// Fonts are configured in globals.css using CSS custom properties

export const metadata: Metadata = {
  title: "Mama Jiggers Foundation - Building Healthier Communities",
  description:
    "From removing jiggers to fighting for human rights, we're dedicated to creating lasting change in health, sanitation, and social justice for all.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
