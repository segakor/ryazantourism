import { EventMainCard } from "@/components/modules/EventCard/EventMainCard";
import { HeroMain } from "@/components/modules/HeroMain";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation";
import { News } from "@/components/modules/News";
import { API_URL_BANNER, API_URL_NOVOSTI_REGION } from "@/constants/apiUrl";
import { TBanner, TResponseTableData } from "@/types/types";
import { Spinner } from "@nextui-org/react";

import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Официальный туристический портал Рязани и Рязанской области: полезная информация для туристов",
  description:
    "Портал города Рязань для туристов и путешественников: экскурсии, афиши, новости, места для отдыха и туризма в Рязани и Рязанской области.",
};


async function getNewsRegion() {
  const response = await fetch(API_URL_NOVOSTI_REGION, {
    next: { revalidate: 3600 },
  });
  return response.json();
}

async function getBanners() {
  const response = await fetch(API_URL_BANNER, {
    next: { revalidate: 3600 },
  });
  return response.json();
}

const Main = async () => {

  const data = await getNewsRegion();

  const banners = await getBanners() as TResponseTableData<TBanner[]>

  return (
    <>
      <HeroMain banners={banners.rows} />
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
