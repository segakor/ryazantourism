import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { HeroPage } from "@/components/modules/HeroPage";
import { API_URL_NOVOSTI_REGION } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title: "Новости региона - Всё о туризме в Рязани и Рязанской области",
};

async function getNewsRegion() {
  const response = await fetch(API_URL_NOVOSTI_REGION, {
    next: { revalidate: 3600 },
  });
  return response.json();
}

const Page = async () => {
  const news = (await getNewsRegion());

  return (
    <Suspense fallback={<Loading />}>
      <HeroPage
        imgUrl="/heroPages/ty-s-mestnym/novosti_regiona.jpg"
        title="Новости региона"
      />
      <Body data={news.rows} />
    </Suspense>
  );
};

export default Page;
