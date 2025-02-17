import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { TSinglyRoutes } from "@/types/types";
import { Suspense } from "react";
import { HeroPage } from "@/components/modules/HeroPage";
import { API_URL_NOVOSTI_REGION, API_URL_SAM_MARSH } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title:
    "Самостоятельные маршруты - Всё о туризме в Рязани и Рязанской области",
};

async function getSamMarsh() {
  const response = await fetch(API_URL_SAM_MARSH, {
    next: { revalidate: 3600 },
  });
  return response.json();
}

const Page = async () => {
  const items = await getSamMarsh();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/marshruty/samostoyatelnye_marshruty.jpg"
          title="Самостоятельные маршруты"
          desc="Готовые тематические сценарии для самостоятельных увлекательных путешествий. Рекомендуется для легких на подъем и любопытных искателей приключений"
        />
        <Body data={items.rows as TSinglyRoutes[]} />
      </Suspense>
    </>
  );
};

export default Page;
