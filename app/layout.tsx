import { Inter } from "next/font/google";
import "./globals.css";
import "./typography.css";
import Layout from "@/components/layouts/Layout";
import { NextUIProvider } from "@nextui-org/react";
import NextTopLoader from "nextjs-toploader";
import { GoogleTranslateScript, YaMetricSript } from "./scripts";

const inter = Inter({ subsets: ["latin"], display: "fallback" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextUIProvider>
          <NextTopLoader color="#aeed50" />
          <GoogleTranslateScript />
          <YaMetricSript />
          <Layout>{children}</Layout>
        </NextUIProvider>
      </body>
    </html>
  );
}
