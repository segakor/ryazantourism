import Layout from "@/components/layouts/PageLayout";
import { HeroPage } from "@/components/modules/HeroPage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <HeroPage
        imgUrl="/heroPages/biblioteka/posmotret.jpg"
        title="Посмотреть"
        desc="В Рязань любят приезжать блогеры и журналисты. Смотрите, зачем"
      />
      {children}
    </Layout>
  );
}
