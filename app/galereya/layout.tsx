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
        title="Рязанская область в объективе фотоаппарата"
      />
      {children}
    </Layout>
  );
}
