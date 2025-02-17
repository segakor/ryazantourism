import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { HeroPage } from "@/components/modules/HeroPage";

export const metadata: Metadata = {
  title: "Новости АРТ - Всё о туризме в Рязани и Рязанской области",
};

async function getNewsArt() {
  const response = await fetch('https://ryazantourism.ru/api-v2/newsArt', {
    next: { revalidate: 3600 },
  });
  return response.json();
}


const Page = async () => {
  const news = (await getNewsArt());

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/professionalam/novosti_art.jpg"
          title="Новости АРТ"
        />
        <Body data={news.rows} />
      </Suspense>
    </>
  );
};

export default Page;
