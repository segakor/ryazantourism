import { HeroPage } from "@/components/modules/HeroPage";
import Body from "./body";

import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { API_URL_CHTO_POSMOTRET } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title: "Что посмотреть? - Всё о туризме в Рязани и Рязанской области",
};

async function getChtoPosmotret() {
  const response = await fetch(
    API_URL_CHTO_POSMOTRET,
    {
      next: { revalidate: 3600 },
    }
  );
  return response.json();
}

const Page = async () => {
  const cards = await getChtoPosmotret();

  return (
    <div>
      <HeroPage
        imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
        title="Что посмотреть?"
        desc="Все популярные объекты города и области"
      />
      <Suspense fallback={<Loading />}>
        <Body data={cards.rows} />
      </Suspense>
    </div>
  );
};

export default Page;
