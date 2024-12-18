import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from '../context/ThemeProvider';

export const metadata: Metadata = {
  title: "Portfolio Bruno Rodrigues",
  description: "Portfolio Bruno Rodrigues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
