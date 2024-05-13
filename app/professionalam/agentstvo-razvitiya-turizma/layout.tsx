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
        title="Агентство развития туризма Рязанской области"
        desc="Повышаем туристическую привлекательность региона через реализацию образовательных, коммуникационных, обучающих и методических проектов с участием бизнеса, общественности и власти"
      />
      {children}
    </Layout>
  );
}
