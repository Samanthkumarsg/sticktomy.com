import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Load all available weights
  variable: '--font-jakarta', // Define a CSS variab;le
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
        className={`${plusJakarta.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
