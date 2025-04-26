import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaid",
  // description: "Zaid is a startup founder, full-stack engineer, and ex-top 100 Clash of Clans player. Building products, raiding servers, and turning ideas into reality.",
  // keywords: [
  //   "Zaid",
  //   "Startup",
  //   "Engineer",
  //   "Full Stack",
  //   "Founder",
  //   "Clash of Clans",
  //   "Tech",
  //   "Developer",
  //   "Portfolio",
  //   "Product Builder"
  // ],
  // authors: [{ name: "Mohd Zaid", url: "https://yourdomain.com" }],
  // openGraph: {
  //   title: "Zaid | Startup Engineer, Builder & Ex-Clash of Clans Top 100",
  //   description: "Startup founder, full-stack engineer, and ex-top 100 Clash of Clans player. Building products, raiding servers, and turning ideas into reality.",
  //   url: "https://yourdomain.com",
  //   siteName: "Zaid Portfolio",
  //   images: [
  //     {
  //       url: "https://yourdomain.com/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Zaid Portfolio",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  //},
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Zaid | Startup Engineer, Builder & Ex-Clash of Clans Top 100",
  //   description: "Startup founder, full-stack engineer, and ex-top 100 Clash of Clans player. Building products, raiding servers, and turning ideas into reality.",
  //   images: ["https://yourdomain.com/og-image.png"],
  //   creator: "@okzaid",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
