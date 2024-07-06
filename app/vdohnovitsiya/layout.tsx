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
        imgUrl="/heroPages/biblioteka/vdohnovitsiya.png"
        title="Вдохновиться"
        desc="Эти снимки могли стать еще лучше, если бы на них оказались вы"
        noFilter
      />
      {children}
    </Layout>
  );
}
