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
        imgUrl="/heroPages/idei-dlya-puteshestviya/suveniry.jpg"
        title="Сувениры"
        desc="Что привезти с собой из путешествия"
      />
      {children}
    </Layout>
  );
}
