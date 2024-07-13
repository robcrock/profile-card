import type { Metadata } from "next";
import { Kumbh_Sans as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Profile Card",
  description:
    "Profile card component solution for the Frontend Mentor platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-custom min-h-screen font-sans font-normal antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
