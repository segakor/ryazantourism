import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { TSinglyRoutes } from "@/types/types";
import { Suspense } from "react";
import { HeroPage } from "@/components/modules/HeroPage";
import { scenarii } from "@/constants/pages/organizovannye-marshruty/scenarii";

export const metadata: Metadata = {
  title:
    "Самостоятельные маршруты - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  const singlyRoutes = scenarii;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/marshruty/samostoyatelnye_marshruty.jpg"
          title="Самостоятельные маршруты"
          desc="Готовые тематические сценарии для самостоятельных увлекательных путешествий. Рекомендуется для легких на подъем и любопытных искателей приключений"
        />
        <Body data={singlyRoutes as TSinglyRoutes[]} />
      </Suspense>
    </>
  );
};

export default Page;
