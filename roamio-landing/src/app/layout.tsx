import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roamio | Navigate Your Campus with Confidence",
  description: "Campus navigation, events, and more with Roamio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-league antialiased bg-white text-secondary">
        {children}
      </body>
    </html>
  );
}
