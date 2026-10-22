import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travis Burns — hireMe.tsx",
  description:
    "Frontend development and digital accessibility, with a designer’s eye and thirteen years of figuring things out. Knoxville, Tennessee. Open to fully remote roles.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
