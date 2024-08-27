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
        imgUrl="/heroPages/biblioteka/pochitat.png"
        title="Почитать"
        desc="Что нужно узнать о Рязани и области, прежде чем собраться в гости"

      />
      {children}
    </Layout>
  );
}
