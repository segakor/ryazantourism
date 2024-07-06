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
        imgUrl="/heroPages/biblioteka/mainNavigation.jpg"
        title="А что знаешь о Рязани ты?"
        desc="1000 и 1 причина отправиться в путешествие в Рязанскую область — и навсегда оставить здесь свое сердце"
      />
      {children}
    </Layout>
  );
}
