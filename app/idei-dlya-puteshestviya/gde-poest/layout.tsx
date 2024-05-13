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
        imgUrl="/heroPages/idei-dlya-puteshestviya/gde-poest.jpg"
        title="Где поесть?"
        desc="Самые вкусные заведения Рязанской области"
      />
      {children}
    </Layout>
  );
}
