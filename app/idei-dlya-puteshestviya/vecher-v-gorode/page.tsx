import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";
import Body from "./body";
import { ResponsePlaceCard } from "@/types/types";
import { API_URL } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title: "Вечер в городе - Всё о туризме в Рязани и Рязанской области",
};

async function getPlaceCard() {
  const response = await fetch(API_URL.VECHER_V_GORODE);
  return response.json();
}

const Page = async () => {
  const cards = (await getPlaceCard()) as ResponsePlaceCard;

  return (
    <div>
      <HeroPage
        imgUrl="/heroPages/idei-dlya-puteshestviya/vecher-v-gorode.jpg"
        title="Вечер в городе"
        desc="Развлечения на любой вкус"
      />
      <Body data={cards.data} />
    </div>
  );
};

export default Page;
