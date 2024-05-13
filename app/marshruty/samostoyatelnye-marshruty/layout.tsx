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
        imgUrl="/heroPages/ty-s-mestnym/cit.jpg"
        title="Самостоятельные маршруты"
        desc="Готовые тематические сценарии для самостоятельных увлекательных путешествий. Рекомендуется для легких на подъем и любопытных искателей приключений"
      />
      {children}
    </Layout>
  );
}
