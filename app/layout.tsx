import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Provider } from "react-redux";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import store from "@/redux/store";
import { ToastProvider } from "@/components/cart/toast-provider";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
