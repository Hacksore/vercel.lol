import { Metadata } from "next";
import "./globals.css";

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
      card: "summary_large_image"
    } 
  };
}

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
