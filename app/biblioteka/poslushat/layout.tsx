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
        imgUrl="/heroPages/biblioteka/poslushat.png"
        title="Послушать"
        desc="Для тех, кто любит ушами: аудиогиды, подкасты и личные истории"
      />
      {children}
    </Layout>
  );
}
