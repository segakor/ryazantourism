import Layout from "@/components/layouts/PageLayout";
import { HeroPage } from "@/components/modules/HeroPage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="pages">
        <HeroPage imgUrl="/heroPages/ty-s-mestnym/cit.jpg" title="Контакты" />
        {children}
      </div>
    </Layout>
  );
}
