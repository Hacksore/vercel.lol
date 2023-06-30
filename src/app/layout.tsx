import "./globals.css";

export const metadata = {
  title: "vercel.lol",
  description: "Triangle DVD Screensaver",
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
