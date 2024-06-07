import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: [] });

export async function generateMetadata(): Promise<Metadata> {
  const description = "▲ The triangle company";
  const title = "vercel.lol";
  return {
    title,
    description,
    openGraph: {
      images: ["https://vercel.lol/real-og.png"],
      description,
      title,
      type: "website",
    },
    twitter: {
      images: ["https://vercel.lol/real-og.png"],
      title,
      description,
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="vercel-toolbar-position" content="top center" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
