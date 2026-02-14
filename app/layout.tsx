import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

// Font untuk Headlines (Vibes Web3/Tech)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "500", "700"],
});

// Font untuk Body text (Clean)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Ryzen | Creative Developer & 3D Artist",
  description:
    "Portfolio of Tegar Hardiansyah (0x5zen). CS Student, 3D Artist, and Web3 Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} bg-slate-950 text-white antialiased selection:bg-purple-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
