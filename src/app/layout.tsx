import { Metadata } from "next";
// add inter font from next
import { Inter } from "next/font/google";

import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: [] });

export async function generateMetadata(): Promise<Metadata> {
  const description = "▲ The triangle company";
  return {
    title: "vercel.lol",
    description,
    openGraph: {
      images: ["/og.png"],
      description,
      type: "website",
    },
    twitter: {
      images: ["/og.png"],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
