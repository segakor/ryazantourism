import Layout from "@/components/layouts/PageLayout";
import { HeroPage } from "@/components/modules/HeroPage";
import { WrapperGreyPages } from "@/components/wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <WrapperGreyPages>
        <HeroPage
          imgUrl="/heroPages/ty-s-mestnym/mob_prilozh.jpg"
          title="Мобильное приложение"
        />
        {children}
      </WrapperGreyPages>
    </Layout>
  );
}
