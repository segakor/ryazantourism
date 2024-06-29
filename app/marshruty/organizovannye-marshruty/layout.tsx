import Layout from "@/components/layouts/PageLayout";
import { Hero } from "./Hero/Hero";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Hero />
      {children}
    </Layout>
  );
}
