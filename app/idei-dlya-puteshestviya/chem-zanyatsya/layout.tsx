import Layout from "@/components/layouts/PageLayout";
import { HeroPage } from "@/components/modules/HeroPage";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <HeroPage
        imgUrl="/heroPages/idei-dlya-puteshestviya/chem-zanyatsya.jpg"
        title="Чем заняться?"
        desc="Подсказки для творческих, активных и неугомонных путешественников"
      />
      {children}
    </Layout>
  );
}
