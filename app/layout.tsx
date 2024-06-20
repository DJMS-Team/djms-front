'use client'
import React from 'react'
import type { Metadata } from "next";
import Navbar from "@/components/navbar"; 
import { Provider } from 'react-redux';
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from './metadata';
import store from '@/redux/store';


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
      <body className={inter.className}>
      <Provider store={store}>
      <Navbar />
      {children}
      </Provider>
      <Footer/>
      </body>
    </html>
  );
}