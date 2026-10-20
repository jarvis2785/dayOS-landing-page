import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DayOS — Your Personal Day Intelligence System",
  description:
    "Know your day load before it starts. DayOS analyzes your schedule, fits tasks into real free windows, and tells you honestly what can and can't happen today. Inspired by Whoop.",
  openGraph: {
    title: "DayOS — Whoop for Productivity",
    description:
      "Know your day load before it starts. DayOS analyzes your schedule, fits tasks into real free windows, and tells you honestly what can and can't happen today.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
