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
        imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
        title="Что посмотреть?&&&&&&&&&&&&&&&&"
        desc="Все популярные объекты города и области"
      />
      {children}
    </Layout>
  );
}
