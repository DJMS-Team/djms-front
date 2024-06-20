import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {

  title: "DMajor Store",
  description: "Were you'll find everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
