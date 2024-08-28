import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { ResponseSinglyRoutes } from "@/types/types";
import { API_URL_SINGLY_ROUTES } from "@/constants/apiUrl";
import { Suspense } from "react";
import { HeroPage } from "@/components/modules/HeroPage";

export const metadata: Metadata = {
  title:
    "Самостоятельные маршруты - Всё о туризме в Рязани и Рязанской области",
};

async function getSinglyRoutes() {
  const response = await fetch(API_URL_SINGLY_ROUTES);
  return response.json();
}

const Page = async () => {
  const singlyRoutes = (await getSinglyRoutes()) as ResponseSinglyRoutes;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/marshruty/samostoyatelnye_marshruty.jpg"
          title="Самостоятельные маршруты"
          desc="Готовые тематические сценарии для самостоятельных увлекательных путешествий. Рекомендуется для легких на подъем и любопытных искателей приключений"
        />
        <Body data={singlyRoutes.data} />
      </Suspense>
    </>
  );
};

export default Page;
