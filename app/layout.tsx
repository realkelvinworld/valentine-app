import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const juniCode = localFont({
  src: [
    {
      path: "../public/Fonts/JuniCode/Junicode-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Fonts/JuniCode/Junicode.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-juniCode",
});

export const metadata: Metadata = {
  title: "Valentine 💌 | Send Some Love",
  description:
    "Create and send heartfelt valentine messages to someone special. Shoot your shot the cool way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${juniCode.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
