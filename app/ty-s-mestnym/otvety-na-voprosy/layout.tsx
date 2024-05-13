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
        imgUrl="/heroPages/ty-s-mestnym/obratnaya-svyaz.jpg"
        title="Ответы на вопросы"
      />
      {children}
    </Layout>
  );
}
