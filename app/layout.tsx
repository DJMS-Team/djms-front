'use client'
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DMajor Store",
  description: "Where you'll find everything for your PC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
