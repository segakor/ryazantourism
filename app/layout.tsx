import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
