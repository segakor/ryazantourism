import { EventMainCard } from "@/components/modules/EventCard/EventMainCard";
import { HeroMain } from "@/components/modules/HeroMain";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation";
import { News } from "@/components/modules/News";
import { Spinner } from "@nextui-org/react";

import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Всё о туризме в Рязани и Рязанской области",
  description:
    "Портал города Рязань для туристов и путешественников: экскурсии, афиши, новости, места для отдыха и туризма в Рязани и Рязанской области.",
};


async function getNewsRegion() {
  const response = await fetch('https://ryazantourism.ru/api-v2/newsRegion', {
    next: { revalidate: 3600 },
  });
  return response.json();
}

const Main = async () => {

  const data = await getNewsRegion();

  return (
    <>
      <HeroMain />
      <div className="grid_layout">
        <MainNavigation />
        <MainBannerRoutes />
        <EventMainCard />
        <Suspense fallback={<Spinner />}>
          <News type="region" news={data.rows.slice(0, 4)} />
        </Suspense>
      </div>
    </>
  );
};

export default Main;
