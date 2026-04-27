import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "Next.js sales dashboard with Recharts",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
