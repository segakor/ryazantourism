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
        title="Наши проекты"
        desc="На этой странице собраны проекты от наших замечательных партнеров, которые помогут вам не просто познакомиться с нашим городом, но и стать его значимой частью."
      />
      {children}
    </Layout>
  );
}
