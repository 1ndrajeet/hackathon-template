import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Hackathon Starter — Next.js & FastAPI",
  description:
    "A clean, production-minded starter template featuring Next.js App Router, Tailwind CSS, shadcn/ui, and FastAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("min-h-full", geistSans.variable, geistMono.variable)}>
      <body className="bg-background text-foreground selection:bg-muted min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
