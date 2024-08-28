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
        imgUrl="/heroPages/idei-dlya-puteshestviya/zdorove.jpg"
        title="Здоровье"
        desc="Информация для тех, кто совмещает отдых и заботу об организме"
      />
      {children}
    </Layout>
  );
}
