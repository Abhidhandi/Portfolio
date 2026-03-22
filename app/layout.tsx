import "./globals.css";
import type { Metadata } from "next";
import ClientWrapper from "./components/ClientWrapper";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// TODO: Replace with your actual deployed Vercel URL after deployment
const SITE_URL = "https://portfolio-eight-tau-71.vercel.app"

export const metadata: Metadata = {
  title: "Abhijot Singh – Frontend & AI Developer",
  description: "Portfolio of Abhijot Singh – building AI-powered apps and modern web experiences.",
  openGraph: {
    title: "Abhijot Singh – Frontend & AI Developer",
    description: "Portfolio of Abhijot Singh – building AI-powered apps and modern web experiences.",
    url: SITE_URL,
    siteName: "Abhijot Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} dark`}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}