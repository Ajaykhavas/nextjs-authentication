import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxStoreProvider from "@/provider/redux-store-provider";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxStoreProvider>
          <Toaster />
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
