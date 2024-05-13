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
        imgUrl="/heroPages/idei-dlya-puteshestviya/vecher-v-gorode.jpg"
        title="Вечер в городе"
        desc="Развлечения на любой вкус"
      />
      {children}
    </Layout>
  );
}
