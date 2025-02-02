import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Coming_Soon } from 'next/font/google'
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Load all available weights
  variable: '--font-jakarta', // Define a CSS variab;le
});
const comingSoon = Coming_Soon({
  subsets: ['latin'],
  weight: ['400'], // Load all available weights
  variable: '--font-comingSoon', // Define a CSS variab;le
});

export const metadata: Metadata = {
  title: "Task Management",
  description: "Task Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${comingSoon.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
