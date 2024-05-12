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
        imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
        title="Где остановиться?"
        desc="От модного отеля в центре до уютного глемпинга в сельской глубинке"
      />
      {children}
    </Layout>
  );
}
