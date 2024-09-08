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
          imgUrl="/heroPages/professionalam/reestr_turoperatorov.jpg"
          title="Реестр туроператоров"
        />
        {children}
      </WrapperGreyPages>
    </Layout>
  );
}